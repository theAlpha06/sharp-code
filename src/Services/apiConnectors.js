import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/", // Your API base URL
  timeout: 10000, // Timeout for requests
  headers: {
    "Content-Type": "application/json", // Default content type
    // Add any other default headers here
  },
});

export const apiConnector = async (method, url, bodyData = null, headers = null, params = null) => {
  try {
    console.log("hii from api connector");
    console.log(method, url, bodyData);
    const response = await axiosInstance({
      method: `${method}`,
      url: `${url}`,
      data: bodyData,
      headers,
      params,
    });
    console.log("hii from api connector");
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};

export default axiosInstance;
