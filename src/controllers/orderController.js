const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')


const createOrder = async function (req, res) {
//   let data = req.body;
  var headersData = req.headers["isFreeAppUser"];

  if (!headersData) {
    var headersData = req.headers["isfreeappuser"];}

    let userId = req.body.userId;
    var user = await userModel.findById(userId);
    let productId = req.body.productId;
    var product = await productModel.findById(productId);

  if (headersData == "true") {
    var appTypeFree = true;
  } else {
    var appTypeFree = false;
  }

  // condition 1
  if (!appTypeFree && user.balance >= product.price) {
    user.balance -= product.price;
    await user.save();

    req.body.amount = product.price;
    req.body.isFreeAppUser = false;
    let orderCreated = await orderModel.create(req.body);
    return res.send({ status: true, msg: orderCreated });
  }

  // condition 2
  else if (!appTypeFree) {
    return res.send({
      status: false,
      msg: "User doesn't have sufficient balance.",
    });
  }

  // condition 3
  else {
    req.body.amount = 0;
    req.body.isFreeAppUser = true;

    let orderCreated = await orderModel.create(req.body);
    res.send({ status: true, msg: orderCreated });
  }
};




module.exports.createOrder = createOrder

