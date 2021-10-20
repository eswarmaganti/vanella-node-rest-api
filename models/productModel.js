import products from "../data/products.js";

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

export const findByID = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((prod) => prod.id === id);
    resolve(product);
  });
};
