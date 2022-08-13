import s from "./FilterProduct.module.css";

let objForColors = {
  qora: "black",
  oq: "white",
  jigarrang: "brown",
  "ko'k": "blue",
  qizil: "red",
};

let objForSeason = {
  winter: "qish",
  spring: "bahor",
  summer: "yoz",
  autumn: "kuz",
};
const prices = [
  50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000,
  550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000,
  10000000,
];

const handleClickChangeActiveColorAndFilter = (e) => {
  Array.from(e.target.parentNode.childNodes).forEach((i) => {
    i.classList.remove(s.active);
  });
  e.target.classList.add(s.active);
};

export {
  objForColors,
  objForSeason,
  prices,
  handleClickChangeActiveColorAndFilter,
};
