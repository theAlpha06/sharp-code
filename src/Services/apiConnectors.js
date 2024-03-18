import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData = null, headers = null, params = null) => {
   try {
    const response = await axiosInstance({
      method: `${method}`,
      url: `${url}`,
      data: bodyData,
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error; 
  }
};