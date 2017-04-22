let weather = require("./../models/weather");
weather.findByIdAndUpdate("58e18d802ad9bf6ac3e8dbe8", {
    "_id" : "58e18d802ad9bf6ac3e8dbe8",
	"temperature" : 16.3,
	"humidity" : 50.1,
}
 ).then(wea =>{
    console.log(wea);
 }).catch(erro=>{
     console.log(erro);
 })