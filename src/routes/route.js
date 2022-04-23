const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middleWares = require("../middleWares/auth");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/users", userController.createUser);

router.post("/login", middleWares.mid1, userController.logIn);

router.get(
  "/users/:userId",
  middleWares.mid2,
  middleWares.mid3,
  userController.getUserData
);

router.put("/users/:userId", middleWares.mid4, userController.updateUser);

router.delete("/users/:userId", middleWares.mid5, userController.deleteUser);

router.post(
  "/user/:userId/posts",
  middleWares.mid6,
  middleWares.mid7,
  userController.postMessage
);

module.exports = router;
