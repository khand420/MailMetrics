import axiosClient from "./axiosClient";

export const login = async (username, password) => {
  const { data } = await axiosClient.post("/token/", {
    username,
    password,
  });

  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);

  return data;
};




