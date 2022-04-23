const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mongodb = require("mongodb");

//=====================problem 1 ========================//

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
};

//=========================problem 2========================//

const logIn = async function (req, res) {
  let email = req.body.emailId;
  let pass = req.body.password;
  let findData = await userModel.findOne({ emailId: email, password: pass });

  let token = jwt.sign(
    {
      userId: findData._id,
      batch: "Uranium",
    },
    "secret key"
  );
  res.setHeader("token", token);
  res.status(200).send({ status: true, msg: token });
};

//==================problem 3 ==========================//

const getUserData = async function (req, res) {
  let user = req.params.userId;
  let token1 = req.headers.token;
  try {
    jwt.verify(token1, "secret key");
    let userDetails = await userModel.find({ emailId: user });
    res.status(200).send({ status: true, msg: userDetails });
  } catch (error) {
    res.status(500).send({ status: false, msg: error });
  }
};

//===================problem 4 =====================================//

const updateUser = async function (req, res) {
  let user = req.params.userId;
  let token1 = req.headers.token;
  let updatedUser = req.body.emailId;

  try {
    jwt.verify(token1, "secret key");
    let id = await userModel.findOne({ emailId: user }).select({ _id: true });
    let newUpdatedUser = await userModel.updateOne({ _id: id }, { $set: { emailId: updatedUser } });
    res.status(200).send({ status: true, msg: newUpdatedUser });
  } catch (error) {
    res.status(500).send({ status: false, msg: error });
  }
};

//===============================problem 5 ===============================////

const deleteUser = async function (req, res) {
  let user = req.params.userId;
  let token1 = req.headers.token;
  let id = await userModel.findOne({emailId: user}).select({_id: true})

  try {
    jwt.verify(token1, "secret key");
    await userModel.updateOne({ _id: id }, { $set: { isDeleted: "true" } });
    let data = await userModel
      .findOne({ _id: id })
      .select({ isDeleted: true, _id: false });
    res.status(200).send({ msg: data });
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};
///=====================problem 6=======================//

const postMessage = async function (req, res) {
  let userToBeModified = req.params.userId;
  let userId = await userModel.findById(userToBeModified);
  let token = req.headers.token;

  let message = req.body.message;
  let updatedPosts = userId.posts;
  updatedPosts.push(message);
  await userModel.findOneAndUpdate(
    { _id: userId._id },
    { posts: updatedPosts },
    { new: true }
  );
  return res.status(201).send({ status: true, data: updatedPosts });
};

module.exports.createUser = createUser;
module.exports.logIn = logIn;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
