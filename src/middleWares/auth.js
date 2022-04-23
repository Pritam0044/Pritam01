const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");




const mid1 = async function (req, res, next) {
  let email = req.body.emailId;
  let pass = req.body.password;
  let findData = await userModel.findOne({ emailId: email, password: pass });
  if (findData) {
    next();
  } else {
    res.status(401).send({
      status: false,
      msg: "Username or Password is incorrect.",
    });
  }
};





const mid2 = function (req, res, next) {
  let token1 = req.headers.token;
  if (token1) {
    next();
  } else {
    res
      .status(400)
      .send({ status: false, msg: "token is not present in headers" });
  }
};

const mid3 = async function (req, res, next) {
  let user = req.params.userId;
  let findUser = await userModel.findOne({ emailId: user });
  if (findUser) {
    next();
  } else {
    res.status(404).send({ status: false, msg: "user doesn't exist" });
  }
};

const mid4 = function (req, res, next) {
  let token1 = req.headers.token;
  if (token1) {
    next();
  } else {
    res
      .status(400)
      .send({ status: false, msg: "token not present in headers" });
  }
};

const mid5 = function (req, res, next) {
  let token1 = req.headers.token;
  if (token1) {
    next();
  } else {
    res
      .status(400)
      .send({ status: false, msg: "Token is not present in Headers." });
  }
};

const mid6 = async function (req, res, next) {
  let userToBeModified = req.params.userId;
  let userId = await userModel.findById(userToBeModified);
  if (userId) {
    next();
  } else {
    res.status(404).send({ status: false, msg: "user doesn't exist." });
  }
};

const mid7 = function (req, res, next) {
  let decodedToken = jwt.verify(token, "secret key");
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;
  if (userToBeModified == userLoggedIn) {
    next();
  } else {
    res.status(401).send({
      status: false,
      msg: "user mismatched. Please enter valid user",
    });
  }
};

module.exports.mid1 = mid1;
module.exports.mid2 = mid2;
module.exports.mid3 = mid3;
module.exports.mid4 = mid4;
module.exports.mid5 = mid5;
module.exports.mid6 = mid6;
module.exports.mid7 = mid7;
