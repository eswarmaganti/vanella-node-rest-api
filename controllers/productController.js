import { findAll } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const products = await findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(products));
};
