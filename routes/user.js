const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/',UserController.create),
router.post('/login',UserController.login),


//router.delete('/:id',authentication, isAdmin, PostController.delete)


router.get('/userInfo',authentication,UserController.getUserInfo)
// router.delete('/:id',authentication,UserController.delete)
// router.put('/:id',authentication,UserController.update)

router.delete('/logout',authentication,UserController.logout)

module.exports = router;
