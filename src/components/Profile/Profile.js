import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Hii from Profile");
        const email = localStorage.getItem("email");
        console.log(email);
        if (!email) {
          console.error("Email not found in localStorage");
          return;
        }

        const response = await axios.get(
          "http://localhost:4000/api/v2/userdetail/userDetail",
          { params: { email } }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <div className="buttons">
          <a href="/update"><button>Update Your details</button></a>
          <a href="/submission"><button>Submit Your Project</button></a>
        </div>
      <div className="profile-heading">
        <h1 className="profile-title">My Profile</h1>
        <img
          className="profile-image"
          src="/public/logo192.png"
          alt="Profile Image"
        />
      </div>
      <hr />
      
      <div className="profile-section">
        <div className="profile-subsection">
          <p className="profile-text">
            {user ? user.firstName + " " + user.lastName : ""}
          </p>
          <p className="profile-text">{user?.email}</p>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-subsection">
          <p className="profile-subtitle">About</p>
          <p
            className={`profile-about ${
              user?.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400"
            }`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-subsection">
          <p className="profile-subtitle">Personal Details</p>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">First Name</p>
            <p className="profile-detail-value">
              {user?.firstName ?? "N/A"}
            </p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Last Name</p>
            <p className="profile-detail-value">
              {user?.lastName ?? "N/A"}
            </p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Gender</p>
            <p className="profile-detail-value">
              {user?.additionalDetails?.gender ?? "Add Gender"}
            </p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">Email</p>
            <p className="profile-detail-value">{user?.email ?? "N/A"}</p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Phone Number</p>
            <p className="profile-detail-value">
              {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            </p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Date Of Birth</p>
            <p className="profile-detail-value">N/A</p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">LinkedIn Id</p>
            <p className="profile-detail-value">{user?.email ?? "N/A"}</p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">GitHub Id</p>
            <p className="profile-detail-value">
              {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            </p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">Collage Details</p>
            <p className="profile-detail-value">Collage Name</p>
            <p className="profile-detail-value">Collage Location</p>
            <p className="profile-detail-value">Course</p>
            <p className="profile-detail-value">Batch</p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">GitHub Task Links</p>
            <p className="profile-detail-value">Link 1</p>
            <p className="profile-detail-value">Link 2</p>
            {/* Add more GitHub task links as needed */}
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">LinkedIn Task Link</p>
            <p className="profile-detail-value">Link 1</p>
            <p className="profile-detail-value">Link 2</p>
            {/* Add more LinkedIn task links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
