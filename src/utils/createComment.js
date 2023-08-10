import axios from 'axios';

const url = import.meta.env.VITE_APP_MAIN_URL;

const createComment = async (videoId, comment) => {
  try {
    const response = await axios.post(`${url}/comment/${videoId}`, comment);

    return response;
  } catch (err) {
    return err;
  }
};

export default createComment;
