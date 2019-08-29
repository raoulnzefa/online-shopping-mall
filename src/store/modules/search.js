import { getHistorySearch, setHistorySearch } from "@/util/cookies";
const state = {
  history: getHistorySearch
};

const getters = {
  history: state => state.history
};

const mutations = {
  SET_HISTORY: (state, history) => {
    state.history = history;
  }
};

const actions = {
  getSearch({ commit }, history) {
    return new Promise(() => {
      let obj = { value: history };
      commit("SET_HISTORY", obj);
      setHistorySearch(obj);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
