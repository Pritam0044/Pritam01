const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController = require('../controllers/orderController')
const middleWare = require('../middlewares/commonMiddlewares')




router.post('/createProduct',ProductController.createProduct)


router.post('/createUsers',middleWare.mid1,UserController.createUser)


router.post('/createOrder', middleWare.mid1,middleWare.mid2,middleWare.mid3,OrderController.createOrder)




module.exports = router;