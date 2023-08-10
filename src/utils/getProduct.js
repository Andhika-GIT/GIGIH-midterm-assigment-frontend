import axios from 'axios';

const url = import.meta.env.VITE_APP_MAIN_URL;

const getProduct = async (videoId) => {
  try {
    const response = await axios.get(`${url}/product/${videoId}`);

    return response;
  } catch (err) {
    return err;
  }
};

export default getProduct;
