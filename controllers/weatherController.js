let weather = require("./../models/weather");

exports.getAll = function(req, resp, next){

    weather.find("").then(weathers =>{

        resp.status(200).json(weathers);

    }).catch(error =>{
        next(error);
    })
}