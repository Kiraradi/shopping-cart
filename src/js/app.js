import Cart from "./cart";
import CartController from "./cartController";
import ViewedProduct from "./viewedProduct";
import SwiperController from "../swiperController";
let cart = {
  products: [
    {
      id: 1,
      name: "Вытяжное устройство G2H",
      description:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      img: "BXC-2",
      articleNumber: "G2H1065",
      quantity: 1,
      price: 12644,
    },
    {
      id: 2,
      name: "Вытяжное устройство BXC",
      description:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      img: "BXC-1",
      articleNumber: "G2H1065",
      quantity: 2,
      price: 12644,
    },
    {
      id: 3,
      name: "Вытяжное устройство GHN",
      description:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      img: "BXC-3",
      articleNumber: "G2H1065",
      quantity: 1,
      price: 100,
    },
  ],
};

let viewedProducts = [
  {
    id: 1,
    name: "BXC",
    img: "BXC-1",
    description: "Вытяжное устройство для механической системы вентиляции",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 2,
    name: "G2H",
    img: "BXC-2",
    description:
      "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 3,
    name: "GHN",
    img: "BXC-3",
    description: "Вытяжное устройство с датчиком присутствия",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 4,
    name: "TDA",
    img: "BXC-4",
    description: "Вытяжное устройство с датчиком присутствия",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 5,
    name: "BXC",
    img: "BXC-1",
    description: "Вытяжное устройство для механической системы вентиляции",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 6,
    name: "G2H",
    img: "BXC-2",
    description:
      "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 7,
    name: "GHN",
    img: "BXC-3",
    description: "Вытяжное устройство с датчиком присутствия",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
  {
    id: 8,
    name: "TDA",
    img: "BXC-4",
    description: "Вытяжное устройство с датчиком присутствия",
    minPriceRub: 6848,
    maxPriceRub: 56584,
    minPriceEu: 77.6,
    maxPriceEu: 643.86,
  },
];

cart = new Cart(cart);
viewedProducts = viewedProducts.map(viewedProduct => new ViewedProduct(viewedProduct));

const cartController = new CartController(document.querySelector("body"), cart);
cartController.drawUi();

const swiperController = new SwiperController(
  document.querySelector("#viewed-products"),
  viewedProducts
);
swiperController.drawUi();
