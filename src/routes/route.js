const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developersController= require("../controllers/developersController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBatch", batchController.createBatch  )

router.post('/createDeveloper', developersController.createDevelopers)

router.get('/scholarship', developersController.scholarship)

router.get('/dataWithValue',developersController.dataWithValue)

module.exports = router;