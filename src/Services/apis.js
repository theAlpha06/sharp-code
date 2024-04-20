
const BASE_URL="https://server-qcrx.onrender.com";
// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API:  BASE_URL+"/api/v2/auth/signup",
  LOGIN_API:  BASE_URL+"/api/v2/auth/login",
  PROFILE_API:BASE_URL+"/api/v2/userdetail/userDetail",
  SUBMISSION_API:BASE_URL+"/api/v2/submission",
  UPDATE_API:BASE_URL+"/api/v2/profile/updateProfile",
  LOGOUT_API:BASE_URL+"/api/v2/auth/logout",
}