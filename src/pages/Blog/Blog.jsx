import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { FaBell, FaHome, FaPlus, FaSearch, FaTree } from "react-icons/fa";
import { RiArrowLeftSLine, RiCloseLine, RiSettings2Fill } from "react-icons/ri";
import BlogFeed from "../../components/BlogFeed/BlogFeed";
import { isAuthenticated } from "../../services/auth";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function Blog() {
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [postCaption, setPostCaption] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [postStep, setPostStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchedPostIds, setSearchedPostIds] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isOpenNoti, setIsOpenNoti] = useState(false);

  const toggleOpenNoti = () => {
    setIsOpenNoti(!isOpenNoti);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const normalizedKeyword = normalizeKeyword(searchKeyword);

    if (!normalizedKeyword) {
      setSearchedPostIds([]);
      return;
    }

    try {
      const db = getFirestore();
      const postsRef = collection(db, "posts");

      const querySnapshot = await getDocs(postsRef);
      const foundPostIds = [];

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        const normalizedContent = normalizeKeyword(postData.content);

        if (normalizedContent.includes(normalizedKeyword)) {
          foundPostIds.push(doc.id);
        }
      });

      setSearchedPostIds(foundPostIds);
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };

  const normalizeKeyword = (keyword) => {
    if (!keyword) return "";
    return keyword
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const db = getFirestore();
      const notiRef = collection(db, "notifications");
      const q = query(notiRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const notiList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(notiList);
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const isAuth = isAuthenticated();
    if (isAuth) {
      const fetchUserData = async () => {
        if (authUser) {
          try {
            const db = getFirestore();
            const userDoc = doc(db, "users", authUser.uid);
            const userSnapshot = await getDoc(userDoc);
            if (userSnapshot.exists()) {
              setUserData(userSnapshot.data());
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      };
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
          setUserData(null);
        }
      });

      fetchUserData();

      return () => {
        unsubscribe();
      };
    }
  }, [authUser]);

  const handlePostSubmission = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
    setIsCreatorOpen(true);
  };

  const handlePostCancel = () => {
    setIsModalOpen(false);
    setIsCreatorOpen(false);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPostImage(event.target.files[0]);
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  const proceedToNextStep = () => {
    if (postImage) {
      setPostStep(2);
    }
  };

  const handleSubmitPost = async () => {
    try {
      const currentTime = Timestamp.now();

      let imageUrl = "";
      if (postImage) {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          `post_images/${authUser.uid}/${postImage.name}`
        );
        await uploadBytes(storageRef, postImage);
        imageUrl = await getDownloadURL(storageRef);
      }

      const db = getFirestore();
      const postsRef = collection(db, "posts");
      const postDocRef = await addDoc(postsRef, {
        userId: authUser.uid,
        content: postCaption,
        imageUrl: imageUrl,
        createdAt: currentTime,
        likes: 0,
        comments: 0,
      });

      const notificationsRef = collection(db, "notifications");
      await addDoc(notificationsRef, {
        postId: postDocRef.id,
        postContent: postCaption,
        posterId: authUser.uid,
        posterName: userData.name,
        createdAt: currentTime,
      });

      setPostCaption("");
      setPostImage(null);
      setImagePreview("");
      setIsModalOpen(false);
      setIsCreatorOpen(false);
      setPostStep(1);
    } catch (error) {
      console.error("Error adding post or creating notifications: ", error);
    }
  };

  return (
    <div className="blog">
      <nav>
        <div className="container">
          <h2 className="log">
            <Link to="/" className="logo">
              {" "}
              <i className="fas fa-tree">
                <FaTree />
              </i>{" "}
              BloomBuddy{" "}
            </Link>
          </h2>
          <div className="search-bar">
            <i className="uil uil-search">
              <FaSearch />
            </i>
            <input
              type="search"
              placeholder="Search Community"
              value={searchKeyword}
              onChange={handleSearchChange}
            />
          </div>
          <div className="create">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
            <div className="profile-photo" id="my-profile-picture">
              <img alt="" src="assets/feeds/feeds2.jpg" />
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="left">
            <Link className="profile">
              <div className="profile-photo" id="my-profile-picture">
                <img alt="" src={userData?.avatar} />
              </div>
              <div className="handle">
                <h4>{userData?.name}</h4>
                <p className="text-muted">{userData?.email}</p>
              </div>
            </Link>
            <div className="sidebar">
              <Link className="menu-item active" to="/">
                <span>
                  <i className="uil uil-home">
                    <FaHome />
                  </i>
                </span>
                <h3>Home</h3>
              </Link>
              <Link
                className="menu-item"
                id="notifications"
                onClick={toggleOpenNoti}
              >
                <span>
                  <i className="uil uil-bell">
                    <FaBell />
                    <small className="notification-count" id="ntCounter1">
                      10+
                    </small>
                  </i>
                </span>
                <h3>Notification</h3>
                <div
                  className="notifications-popup"
                  style={{ display: isOpenNoti ? "block" : "none" }}
                >
                  {notifications.map((notification) => (
                    <div key={notification.id}>
                      <div className="notification-body">
                        <b>{notification.posterName}</b> posted:{" "}
                        {notification.postContent}
                        <br />
                        <small className="text-muted">
                          {new Date(
                            notification.createdAt.seconds * 1000
                          ).toLocaleString()}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>

              <Link className="menu-item" to="/account">
                <span>
                  <i className="uil uil-setting">
                    <RiSettings2Fill />
                  </i>
                </span>
                <h3>Setting</h3>
              </Link>
            </div>
          </div>
          <div className="middle">
            <form
              className="create-post input-post"
              onClick={handlePostSubmission}
            >
              <div className="profile-photo">
                <img
                  alt=""
                  src={userData?.avatar || "assets/feeds/feeds2.jpg"}
                />
              </div>
              <div className="create-post-heading">What's on your mind?</div>
            </form>
            <div className="feeds">
              {searchedPostIds.length > 0 ? (
                searchedPostIds.map((postId) => (
                  <BlogFeed key={postId} postId={postId} />
                ))
              ) : (
                <BlogFeed />
              )}
            </div>
          </div>
        </div>
      </main>
      <div className="popup profile-popup">
        <div>
          <div className="popup-box profile-popup-box">
            <h1>User777</h1>
            <p>@User777</p>
            <div id="my-profile-picture">
              <img alt="" src="assets/feeds/feeds2.jpg" />
            </div>
            <label for="profile-upload" className="btn btn-primary btn-lg">
              Update Profile Picture
            </label>
            <input
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              id="profile-upload"
            />
            <button className="btn btn-primary btn-lg">Log Out</button>
          </div>
          <span className="close">
            <i className="uil uil-multiply"></i>
          </span>
        </div>
      </div>
      <div className="popup add-post-popup">
        <div>
          <form className="popup-box add-post-popup">
            <h1>Add New Post</h1>
            <div className="row post-title">
              <label>Caption</label>
              <input
                type="text"
                placeholder="What's on your mind?"
                id="create-post"
              />
            </div>
            <div className="row post-img">
              <img alt="" src="assets/feeds/feeds6.png" id="postImg" />
              <label for="feed-pic-upload" className="feed-upload-button">
                <span>
                  <i className="uil uil-plus">
                    <FaPlus />
                  </i>
                </span>
                Uoload A Picture
              </label>
              <input
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                id="feed-pic-upload"
              />
              <input
                type="submit"
                className="btn btn-primary btn-lg"
                value="Add Post"
              />
            </div>
          </form>
          <span className="close">
            <i className="uil uil-multiply"></i>
          </span>
        </div>
      </div>
      {isModalOpen && <div className="modal"></div>}
      {isCreatorOpen && (
        <div className="post-creator">
          <div className="post-creator-wrapper">
            <div className="post-creator-header">
              <i className="post-creator-back" onClick={() => setPostStep(1)}>
                <RiArrowLeftSLine />
              </i>
              <p>Select image to post</p>
              <i className="post-creator-close" onClick={handlePostCancel}>
                <RiCloseLine />
              </i>
            </div>
            {postStep === 1 && (
              <>
                <p>Add a image to your post</p>
                <div className="post-creator-area">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                  />
                  {postImage && (
                    <>
                      <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                      </div>
                      <button className="btn" onClick={proceedToNextStep}>
                        Next
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
            {postStep === 2 && (
              <>
                <p>Add a caption to your post</p>
                <div className="post-creator-area">
                  <input
                    type="text"
                    placeholder="Enter caption"
                    value={postCaption}
                    onChange={(e) => setPostCaption(e.target.value)}
                  />
                  <button className="btn" onClick={handleSubmitPost}>
                    Post
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
