import { getTrolleyShopping, removeShopping } from "@/api/home";
import {
  getShoppingCount,
  setShoppingCount,
  getShoppingPrice,
  setShoppingPrice
} from "@/util/cookies";

const state = {
  count: Number(getShoppingCount()) || 0,
  price: Number(getShoppingPrice()) || 0
};

const getters = {
  count: state => state.count,
  price: state => state.price
};

const mutations = {
  SET_COUNT: (state, count) => {
    state.count = count;
  },
  SET_PRICE: (state, price) => {
    state.price = price;
  }
};

const actions = {
  getTrolleyShopping({ commit }) {
    return new Promise((resolve, reject) => {
      getTrolleyShopping()
        .then(response => {
          const { data } = response;
          let [count, price] = [0, 0];
          data.shoppingList.forEach(function(item) {
            count = count + item.count;
            price = price + item.price * item.count;
          });
          commit("SET_PRICE", price);
          commit("SET_COUNT", count);
          setShoppingCount(count);
          setShoppingPrice(price);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  removeShopping({ commit }, shoppingInfo) {
    return new Promise((resolve, reject) => {
      removeShopping(shoppingInfo)
        .then(() => {
          const price = state.price - shoppingInfo.price * shoppingInfo.count;
          const count = state.count - shoppingInfo.count;
          commit("SET_PRICE", price);
          commit("SET_COUNT", count);
          setShoppingCount(count);
          setShoppingPrice(price);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
