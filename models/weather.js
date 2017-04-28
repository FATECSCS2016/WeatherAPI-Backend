const mongoose = require('mongoose');
const _db = require('./_db');

const mqttWeatherSchema = mongoose.Schema({
    device_id: mongoose.SchemaTypes.String,
    savedAt: mongoose.SchemaTypes.Date,
    location: {
        city: mongoose.SchemaTypes.String,
        country: mongoose.SchemaTypes.String,
        coordinates: []
    },
    data:{
        temperature: mongoose.SchemaTypes.Number,
        humidity: mongoose.SchemaTypes.Number
    }
},{
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = _db.model('weather', mqttWeatherSchema);
