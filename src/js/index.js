const weather = require("./weather");
import api from "./API_KEY";


function createWrapper(name, temp, humidity, temp_min, temp_max, ) {
    let wrapper = document.createElement('div');
    let container = document.querySelector('.container');
    wrapper.classList.add('wrapper', 'animation_show__up');
    wrapper.insertAdjacentHTML('afterbegin',
        `
            <div class="wrapper__title">Temperature</div>
            <div class="wrapper__temp"><span>${toDeg(temp)}</span>&deg</div>
            <div class="wrapper__information">
                <div class="wrapper__hum inf">Humidity: <span>${humidity}%</span></div>
                <div class="wrapper__min inf">Min: <span>${toDeg(temp_min)}</span>&deg</div>
                <div class="wrapper__max inf">Max: <span>${toDeg(temp_max)}</span>&deg</div>
            </div>
            <footer class="wrapper__footer">Current city: ${name}</footer>
        `)
    return setTimeout(() => { container.appendChild(wrapper) }, 800)
}
function animate() {
    let container = document.querySelector('.container');
    let output = document.querySelector('.section-output');
    let logo = document.querySelector('.section-logo');
    output.classList.add('animation_scroll__left');
    logo.classList.add('animation_hide');
    setTimeout(() => {
        output.remove();
        logo.remove()
        container.style.justifyContent = "center";
    }, 800)
}
function outputData() {
    let city = document.querySelector('.section-output input').value;
    weather(city, api)
        .then(data => {
            let { name } = data;
            let { temp, temp_min, temp_max, humidity } = data.main;
            animate();
            createWrapper(name, temp, humidity, temp_min, temp_max)
        })
        .catch(error => {
            let output = document.querySelector('.section-output');
            let input = document.querySelector('.section-output input');
            output.style.border = "1px solid rgba(234, 110, 75,1)";
            input.setAttribute('placeholder', 'Not entered the correct city name!!');
        })
}
function toDeg(value) {
    return Math.round(value - 273);
}
function controlBtn() {
    let btn = document.querySelector('.section-output__btn');
    let output = document.querySelector('.section-output');

    output.addEventListener('keyup', (event) => {
        if (event.key == "Enter") {
            outputData()
        }

    })
    btn.addEventListener('click', outputData)
}
controlBtn()













