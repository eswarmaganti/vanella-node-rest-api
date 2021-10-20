import products from "../data/products.js";

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};
