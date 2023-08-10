import axios from 'axios';

const url = import.meta.env.VITE_APP_MAIN_URL;

const getComment = async (videoId) => {
  try {
    const response = await axios.get(`${url}/comment/${videoId}`);

    return response;
  } catch (err) {
    return err;
  }
};

export default getComment;
