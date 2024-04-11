import axios from "axios";
axios.defaults.withCredentials = true;

export const apiConnector = async (method, url, data = null) => {
  try {
    console.log(data);
    console.log("hii from apiconnector");
    const response = await axios({
      method: method,
      url: url,
      data: data,
    },{
      withCredentials: true,
    });
    console.log("hi2 from apiconnector");
    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error.message);
    throw error;
  }
};
