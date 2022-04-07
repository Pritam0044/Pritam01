const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {
    res.send('My first api!')
    let batch =["Bharat", "Akash","Sabiha","Suyash","Pritesh","Ram","Ramratan","Niladri","Pritam","Nilesh"]
    console.log(batch);
});

router.get('/candidates', function (req, res) {
    let batch =["Bharat", "Akash","Sabiha","Suyash","Pritesh","Ram","Ramratan","Niladri","Pritam","Nilesh"]
    
    if(req.query.count>0 && req.query.count<=10){
        for(let i=0; i<req.query.count; i++){
            console.log(batch[i]);
        }
    } else {console.log("The count number is exceeded.")};
   
    res.send('My first api!')
});


module.exports = router;
// adding this comment for no reason