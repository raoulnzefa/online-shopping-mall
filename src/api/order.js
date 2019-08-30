import request from "@/util/request";

export function getOrder(data) {
  return request({
    url: "/getOrder",
    method: "get",
    data
  });
}
