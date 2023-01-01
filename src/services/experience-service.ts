import axiosInstance from "../api/axiosConfig";

export const getExperienceDataFromSanity = async () => {
  const { data } = await axiosInstance.get(
    `data/query/production?query=${process.env.VITE_SANITY_QUERY}`
  );
  return data?.result;
};
