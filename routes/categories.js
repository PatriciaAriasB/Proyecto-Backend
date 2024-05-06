const express = require('express');
const CategoryController = require('../controller/CategoryController');
const router = express.Router();

router.post('/',CategoryController.insert),
router.get('/',CategoryController.getAll),
router.put('/id/:id',CategoryController.update),
router.delete('/id/:id',CategoryController.delete),
router.get('/id/:id',CategoryController.getOneById),
router.get('/name/:name',CategoryController.getCategoryByName),

module.exports = router;