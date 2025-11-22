import axiosClient from "./axiosClient";

export const getCampaigns = () => axiosClient.get("/campaigns/");
export const getCampaign = (id) => axiosClient.get(`/campaigns/${id}/`);
export const createCampaign = (body) => axiosClient.post("/campaigns/", body);
export const updateCampaign = (id, body) =>
  axiosClient.put(`/campaigns/${id}/`, body);
export const deleteCampaign = (id) =>
  axiosClient.delete(`/campaigns/${id}/`);
