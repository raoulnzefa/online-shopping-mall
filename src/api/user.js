import request from "@/util/request";

export function register(data) {
  return request({
    url: "/register",
    method: "post",
    data
  });
}

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data
  });
}

export function oauthRedirect(code) {
  return request({
    url: "/oauth/redirect",
    method: "get",
    params: {
      code
    }
  });
}

export function getUserInfo(userId) {
  return request({
    url: "/userInfo",
    method: "get",
    params: {
      userId
    }
  });
}
