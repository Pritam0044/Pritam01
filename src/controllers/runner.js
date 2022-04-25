// let a = { name: "Edward", value: 21 };
// let b = { name: "Sharpe", value: 37 };
// let c = { name: "And", value: 45 };
// let d = { name: "The", value: -12 };
// let e = { name: "Magnetic", value: 13 };
// let f = { name: "Zeros", value: 37 };

const { default: axios } = require("axios");

// let q = [];
// q.push(a, b, c, d, e, f);
// for (i = 0; i < q.length; i++) {
//   let p = q.sort(function (a, b) {
//     return a.value - b.value;
//   });

//   console.log(p[i]);
// }
// let cityName = [
//     "Bengaluru",
//     "Mumbai",
//     "Delhi",
//     "Kolkata",
//     "Chennai",
//     "London",
//     "Moscow",
//   ];
//   // let finalArray = [];
//   // let apiId = req.query.apiId;

//   for (i = 0; i < cityName.length; i++) {
//     let cities = { city: cityName[i] };
//     console.log(cities)}

let cities = [
    "Bengaluru",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "London",
    "Moscow",
  ];
  let cityObjArary = [];
  for (i=0;i<cities.length; i++){
      let obj = {city: cities[i]}
      let resp = await axios.get()
      console.log(resp.data.main.temp)
      obj.temp = resp.data.main.temp
      cityObjArary.push(obj)
  }