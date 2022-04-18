
const batchModel = require('../models/batchModel');
const developersModel = require('../models/developersModel');
const developers = require("../models/developersModel")


const createDevelopers= async function (req, res) {
    let dev = req.body
    let devCreated = await developers.create(dev)
    res.send({dev: devCreated})
}

let scholarship = async function(req,res){
    let data = await developersModel.find({gender:"female", percentage:{$gte:70}})
    res.send({msg: data})
}

let dataWithValue = async function(req,res){
    let per = req.query.percentage
    let prog = req.query.program
    let batchData = await batchModel.find({name: prog}).select({_id:true})
    let get = await developersModel.find({batch:batchData, percentage:{$gte:per}})
    res.send({msg: get})

}    

module.exports.createDevelopers= createDevelopers
module.exports.scholarship = scholarship
module.exports.dataWithValue=dataWithValue

