const mongoose = require('mongoose');
const _db = require('./_db');

const mqttWeatherSchema = mongoose.Schema({
    savedAt: mongoose.SchemaTypes.Date,
    location: {
        city: mongoose.SchemaTypes.String,
        country: mongoose.SchemaTypes.String,
        coordinates: mongoose.SchemaTypes.Array
    },
    data:{
        temperature: mongoose.SchemaTypes.Number,
        humidity: mongoose.SchemaTypes.Number
    }
},{
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = _db.model('weather', mqttWeatherSchema);
