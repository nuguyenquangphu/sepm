import React, { useCallback, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  FaEllipsisH,
  FaHeart,
  FaPen,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaTrash,
} from "react-icons/fa";

function BlogFeed({ postId }) {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  const fetchComments = useCallback(async (postId) => {
    try {
      const db = getFirestore();
      const commentsCollection = collection(db, "posts", postId, "comments");
      const commentsQuery = query(
        commentsCollection,
        orderBy("createdAt", "asc")
      );
      const commentsSnapshot = await getDocs(commentsQuery);
      const commentsData = await Promise.all(
        commentsSnapshot.docs.map(async (commentDoc) => {
          const commentData = commentDoc.data();
          const userDoc = doc(db, "users", commentData.userId);
          const userSnap = await getDoc(userDoc);
          const userData = userSnap.data();
          return {
            id: commentDoc.id,
            ...commentData,
            user: userData,
          };
        })
      );
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: commentsData,
      }));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      const db = getFirestore();
      let postsData = [];

      if (postId) {
        const postRef = doc(db, "posts", postId);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
          const postData = postSnap.data();
          const userDoc = doc(db, "users", postData.userId);
          const userSnap = await getDoc(userDoc);
          const userData = userSnap.data();

          const likeRef = doc(db, "likes", `${userId}_${postId}`);
          const likeDoc = await getDoc(likeRef);
          const isLiked = likeDoc.exists();

          await fetchComments(postId);

          postsData = [
            {
              id: postId,
              user: userData,
              isLiked: isLiked,
              ...postData,
            },
          ];
        }
      } else {
        const postsCollection = collection(db, "posts");
        const postsSnapshot = await getDocs(postsCollection);
        postsData = await Promise.all(
          postsSnapshot.docs.map(async (postDoc) => {
            const postData = postDoc.data();
            const userDoc = doc(db, "users", postData.userId);
            const userSnap = await getDoc(userDoc);
            const userData = userSnap.data();

            const likeRef = doc(db, "likes", `${userId}_${postDoc.id}`);
            const likeDoc = await getDoc(likeRef);
            const isLiked = likeDoc.exists();

            await fetchComments(postDoc.id);

            return {
              id: postDoc.id,
              user: userData,
              isLiked: isLiked,
              ...postData,
            };
          })
        );
      }

      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [userId, fetchComments, postId]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchPosts();
    }
  }, [userId, fetchPosts]);

  const handleLikePost = async (postId) => {
    try {
      const db = getFirestore();
      const postRef = doc(db, "posts", postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const postData = postDoc.data();
        const currentLikes = postData.likes || 0;
        const likeRef = doc(db, "likes", `${userId}_${postId}`);

        const likeDoc = await getDoc(likeRef);

        if (!likeDoc.exists()) {
          await updateDoc(postRef, { likes: currentLikes + 1 });
          await setDoc(likeRef, { userId, postId });
          fetchPosts();
        }
      } else {
        console.error("Error: Post does not exist");
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleUnlikePost = async (postId) => {
    try {
      const db = getFirestore();
      const postRef = doc(db, "posts", postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const postData = postDoc.data();
        const currentLikes = postData.likes || 0;
        const likeRef = doc(db, "likes", `${userId}_${postId}`);

        const likeDoc = await getDoc(likeRef);

        if (likeDoc.exists()) {
          await updateDoc(postRef, { likes: currentLikes - 1 });
          await deleteDoc(likeRef);
          fetchPosts();
          window.location.reload();
        }
      } else {
        console.error("Error: Post does not exist");
      }
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  const handleDeletePost = async (postId, postUserId) => {
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser && currentUser.uid === postUserId) {
        const db = getFirestore();
        const postRef = doc(db, "posts", postId);
        await deleteDoc(postRef);
        fetchPosts();
      } else {
        console.log("Bạn không có quyền xóa bài đăng này.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleAddComment = async (postId) => {
    try {
      const db = getFirestore();
      const commentRef = collection(db, "posts", postId, "comments");
      const newCommentData = {
        userId: userId,
        content: newComment[postId],
        createdAt: new Date(),
      };
      await addDoc(commentRef, newCommentData);
      setNewComment((prev) => ({ ...prev, [postId]: "" }));
      fetchComments(postId);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleCommentChange = (postId, content) => {
    setNewComment((prev) => ({
      ...prev,
      [postId]: content,
    }));
  };

  return (
    <>
      {posts?.map((post) => (
        <div className="feed" key={post.id}>
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img alt="" src={post.user.avatar} />
              </div>
              <div className="info">
                <h3 style={{ fontSize: "1.1em", fontWeight: "bold" }}>
                  {post.user.name}
                </h3>
                <small>
                  {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                </small>
              </div>
            </div>
            <span className="edit">
              <i>
                <FaEllipsisH />
              </i>
              <ul className="edit-menu">
                <li>
                  <i className="uil uil-pen">
                    <FaPen />
                  </i>
                  Edit
                </li>
                <li onClick={() => handleDeletePost(post.id, post.userId)}>
                  <i className="uil uil-trash-alt">
                    <FaTrash />
                  </i>
                  Delete
                </li>
              </ul>
            </span>
          </div>
          <div className="photo">
            <img alt="" src={post.imageUrl} />
          </div>
          <div className="action-buttons">
            <div className="interaction-buttons">
              <span>
                {post.isLiked ? (
                  <i onClick={() => handleUnlikePost(post.id)}>
                    <FaHeart />
                  </i>
                ) : (
                  <i onClick={() => handleLikePost(post.id)}>
                    <FaRegHeart />
                  </i>
                )}
              </span>
              <span>
                <i className="uil uil-comment">
                  <FaRegComment />
                </i>
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark">
                  <FaRegBookmark />
                </i>
              </span>
            </div>
          </div>
          <div className="liked-by">
            <p>
              Liked by <b>{post.likes}</b> and <b>{post.others} others</b>
            </p>
          </div>
          <div className="caption">
            <p>
              <b>{post.user.name}</b> {post.content}{" "}
            </p>
          </div>
          <div className="comments">
            {comments[post.id]?.map((comment) => (
              <div key={comment.id} className="comment">
                <b>{comment.user.name}</b> {comment.content}
              </div>
            ))}
            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
              />
              <button onClick={() => handleAddComment(post.id)}>Post</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogFeed;
