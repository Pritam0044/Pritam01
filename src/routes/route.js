const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
  
})



const xyz = function(res, req, next){
        next()
}

const middleware1 = function(req,res,next){
        next ()
    }

const middleware2 = function(req,res,next){
        next ()
    }

const middleware3 = function(req,res,next){
        next ()
    }

const middleware4 = function(req,res,next){
        next ()
}



router.get("/api1",middleware1, UserController.middleware)
router.get("/api2",middleware2, UserController.middleware)
router.get("/api3",middleware3, UserController.middleware)
router.get("/api4",middleware4, UserController.middleware)
router.get("/api0",xyz,UserController.middleware)






















// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;