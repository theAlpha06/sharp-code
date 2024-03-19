
import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { formattedDate } from "../../../utils/dateFormatter"
// import IconBtn from "../../Common/IconBtn"

export default function Profile() {
  const { user } = useSelector((state) => state.profile)
//   const navigate = useNavigate()

  return (
    <>
      <h1 className="">
        My Profile
      </h1>
      <div className="">
        <div className="">
          
          <div className="s">
            <p className="">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="">{user?.email}</p>
          </div>
        </div>
        
          
        
      </div>
      <div className="">
        <div className="">
          <p className="">About</p>
          {/* <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          > */}
          
          {/* </IconBtn> */}
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
          {/* <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
           
          </IconBtn> */}
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
              {/* <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}