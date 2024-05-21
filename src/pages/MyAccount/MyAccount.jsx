import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "./MyAccount.css";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { logoutAuthenticated } from "../../services/auth";

function MyAccount() {
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("account-general");
  const navigate = useNavigate();

  useEffect(() => {
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
        navigate("/login");
      }
    });

    fetchUserData();

    return () => {
      unsubscribe();
    };
  }, [authUser, navigate]);

  const onImageChange = (event) => {
    if (event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (selectedImage) {
      const storage = getStorage();
      const storageRef = ref(storage, "avatars/" + selectedImage.name);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUserData((prevData) => ({
              ...prevData,
              avatar: downloadURL,
            }));
          });
        }
      );
    }
  };

  const saveChanges = async () => {
    if (authUser && userData) {
      const db = getFirestore();
      const userDoc = doc(db, "users", authUser.uid);
      await updateDoc(userDoc, userData);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
    logoutAuthenticated();
  };

  return (
    <MainLayout>
      <section className="home" id="home">
        <main>
          <div className="container light-style flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
            <div className="card overflow-hidden">
              <div
                className="row no-gutters row-bordered row-border-light"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="col-md-3 pt-0">
                  <div className="list-group list-group-flush account-settings-links">
                    <Link
                      className={`list-group-item list-group-item-action ${
                        activeTab === "account-general" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("account-general")}
                    >
                      General
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action ${
                        activeTab === "account-change-password" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("account-change-password")}
                    >
                      Change password
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action ${
                        activeTab === "account-info" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("account-info")}
                    >
                      Info
                    </Link>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content">
                    {activeTab === "account-general" && (
                      <div
                        className="tab-pane fade show active"
                        id="account-general"
                      >
                        <div className="card-body media align-items-center">
                          <img
                            src={userData?.avatar || "assets/feeds/feeds2.jpg"}
                            alt=""
                            className="d-block ui-w-80"
                          />
                          <div className="media-body ml-4">
                            <label className="btn btn-outline-primary">
                              Upload new photo
                              <input
                                type="file"
                                className="account-settings-fileinput"
                                onChange={onImageChange}
                              />
                            </label>
                            &nbsp;
                            <button
                              type="button"
                              className="btn btn-default md-btn-flat"
                              onClick={() => setSelectedImage(null)}
                            >
                              Reset
                            </button>
                            <div className="text-light small mt-1">
                              Allowed JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                        <button className="btn" onClick={uploadImage}>
                          Upload
                        </button>
                        <hr className="border-light m-0" />
                        <div className="card-body">
                          <div className="form-group">
                            <label className="form-label">Username</label>
                            <input
                              type="text"
                              className="form-control mb-1"
                              value={userData?.username || ""}
                              onChange={(e) =>
                                setUserData((prevData) => ({
                                  ...prevData,
                                  username: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={userData?.name || ""}
                              onChange={(e) =>
                                setUserData((prevData) => ({
                                  ...prevData,
                                  name: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input
                              type="text"
                              className="form-control mb-1"
                              value={authUser?.email || ""}
                              disabled
                            />
                            <div className="alert alert-warning mt-3">
                              Your email is not confirmed. Please check your
                              inbox.
                              <br />
                              <Link>Resend confirmation</Link>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Company</label>
                            <input
                              type="text"
                              className="form-control"
                              value={userData?.company || ""}
                              onChange={(e) =>
                                setUserData((prevData) => ({
                                  ...prevData,
                                  company: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Change Password Tab */}
                    {activeTab === "account-change-password" && (
                      <div
                        className="tab-pane fade show active"
                        id="account-change-password"
                      >
                        <div className="card-body pb-2">
                          <div className="form-group">
                            <label className="form-label">
                              Current password
                            </label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label className="form-label">New password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              Repeat new password
                            </label>
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Info Tab */}
                    {activeTab === "account-info" && (
                      <div
                        className="tab-pane fade show active"
                        id="account-info"
                      >
                        <div className="card-body pb-2">
                          <div className="form-group">
                            <label className="form-label">Bio</label>
                            <textarea className="form-control" rows="5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris nunc arcu, dignissim sit amet
                              sollicitudin iaculis, vehicula id urna. Sed luctus
                              urna nunc. Donec fermentum, magna sit amet rutrum
                              pretium, turpis dolor molestie diam, ut lacinia
                              diam risus eleifend sapien. Curabitur ac nibh
                              nulla. Maecenas nec augue placerat, viverra tellus
                              non, pulvinar risus.
                            </textarea>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Birthday</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Jan 1, 2000"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Country</label>
                            <select className="custom-select">
                              <option>USA</option>
                              <option selected>Vietnam</option>
                              <option>UK</option>
                              <option>Germany</option>
                              <option>France</option>
                            </select>
                          </div>
                        </div>
                        <hr className="border-light m-0" />
                        <div className="card-body pb-2">
                          <h6 className="mb-4">Contacts</h6>
                          <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              value="+0 (123) 456 7891"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Website</label>
                            <input type="text" className="form-control" value />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-area">
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveChanges}
              >
                Save changes
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-default"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </main>
      </section>
    </MainLayout>
  );
}

export default MyAccount;
