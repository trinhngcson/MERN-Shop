import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const postQuery = async (data) => {
  const res = await axios.post(`${base_url}enquiry/`, data);
  if (res.data) {
    return res.data;
  }
};

export const contactService = { postQuery };
