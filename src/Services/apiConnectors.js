import axios from "axios";

export const apiConnector = async (method, url, data = null) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error.message);
    throw error;
  }
};
