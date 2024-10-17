import axios from "axios";
import config, { base_url } from "../../utils/axiosConfig";
const register = async (userData) => {
  const res = await axios.post(`${base_url}user/register`, userData);
  if (res.data) {
    localStorage.setItem("customer", JSON.stringify(res.data));
  }
  return res.data;
};
const login = async (userData) => {
  const res = await axios.post(`${base_url}user/login`, userData);
  if (res.data) {
    localStorage.setItem("customer", JSON.stringify(res.data));
  }
  return res.data;
};
const getUserWishlist = async () => {
  const res = await axios.get(`${base_url}user/wishlist`, config);
  if (res.data) {
    return res.data;
  }
};
const addToCart = async (cartData) => {
  const res = await axios.post(`${base_url}user/cart`, cartData, config);
  if (res.data) {
    return res.data;
  }
};
export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
};
