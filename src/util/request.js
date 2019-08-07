import axios from "axios";

const server = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

server.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 0) {
      return Promise.reject(res.msg || "error");
    } else {
      return res;
    }
  },
  error => {
    console.log("error" + error);
    return Promise.reject(error);
  }
);

export default server;
