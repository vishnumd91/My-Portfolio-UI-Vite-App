import axiosInstance from "../api/axiosConfig";

export const getDataFromSanity = async (sanityQuery: string) => {
  const { data } = await axiosInstance.get(
    `data/query/production?query=${sanityQuery}`
  );
  return data?.result;
};
