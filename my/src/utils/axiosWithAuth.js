import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://african-marketplace11.herokuapp.com/",
  });
};
