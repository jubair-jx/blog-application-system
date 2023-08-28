import axionsInstance from "../../axios/axiosInstance";

//?tags_like=express&tags_like=react&id_ne=1&_limit=4
const getRelatedBlogs = async ({ tags, id }) => {
  const limit = 3;
  const queryString =
    tags?.length > 0
      ? tags?.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axionsInstance.get(`/blogs?${queryString}`);
  return response.data;
};

export default getRelatedBlogs;
