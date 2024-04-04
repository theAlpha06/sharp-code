import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

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
        
        const response = await axios.get('http://localhost:4000/api/v2/userdetail/userDetail', { params: { email } });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <h1 className="">
        My Profile
      </h1>
      <div className="">
        <div className="">
          <div className="s">
            <p className="">
              {user ? user.firstName + " " + user.lastName : ""}
            </p>
            <p className="">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <p className="">About</p>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="">
        <div className="">
          <p className="">
            Personal Details
          </p>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
