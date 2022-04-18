const batchModel = require("../models/batchModel")


const createBatch= async function (req, res) {
    let bat = req.body
    let batchCreated = await batchModel.create(bat)
    res.send({batch: batchCreated})
}

module.exports.createBatch = createBatch