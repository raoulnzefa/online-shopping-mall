/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

export const addressArrList = [
  "北京市",
  "天津市",
  "上海市",
  "重庆市",
  "河北省",
  "山西省",
  "辽宁省",
  "吉林省",
  "黑龙江省",
  "江苏省",
  "浙江省",
  "安徽省",
  "福建省",
  "江西省",
  "山东省",
  "河南省",
  "湖北省",
  "湖南省",
  "广东省",
  "海南省",
  "四川省",
  "云南省",
  "贵州省",
  "陕西省",
  "甘肃省",
  "青海省",
  "台湾省"
];

export const channelArrList = [
  {
    type: 101,
    list: [{ name: "家用电器", channelId: "01" }]
  },
  {
    type: 102,
    list: [
      { name: "手机", channelId: "02" },
      { name: "运营商", channelId: "03" },
      { name: "数码", channelId: "04" }
    ]
  },
  {
    type: 103,
    list: [{ name: "电脑", channelId: "05" }, { name: "办公", channelId: "06" }]
  },
  {
    type: 104,
    list: [
      { name: "家居", channelId: "07" },
      { name: "家具", channelId: "08" },
      { name: "家装", channelId: "09" },
      { name: "厨具", channelId: "10" }
    ]
  },
  {
    type: 105,
    list: [
      { name: "男装", channelId: "11" },
      { name: "女装", channelId: "12" },
      { name: "童装", channelId: "13" },
      { name: "内衣", channelId: "14" }
    ]
  },
  {
    type: 106,
    list: [
      { name: "美妆", channelId: "15" },
      { name: "个护清洁", channelId: "16" },
      { name: "宠物", channelId: "17" }
    ]
  },
  {
    type: 107,
    list: [
      { name: "女鞋", channelId: "18" },
      { name: "箱包", channelId: "19" },
      { name: "钟表", channelId: "20" },
      { name: "珠宝", channelId: "21" }
    ]
  },
  {
    type: 108,
    list: [
      { name: "男鞋", channelId: "22" },
      { name: "运动", channelId: "23" },
      { name: "户外", channelId: "24" }
    ]
  },
  {
    type: 109,
    list: [
      { name: "房产", channelId: "25" },
      { name: "汽车", channelId: "26" },
      { name: "汽车用品", channelId: "27" }
    ]
  },
  {
    type: 110,
    list: [
      { name: "母婴", channelId: "28" },
      { name: "玩具乐器", channelId: "29" }
    ]
  },
  {
    type: 110,
    list: [
      { name: "食品", channelId: "30" },
      { name: "酒类", channelId: "31" },
      { name: "生鲜", channelId: "31" },
      { name: "特产", channelId: "31" }
    ]
  },
  {
    type: 111,
    list: [
      { name: "艺术", channelId: "30" },
      { name: "礼品鲜花", channelId: "31" },
      { name: "农资绿植", channelId: "32" }
    ]
  },
  {
    type: 112,
    list: [
      { name: "医药保健", channelId: "33" },
      { name: "计生情趣", channelId: "34" }
    ]
  },
  {
    type: 112,
    list: [
      { name: "图书", channelId: "30" },
      { name: "文娱", channelId: "31" },
      { name: "电子书", channelId: "31" }
    ]
  },
  {
    type: 113,
    list: [
      { name: "机票", channelId: "32" },
      { name: "酒店", channelId: "33" },
      { name: "旅游", channelId: "34" },
      { name: "生活", channelId: "35" }
    ]
  },
  {
    type: 114,
    list: [
      { name: "理财", channelId: "36" },
      { name: "众筹", channelId: "37" },
      { name: "白条", channelId: "38" },
      { name: "保险", channelId: "39" }
    ]
  },
  {
    type: 115,
    list: [
      { name: "安装", channelId: "40" },
      { name: "维修", channelId: "41" },
      { name: "清洗", channelId: "42" },
      { name: "二手", channelId: "43" }
    ]
  },
  {
    type: 116,
    list: [{ name: "工业品", channelId: "41" }]
  }
];
