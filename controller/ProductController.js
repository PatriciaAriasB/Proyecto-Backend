const { Product, Category, ProductCategory, Sequelize } = require('../models/index');
const { Op } = Sequelize;


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
  },
     async getAll(req, res) {
    try {
        const categories = await Product.findAll({
          include:[{ model: Category,attributes:["name"], through: { attributes: [] } }]
        });
        res.send(categories);
    } catch (err) {
        console.error(err);
    }
    
},


async update(req, res) {
    try {
      await Product.update(req.body,
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send("Producto actualizado con éxito");
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: 'Error interno del servidor', err });
    }
  },
async delete(req, res) {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({ message: 'Producto eliminado con éxito'})
    }
     catch (error) {
        console.error(err);
        res.status(500).send({ msg: 'Error interno del servidor', err });
    }
},

async getById(req,res) {
  try {
    const product = await Product.findByPk(req.params.id)
    res.send({msg:'Producto encontrado por su id', product})
  } catch (error) {
    console.error(error);
  }
},

async getProductByName(req, res) {
  try {
    const product = await Product.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
    });
    res.send({ msg: `Nombre de producto = ${req.params.name} Encontrado.` });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
},

async getProductsByPrice(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        price: {
          [Op.like]: req.params.price,
        },
      },
    });
    res.send({ msg: `Precio del producto ${req.params.price} Encontrado`, products });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
},

}
  
















  
module.exports = ProductController

 