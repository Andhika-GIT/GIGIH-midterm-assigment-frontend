import axios from "axios";

const url = import.meta.env.VITE_APP_MAIN_URL;

const getVideos = async () => {
  try {
    const response = await axios.get(`${url}/video`);

    return response;
  } catch (err) {
    return err;
  }
};

export default getVideos;
