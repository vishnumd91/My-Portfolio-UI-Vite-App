import axiosInstance from "../api/axiosConfig";

export const getExperienceData = async () => {
  const { data } = await axiosInstance.get("/portfolio/experience");
  return data;
};
