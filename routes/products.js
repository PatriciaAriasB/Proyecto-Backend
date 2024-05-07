const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');
const { authentication } = require('../middleware/authentication');

router.post('/',authentication, ProductController.create),
router.get('/',ProductController.getAll),
router.put('/id/:id',authentication,ProductController.update),
router.get('/id/:id', ProductController.getById)
router.delete('/id/:id',authentication,ProductController.delete),
router.get('/name/:name',ProductController.getProductByName),
router.get('/price/:price', ProductController.getProductsByPrice);


module.exports = router;


