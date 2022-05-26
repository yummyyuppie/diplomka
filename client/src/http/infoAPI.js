import { $host } from "@/http/index";

export const calculateChances = async (s1, s2, q, p) => {
  const data = await $host.get("/info/chances", { params: { s1, s2, q, p } });
  return data;
};
export const getSpecialityInfo = async (id) => {
  const data = await $host.get(`/info/${id}`);
  return data;
};
export const uniInfo = async (id, grantType) => {
  const data = await $host.get(`/info/${id}/uni`, { params: { grantType } });
  return data;
};
export const getAllSpecialities = async (page, limit) => {
  const data = await $host.get(
    `/info/specialities?page=${page}&limit=${limit}`
  );
  return data;
};
export const getAllSpec = async () => {
  const data = await  $host.get('/info/edu_progs')
  return data
}
export const getOtherSpecialities = async (id) => {
  const data = await $host.get(`/info/others/${id}`);
  return data;
};
export const fetchSubjectsAPI = async () => {
  const data = await $host.get("/info/subjects");
  return data;
};
