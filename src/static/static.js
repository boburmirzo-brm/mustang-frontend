import Order from "../components/order/Order";
import CreateProduct from "../components/create-product/CreateProduct";
import EditProduct from "../components/edit-product/EditProduct";
import CreateAdmin from "../components/create-admin/CreateAdmin";
import {AiOutlineShoppingCart, AiOutlinePlus, AiOutlineEdit, AiOutlineUsergroupAdd} from "react-icons/ai"
import { AiOutlineHeart,AiFillHeart, AiOutlineHome,AiFillHome, AiOutlineFilter, AiFillFilter } from "react-icons/ai";
import {BsCart, BsFillCartFill} from "react-icons/bs"

export const PRODUCTS = [
  {
    _id: 1,
    title: "Cabani shoes",
    price: 18000,
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ad in rerum voluptatibus officiis molestias!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    season: "yoz",
    type: "classic",
    color: "jigarrang",
    stars: 4,
    view: 0,
    urls: [
      "https://www.tradeinn.com/f/13753/137536832/sebago-classic-will-shoes.jpg",
      "https://cdn.sorsware.com/ecco/ContentImages/Product/GENEL/62160401001/ecco-melbourne_01001-siyah_1_buyuk.jpg",
    ],
    productId: "3536",
    size: "40-44",
    brand: "Mustang",
  },
  {
    _id: 2,
    title: "Cabani shoes lorem impas asd dolor sit emt",
    price: 80000,
    desc: "lorem ipsum dolor",
    season: "bahor",
    type: "krasofka",
    color: "ko'k",
    stars: 3,
    view: 0,
    urls: [
      "https://www.tradeinn.com/f/13753/137536832/sebago-classic-will-shoes.jpg",
      "https://cdn.sorsware.com/ecco/ContentImages/Product/GENEL/62160401001/ecco-melbourne_01001-siyah_1_buyuk.jpg",
    ],
    productId: "3536",
    size: "40-44",
    brand: "Mustang",
  },
  {
    _id: 3,
    title: "Cabani shoes",
    price: 180000,
    desc: "lorem ipsum dolor",
    season: "kuz",
    type: "makasina",
    color: "qizil",
    stars: 3,
    view: 0,
    urls: [
      "https://www.tradeinn.com/f/13753/137536832/sebago-classic-will-shoes.jpg",
      "https://cdn.sorsware.com/ecco/ContentImages/Product/GENEL/62160401001/ecco-melbourne_01001-siyah_1_buyuk.jpg",
    ],
    productId: "3536",
    size: "40-44",
    brand: "Mustang",
  },
  {
    _id: 4,
    title: "Cabani shoes",
    price: 280000,
    desc: "lorem ipsum dolor",
    season: "yoz",
    type: "tapuchka",
    color: "qora",
    stars: 3,
    view: 0,
    urls: [
      "https://www.tradeinn.com/f/13753/137536832/sebago-classic-will-shoes.jpg",
      "https://cdn.sorsware.com/ecco/ContentImages/Product/GENEL/62160401001/ecco-melbourne_01001-siyah_1_buyuk.jpg",
    ],
    productId: "3536",
    size: "40-44",
    brand: "Mustang",
  },
  {
    _id: 5,
    title: "Cabani shoes",
    price: 380000,
    desc: "lorem ipsum dolor",
    season: "qish",
    type: "krasofka",
    color: "oq",
    stars: 3,
    view: 0,
    urls: [
      "https://www.tradeinn.com/f/13753/137536832/sebago-classic-will-shoes.jpg",
      "https://cdn.sorsware.com/ecco/ContentImages/Product/GENEL/62160401001/ecco-melbourne_01001-siyah_1_buyuk.jpg",
    ],
    productId: "3536",
    size: "40-44",
    brand: "Mustang",
  },
];

export const filterData = {
  season: ["barchasi", "bahor", "yoz", "kuz", "qish"],
  type: ["barchasi", "makasina", "classic", "krasofka"],
  color: [
    "barchasi",
    "oq",
    "qora",
    "qizil",
    "ko'k",
    "jigarrang",
    "pushti",
    "yashil",
    "sariq",
    "boshqa",
  ],
  prices: [
    50000,
    100000,
    150000,
    250000,
    300000,
    350000,
    400000,
    450000,
    500000,
    600000,
    700000,
    800000,
    800000,
    900000,
    1000000,
    "undan yuqori",
  ],
  types: {
    type: 'turi',
    season: 'mavsumiyligi',
    price: 'narxi',
    color: 'rangi'
  }
};


export const adminSidebar = [
  {
    id: 0,
    title: "Buyurtmalar",
    component: <Order/>,
    icon: <AiOutlineShoppingCart/>,
    link: "order"
  },
  {
    id: 1,
    title: "Mahsulot yaratish",
    component: <CreateProduct/>,
    icon: <AiOutlinePlus/>,
    link: "create-product"
  },
  {
    id: 2,
    title: "Mahsulotlarni boshqarish",
    component: <EditProduct/>,
    icon: <AiOutlineEdit/>,
    link: "edit-product"
  },
  {
    id: 3,
    title: "Admin qo'shish",
    component: <CreateAdmin/>,
    icon: <AiOutlineUsergroupAdd/>,
    link: "add-admin"
  }
]

export const bottomData = [
  {
      id: 0,
      title: "Bosh sahifa",
      icon: <AiOutlineHome/>,
      iconFill: <AiFillHome/>,
      route: "/"
  },
  {
      id: 1,
      title: "Sevimlilar",
      icon: <AiOutlineHeart/>,
      iconFill: <AiFillHeart/>,
      route: "/heart"
  },
  {
      id: 2,
      title: "Savatcha",
      icon: <BsCart/>,
      iconFill: <BsFillCartFill/>,
      route: "/cart"
  },
  // {
  //     id: 3,
  //     title: "Filter",
  //     icon: <AiOutlineFilter/>,
  //     iconFill: <AiFillFilter/>,
  //     route: "/filter"
  // },
]