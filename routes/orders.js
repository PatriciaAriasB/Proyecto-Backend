const express = require('express');
const { authentication } = require('../middleware/authentication');
const OrderController = require('../controller/OrderController');
const router = express.Router();


router.post('/',authentication,OrderController.create),
router.get('/',authentication,OrderController.getAll),


module.exports = router;