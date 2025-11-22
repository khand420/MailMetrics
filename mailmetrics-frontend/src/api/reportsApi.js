import axiosClient from "./axiosClient";

export const getReports = () => axiosClient.get("/reports/");
