import { $host } from "@/http/index";

export const getAllApprovedPosts = async (page, limit = 3) => {
  const data = await $host.get("/stories", { params: { page, limit } });
  return data;
};
export const getPostById = async (id) => {
  const data = await $host.get(`/stories/${id}`);
  return data;
};
export const createPost = async (data) => {
  for (let pair of data.entries()) {
    console.log(pair[0], pair[1]);
  }
  await $host.post("/stories/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
