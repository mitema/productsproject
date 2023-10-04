const generateUniqueId = () => {
  const timeStamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);

  return `${timeStamp}-${random}`;
};

const productsstoreArray = [
  {
    id: generateUniqueId(),
    name: "African Donut Mix",
    description:
      "Rare Eat Puff Mix Can be made into a deep tried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slighlty more",
    price: "$30",
    imageUrl: require("./assets/images/african_donut_mix.png"),
    path: "../assets/images/african_donut_mix.png",
  },
  {
    id: generateUniqueId(),
    name: "Efo Riro",
    description: "efo riro description",
    price: "$30",
    imageUrl: require("./assets/images/efo_riro.png"),
    path: "../assets/images/efo_riro.png",
  },
  {
    id: generateUniqueId(),
    name: "Asaro (Yam Porridge)",
    description: "Asaro yam porridge description",
    price: "$30",
    imageUrl: require("./assets/images/yam_porridge.png"),
    path: "../assets/images/yam_porridge.png",
  },
  {
    id: generateUniqueId(),
    name: "Chicken Stew",
    price: "$30",
    description: "chicken stew description",
    imageUrl: require("./assets/images/chicken_stew.png"),
    path: "../assets/images/chicken_stew.png",
  },
];

export { productsstoreArray, generateUniqueId };
