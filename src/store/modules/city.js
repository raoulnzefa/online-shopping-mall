const state = {
  cityName: ["11", "110101"]
};

const getters = {
  cityName: state => state.cityName
};

const mutations = {
  SET_CITYNAME: (state, cityName) => {
    state.cityName = cityName;
  }
};

export default {
  state,
  getters,
  mutations
};
