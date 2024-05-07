const { Category, Sequelize , Product } = require('../models/index');
const { Op } = Sequelize;

const CategoryController = {
    async insert(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send({ msg: "Categoría creada con éxito", category })
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    },
    async getAll(req, res) {
        try {
            const categories = await Category.findAll({
              include:[{ model: Product,attributes:["name"], through: { attributes: [] } }]
            });
            res.send(categories);
        } catch (err) {
            console.error(err);
        }
    },
    async update(req, res) {
        try {
          await Category.update(req.body,
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.send("Categoría actualizada con éxito");
        } catch (err) {
          console.error(err);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
      async getOneById(req, res) {
        try {
          const category = await Category.findOne({
            where: {id: req.params.id}
          });
          res.send({msg: `Categoría con ID: ${req.params.id} es: ${category.category}`, category});
        } catch (error) {
          console.error(error);
          res.status(500).send(error);
        }
      },
    async delete(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send({ message: 'Categoría eliminada con éxito'})
        }
         catch (error) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    },
    async getById(req,res) {
      try {
        const category = await Category.findByPk(req.params.id)
        res.send({msg:'Categoría encontrada por su id', category})
      } catch (error) {
        console.error(error);
      }
    },

    async getCategoryByName(req, res) {
      try {
        const Category = await Category.findOne({
          where: {
            name: {
              [Op.like]: `%${req.params.name}%`,
            },
          },
        });
        res.send({ msg: `Nombre de la categoría = ${req.params.name} Encontrado.` });
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    },
    
    }
    


module.exports = CategoryController;