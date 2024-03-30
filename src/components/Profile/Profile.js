import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { apiConnector } from "../../Services/apiConnectors";
import axios from "axios";

export default function Profile() {
  const { user } = useSelector((state) => state.profile);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const response = await apiConnector("GET", 'http://localhost:4000/api/v2/userdetail/userDetail');
        const response =await axios.get('http://localhost:4000/api/v2/userdetail/userDetail');
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="">My Profile</h1>
      {userDetails && (
        <div className="">
          <div className="">
            <div className="s">
              <p className="">{userDetails.firstName} {userDetails.lastName}</p>
              <p className="">{userDetails.email}</p>
            </div>
          </div>
        </div>
      )}
      {userDetails && (
        <div className="">
          <div className="">
            <p className="">About</p>
          </div>
          <p
            className={`${
              userDetails.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400"
            } text-sm font-medium`}
          >
            {userDetails.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>
      )}
      {userDetails && (
        <div className="">
          <div className="">
            <p className="">Personal Details</p>
          </div>
          <div className="flex max-w-[500px] justify-between">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">First Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {userDetails.firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Email</p>
                <p className="text-sm font-medium text-richblack-5">
                  {userDetails.email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Gender</p>
                <p className="text-sm font-medium text-richblack-5">
                  {userDetails.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {userDetails.lastName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                <p className="text-sm font-medium text-richblack-5">
                  {userDetails.additionalDetails?.contactNumber ?? "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                {/* <p className="text-sm font-medium text-richblack-5">
                  {formattedDate(userDetails.additionalDetails?.dateOfBirth) ??
                    "Add Date Of Birth"}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
