const weather = require('./weather');
const page = require("./controlPages");
const version = require("./analytics");


///////////////////////////
/////// Version 0.1.2 /////
//////////////////////////

function App() {
    if (localStorage.getItem('city')) {
        let city = localStorage.getItem('city');
        weather.getData(city)
            .then(data => {
                let { main } = data;
                page.controlButton();
                page.createInfoPage(city, main)
            })
    }
    else {
        page.createHelloPage();
        function control() {
            let btn = document.querySelector('.helloPage__btn'),
                city;

            btn.addEventListener('click', () => {
                city = document.querySelector('.helloPage__input input').value,
                    weather.getData(city)
                        .then(data => {
                            if (data.cod !== 200) {
                                page.animate("oops");
                            }
                            else {
                                let { main } = data;
                                page.animate("workspaceRemove");
                                page.animate('info', city, main);
                                page.controlButton();
                                localStorage.setItem('city', city)
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
            })
            document.addEventListener('keyup', (event) => {
                city = document.querySelector('.helloPage__input input').value;
                if (event.key == "Enter") {
                    weather.getData(city)
                        .then(data => {
                            if (data.cod !== 200) {
                                page.animate("oops");
                            }
                            else {
                                let { main } = data;
                                page.animate("workspaceRemove");
                                page.animate('info', city, main);
                                page.controlButton();
                                localStorage.setItem('city', city)
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
        }
        control()
    }
    version.display("0.1.2")
}

App()












