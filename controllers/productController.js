import { findAll, findByID } from "../models/productModel.js";

// @desc    Get All Products
// @route   GET /api/products
export const getProducts = async (req, res) => {
  try {
    const products = await findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

// @desc    Get Single Products
// @route   GET /api/products/:id
export const getProduct = async (req, res, id) => {
  try {
    const product = await findByID(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
};
