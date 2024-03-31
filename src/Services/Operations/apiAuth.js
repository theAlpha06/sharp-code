import { apiConnector } from "../apiConnectors"
import { toast } from "react-hot-toast"
import { endpoints } from "../apis"
import { setLoading, setToken } from "../../slices/authSlice"


const {
  SIGNUP_API,
  LOGIN_API,
} = endpoints;

export function signUp(

  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  domain,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true))
    try {

      const response = await apiConnector("POST", 'http://localhost:4000/api/v2/auth/signup', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        domain,
        
      })
      console.log(response.message);
      console.log("SIGNUP API RESPONSE............", response)

      if (!response.success) {
        throw new Error(response.message)
      }
      toast.success("Register Successful")
      navigate("/login")
      
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error(error.message)
      navigate("/register")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.success) {
        throw new Error(response.message)
      }

      console.log("LOGIN API RESPONSE............ successful")
      toast.success("Login Successful")
      dispatch(setToken(response.token))
      // const userImage = response.data?.user?.image
      //   ? response.data.user.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      // dispatch(setUser({ ...response.data.user, image: userImage }))
      localStorage.setItem("token", JSON.stringify(response.token))
      localStorage.setItem("email", JSON.stringify(response.email))
      navigate("/user/profile")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed ")
      navigate("/register")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}



