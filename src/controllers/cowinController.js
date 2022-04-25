let axios = require("axios");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pin;
    let date = req.query.date;
    // console.log(`query params are: ${pin} ${date}`)
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    // console.log(result.data)
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};


















const getSessionByDistrictId = async function (req, res) {
  try {
    let districtId = req.query.districtId;
    let date = req.query.date;

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`,
    };
    let result = await axios(options);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};




const editMeme = async function (req, res) {
  try {
    let template_id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let text3 = req.query.text3;
    let userName = req.query.username;
    let password = req.query.password;
    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&text3=${text3}&username=${userName}&password=${password}`,
    };
    let result = await axios(options);
    res.send({ msg: result.data});
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};










const getWeatherOfLondon = async function (req, res) {
  try {
    let cityName = req.query.cityName;
    let appid = req.query.appid;

    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`,
    };
    let result = await axios(options);
    res.status(200).send({ status: true, temp: result.data.main.temp });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};










const getWeatherData = async function (req, res) {
  try {
    let cityName = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
      "New York",
      "New Jersey"
    ];
    let finalArray = [];
    let appId = req.query.apiId;

    for (i = 0; i < cityName.length; i++) {
      let cities = { city: cityName[i] };
     
      let options = {
        method: "post",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName[i]}&appid=${appId}`,
      };
      let result = await axios(options);
      cities.temp = result.data.main.temp;
      finalArray.push(cities);
     
    }

    let sort = finalArray.sort(function (a, b) {
      return a.temp - b.temp;
    });

    res.status(200).send({ status: true, msg: sort });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};











module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getSessionByDistrictId = getSessionByDistrictId;
module.exports.editMeme = editMeme;
module.exports.getWeatherData = getWeatherData


module.exports.getWeatherOfLondon =getWeatherOfLondon