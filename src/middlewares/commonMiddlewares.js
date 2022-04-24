const userModel = require('../models/userModel')
const productModel = require('../models/productModel')
const userController = require('../controllers/userController')
const orderController = require('../controllers/orderController')



const mid1 = async function (req, res, next) {
  let headersData = req.headers["isFreeAppUser"];
  if (!headersData) {
    var newHeadersData = req.headers["isfreeappuser"];
  }

  if (newHeadersData) {
    next();
  } else {
    res.send({
      status: false,
      msg: "Mandatory header is missing in the request header.",
    });
  }
};

const mid2 = async function (req, res, next) {
  let data = req.body;
  let userId = data.userId;
  var user = await userModel.findById(userId);
  if (user) {
    next();
  } else {
    res.send({ status: false, message: "user doesn't exist." });
  }
};

const mid3 = async function (req,res,next){
    let productId = req.body.productId;
    var product = await productModel.findById(productId);
    if (product) {next()
    }else{
        res.send({ status: false, msg: "product doesn't exist" });
    }
}






module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3

