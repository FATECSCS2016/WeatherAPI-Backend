const weather = require("./../models/weather");

exports.getAll = (req, resp, next) => {

    weather.find("").then(weathers =>{

        resp.status(200).json(weathers);

    }).catch(error =>{
        next(error);
    })
}

exports.getAllStations = (req, resp, next) => {

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

exports.getOneStation = (req, resp, next) => {
    weather.aggregate()
    .match({ 'device_id': req.params.stationID })
    .group({ 
        _id: {device_id: "$device_id", 'location': "$location"},
        data: {
            $push: {
                temperature: "$data.temperature",
                humidity: "$data.humidity",
                savedAt: "$savedAt",
            }
        },
    })
    .then(stationsData => {

        resp.status(200).json(stationsData[0]);

    }).catch(error =>{
        next(error);
    })
}