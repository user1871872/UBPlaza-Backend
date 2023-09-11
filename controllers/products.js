// const productModel = require ("../models/product")

// exports.findProducts = async (req, res) => {
//     const Product = await productModel.find();
//     res.send({ data: Product });
//   };
  
//   exports.createProduct = async (req, res) => {
//     const product = new productModel(req.body);
//     await product.save();
//     res.send({ data: product });
//   };
  
//   exports.findProduct = async (req, res) => {
//     try {
//       const product = await productModel.findById(req.params.id);
//       res.send({ data: product });
//     } catch {
//       res.status(404).send({ error: "Product is not found!" });
//     }
//   };