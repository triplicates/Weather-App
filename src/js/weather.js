const api = require("./API_KEY");

class Weather {
    getData(city) {
        let promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
        return promise
            .then(data => {
                return data.json();
            })
            .then(data => {
                let { name, main, cod } = data
                return { name, main, cod }
            })
    }
}
let weather = new Weather();


module.exports = weather;

