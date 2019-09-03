import { register, login, oauthRedirect, getUserInfo } from "@/api/user";
import {
  getToken,
  setToken,
  removeToken,
  getUserName,
  setUserName
} from "@/util/cookies";

const state = {
  token: getToken(),
  userName: getUserName()
};

const getters = {
  token: state => state.token,
  userName: state => state.userName
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER_NAME: (state, userName) => {
    state.userName = userName;
  }
};

const actions = {
  register({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      register(userInfo)
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  oauthRedirect({ commit }, code) {
    return new Promise((resolve, reject) => {
      oauthRedirect(code)
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getUserInfo({ commit }, userId) {
    return new Promise((reslove, reject) => {
      console.log(userId);
      getUserInfo(userId)
        .then(response => {
          const { data } = response;
          commit("SET_USER_NAME", data.userName);
          setUserName(data.userName);
          reslove();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
