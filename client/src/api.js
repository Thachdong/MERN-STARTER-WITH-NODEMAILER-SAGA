import axios from "axios";

export const storeToken = (token) => {
  localStorage.setItem("access-token", token);
};

export const getToken = () => {
  return localStorage.getItem("access-token");
};

export const removeToken = () => {
  localStorage.removeItem("access-token");
};

export const register = (userInfo) => {
  return axios
    .post("/user/register", userInfo)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export const login = (email, password) => {
  return axios
    .post("/user/login", { email, password })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export const logout = () => {
  let token = getToken();
  return axios.post(
    "/user/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getUser = (token) => {
  return axios
    .get("/user/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};
