import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getAllBlog = async () => {
  const res = await axios.get(`${base_url}blog/`);
  if (res.data) {
    return res.data;
  }
};
const getBlogById = async (id) => {
  const res = await axios.get(`${base_url}blog/${id}`);
  if (res.data) {
    return res.data;
  }
};
export const blogService = { getAllBlog, getBlogById };
