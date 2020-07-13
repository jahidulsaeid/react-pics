import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9wgpzb224ExFetb_dJQQoXP7L5ScDhQVX2lFfG3vI4s",
  },
});
