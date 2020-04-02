$weather = function (city, api) {
    let promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)

    function getData(promise) {
        let data = promise
            .then(data => {
                return data.json()
            })
        return data
    }
    return getData(promise)
}

module.exports = $weather;

