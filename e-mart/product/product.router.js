import express from "express";
import Product from "./product.model.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { isValidUser } from "./user.authorize.js";

// routes are called controller
const router = express.Router();

// ? add product
router.post("/product/add", isValidUser, async (req, res) => {
  //  extract new product from req.body
  const newProduct = req.body;

  // add product
  await Product.create(newProduct);

  // send res
  return res.status(200).send({ message: "Product is added successfully." });
});

// ? get product detail by id
router.get("/product/detail/:id", isValidUser, async (req, res) => {
  // extract product id from req.params
  const productId = req.params.id;

  // check for  mongo id validity
  const isValidId = mongoose.isValidObjectId(productId);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  // find product using product id
  const product = await Product.findOne({ _id: productId });

  // if not product, throw error
  if (!product) {
    return res.status(404).send({ message: "Product does not exist." });
  }

  // send product as response
  return res.status(200).send({ message: "success", productDetail: product });
});

// ? delete product by id
router.delete("/product/delete/:id", isValidUser, async (req, res) => {
  //  extract product id from req.params
  const productId = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(productId);

  // if not found valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }
  // find product
  const product = await Product.findOne({ _id: productId });
  // if not product found throw error
  if (!product) {
    return res.status(400).send({ message: "Product does not exist." });
  }
  // delete product
  await Product.deleteOne({ _id: productId });
  //  send res
  return res.status(200).send({ message: "Product deleted successfully" });
});

// ? edit product by id

router.put("/product/edit/:id", isValidUser, async (req, res) => {
  // extract product id from req.params
  const productId = req.params.id;

  // check for  mongo id validity
  const isValidId = mongoose.isValidObjectId(productId);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  // find product using product id
  const product = await Product.findOne({ _id: productId });

  // if not product, throw error
  if (!product) {
    return res.status(404).send({ message: "Product does not exist." });
  }

  // get new values from req.body
  const newValues = req.body;

  // edit product
  await Product.updateOne(
    { _id: productId },
    {
      $set: { ...newValues },
    }
  );
  // send res
  return res.status(200).send({ message: "Product is updated successfully." });
});

// ? list all product
router.get("/product/list", isValidUser, async (req, res) => {

  // something left

  const products = await Product.find(
    {},
    { name: 1, image: 1, price: 1, description: 1, brand: 1 }
  );

  return res.status(200).send({ message: "success", productList: products });
});

export default router;
