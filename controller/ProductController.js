const { Product } = require("../models/index");

const ProductController = {
  async create(req, res) {
    try {
      const Product = await Product.create(req.body); 
      Product.addCategory(req.body.ProductsCategoryId); //insertamos en la tabla intermedia
      res.status(201).send({ msg: Product.name + " creado con éxito", Product });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }}
  
module.exports = ProductController

 