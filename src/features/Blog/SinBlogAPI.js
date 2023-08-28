import axionsInstance from "../../axios/axiosInstance";

const getSinBlogs = async (id) => {
  const response = await axionsInstance.get(`/blogs/${id}`);
  return response.data;
};

export default getSinBlogs;
