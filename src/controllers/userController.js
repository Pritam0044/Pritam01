const UserModel= require("../models/userModel")



const middleware = async function(req, res){
    const date = new Date()
    console.log("Current Date is: "+ date+ " #______IP address is: "+req.ip+" #______Requested URL is: "+req.url)
    res.send({msg: "Data has been successfully printed on console."})
}


module.exports.middleware= middleware