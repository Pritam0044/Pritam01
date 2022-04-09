const express = require('express');
const logger = require('./logger')

const router = express.Router();

//problem 1

router.get('/movies-list', function (req, res) {
    let movies =["Love is in the air", "Sing","Encanto","Moana","Planes","Cars","Lucy","Hulk","Avengers-Infinity War","Thor-love and thunder"]
    console.log(movies);
    res.send(movies)
});

// this is problem 2

router.get('/movies/:indexNumber', function (req, res) {
    let movies =["Love is in the air", "Sing","Encanto","Moana","Planes","Cars","Lucy","Hulk","Avengers-Infinity War","Thor-love and thunder"]

    
    if( req.params.indexNumber<10){
        for(var i=0; i<req.params.indexNumber; i++){
        }res.send(movies[i])
        console.log(movies[i]);
    } else 
    {   console.log("The count number is not valid.")
        res.send("The count number is not valid.")};
   
    
});

//problem 3


router.get('/films',function (req,res){
    let movies =[ {
            id: 1,
            name: 'The Shining'
       }, 
       {
            id: 2,
            name: 'Incendies'
       },
        {
            id: 3,
            name: 'Rang de Basanti'
       },
        {
            id: 4,
            name: 'Finding Nemo'
       },
       {
           id:5,
           name: 'Lucy'
       },
       {
           id:6,
           name:'Moana'
       },
       {
           id:7,
           name:'Cars'
       },
       {
           id:8,
           name:'Coco'
       },
       {
           id:9,
           name:'Encanto'
       },
       {
           id:10,
           name:'Hotel Transylvania'
       }
    ]
    console.log(movies)
    res.send(movies)
});


/// problem 4

router.get('/films/:filmId',function (req,res){
    let movies =[ {
            id: 1,
            name: 'The Shining'
       }, 
       {
            id: 2,
            name: 'Incendies'
       },
        {
            id: 3,
            name: 'Rang de Basanti'
       },
        {
            id: 4,
            name: 'Finding Nemo'
       },
       {
           id:5,
           name: 'Lucy'
       },
       {
           id:6,
           name:'Moana'
       },
       {
           id:7,
           name:'Cars'
       },
       {
           id:8,
           name:'Coco'
       },
       {
           id:9,
           name:'Encanto'
       },
       {
           id:10,
           name:'Hotel Transylvania'
       }
    ]
    if(req.params.filmId<10){
        for(var i=0; i<req.params.filmId; i++){
            
        }
    } else {res.send("No movie exists with this id.")
             console.log("No movie exists with this id.")
            };
    console.log(movies[i]);
    res.send(movies[i])
});







module.exports = router;
// adding this comment for no reason