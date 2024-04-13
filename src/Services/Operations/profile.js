import { apiConnector } from "../apiConnectors"
import { toast } from "react-hot-toast"
import { endpoints } from "../apis"
import { setLoading} from "../../slices/authSlice"


const {
    PROFILE_API,
} = endpoints;


export function profile(token,
    { gender,
        collage,
        collageLocation,
        mobile,
        branch, 
        navigate}

) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(
            gender,
            collage,
            collageLocation,
            mobile,
            branch,)
        dispatch(setLoading(true))
        try {
            console.log(gender,
                collage,
                collageLocation,
                mobile,
                branch,)
            const response = await apiConnector(
                "POST",
                PROFILE_API,
                {
                    gender,
                    collage,
                    collageLocation,
                    mobile,
                    branch,
                },
                {
                    Authorization: `Bearer ${token}`,
                }
            )

            console.log("PROFILE API RESPONSE............", response)

            if (response.status!=200) {
                throw new Error(response.message)
            }
            toast.success("Profile update Successful")
            // navigate("/")
        } catch (error) {
            // console.log("SIGNUP API ERROR............", error)
            toast.error("Profile update Failed")
            navigate("/team")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}