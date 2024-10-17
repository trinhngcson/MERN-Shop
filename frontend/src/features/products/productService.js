import axios from "axios";
import config, { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const res = await axios.get(`${base_url}product`);
  if (res.data) {
    return res.data;
  }
};
const addToWishlist = async (prodID) => {
  const res = await axios.put(
    `${base_url}product/wishlist`,
    { prodID },
    config
  );
  if (res.data) {
    return res.data;
  }
};
const getProductById = async (prodID) => {
  const res = await axios.get(`${base_url}product/${prodID}`);
  if (res.data) {
    return res.data;
  }
};
export const productService = {
  getProducts,
  addToWishlist,
  getProductById,
};
