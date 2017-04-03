module.exports = function(){

    const mqtt = require('mqtt');
    let weather = require("./models/weather");

    var client  = mqtt.connect('mqtt://m10.cloudmqtt.com', {
        port:17892,
        username:"ylfqyweh",
        password:"OmyBRcCKjwpi",
        clientId:"nodeConsumer"
    })
    
    client.on('connect', function () {
    client.subscribe('sensor/temp');
    })
    
    client.on('message', function (topic, message) {
        if(topic==="sensor/temp"){
            let weatherDate = JSON.parse(message.toString());
            weatherDate.savedAt = new Date();
            console.log(weatherDate);
            weather.create(weatherDate).then(w =>{
            // console.log(w);
            }).catch(erro => {
                console.log(erro);
            })
        }
    })
}