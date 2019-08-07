import request from "@/util/request";

export function getCarousel(data) {
  return request({
    url: "/getCarousel",
    method: "get",
    data
  });
}

export function getSeckillShopping(data) {
  return request({
    url: "/getSeckillShopping",
    method: "get",
    data
  });
}

export function getTrolleyShopping(data) {
  return request({
    url: "/getTrolleyShopping",
    method: "get",
    data
  });
}

export function removeShopping(data) {
  return request({
    url: "/removeShopping",
    method: "post",
    data
  });
}

export function getNews() {
  return request({
    url: "/getNews",
    method: "get"
  });
}

export function getChannelType() {
  return request({
    url: "/getChannelType",
    method: "get"
  });
}
