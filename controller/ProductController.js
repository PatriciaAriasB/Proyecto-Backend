const { Product } = require("../models/index");

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body); 
       product.addCategory(req.body.ProductsCategoryId); //insertamos en la tabla intermedia
      res.status(201).send({ msg: product.name + " creado con éxito", product });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }}
  
















  
module.exports = ProductController

 