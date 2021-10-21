import products from "../data/products.js";
import writeDataToFile from "../utils.js";
import { v4 as uuidv4 } from "uuid";
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

export const create = (product) => {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);

    writeDataToFile("./data/products.js", products);
    resolve(newProduct);
  });
};
