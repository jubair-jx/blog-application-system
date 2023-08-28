import axionsInstance from "../../axios/axiosInstance";

const getBlogs = async () => {
  const response = await axionsInstance.get("/blogs");
  return response.data;
};

export default getBlogs;
