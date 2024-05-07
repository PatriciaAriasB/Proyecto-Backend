const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.post('/',ProductController.create),
router.get('/',ProductController.getAll),
// router.put('/id/:id',ProductController.update),
router.get('/id/:id', ProductController.getById)
router.delete('/id/:id',ProductController.delete),
router.get('/name/:name',ProductController.getProductByName),
router.get('/price/:price', ProductController.getProductsByPrice);


module.exports = router;


