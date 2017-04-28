let weather = require("./../models/weather");

exports.getAll = function(req, resp, next){

    weather.find("").then(weathers =>{

        resp.status(200).json(weathers);

    }).catch(error =>{
        next(error);
    })
}

exports.getAllDevices = function(req, resp, next){

    weather.aggregate([
        {
            $sort: { device: 1, savedAt: 1 } 
        },
        {
            $group:{
                _id: "$device_id",
                savedAt: { $last: "$savedAt" },
                data: { $last: "$data" },
                location: { $last: "$location" },
            }
        }
    ]).then(weathers =>{

        resp.status(200).json(weathers);

    }).catch(error =>{
        next(error);
    })
}