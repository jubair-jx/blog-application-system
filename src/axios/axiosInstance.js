import axios from "axios";

const axionsInstance = axios.create({
  baseURL: "http://localhost:9000/",
});
export default axionsInstance;
