
const BASE_URL='http://localhost:4000/'

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "api/v2/auth/signup",
  LOGIN_API: BASE_URL + "api/v2/auth/login",
  PROFILE_API: BASE_URL+"api/v2/profile/updateProfile",
  SUBMISSION_API: BASE_URL+"api/v2/submission",
  UPDATE_API: BASE_URL+"api/v2/profile/updateProfile",
  LOGOUT_API: BASE_URL+"api/v2/auth/logout",
}