import axiosClient from "./axiosClient";

export const getEmails = (campaignId) =>
  axiosClient.get(`/emails/?campaign=${campaignId}`);

export const createEmail = (body) => axiosClient.post("/emails/", body);

export const bulkUploadEmails = (campaignId, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axiosClient.post(`/emails/bulk/${campaignId}/`, formData);
};
