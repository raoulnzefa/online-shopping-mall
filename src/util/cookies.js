import Cookies from "js-cookie";

const tokenKey = "token";
const name = "name";
const shoppingCountKey = "scount";
const shoppingPriceKey = "sprice";

export function getToken() {
  return Cookies.get(tokenKey);
}

export function setToken(token) {
  return Cookies.set(tokenKey, token, { expires: 7 });
}

export function removeToken() {
  return Cookies.remove(tokenKey);
}

export function getUserName() {
  return Cookies.get(name);
}

export function setUserName(userName) {
  return Cookies.set(name, userName, { expires: 30 });
}

export function removeUserName() {
  return Cookies.remove(name);
}

export function getShoppingCount() {
  return Cookies.get(shoppingCountKey);
}

export function setShoppingCount(shoppingcount) {
  return Cookies.set(shoppingCountKey, shoppingcount, { expires: 30 });
}

export function removeShoppingCount() {
  return Cookies.remove(shoppingCountKey);
}

export function getShoppingPrice() {
  return Cookies.get(shoppingPriceKey);
}

export function setShoppingPrice(shoppingPrice) {
  return Cookies.set(shoppingPriceKey, shoppingPrice, { expires: 30 });
}

export function removeShoppingPrice() {
  return Cookies.remove(shoppingPriceKey);
}
