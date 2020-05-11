class ControlPages {
    createInfoPage(city, obj) {
        function toDeg(value) {
            return Math.round(value - 273);
        }
        let container = document.querySelector('.container');
        let check = document.querySelector('.infoPage');
        if (!check) {
            let block = document.createElement('div')
            let { temp, temp_min, temp_max, humidity } = obj;
            block.insertAdjacentHTML('afterbegin',
                `
                    <div class="infoPage__title">Temperature</div>
                    <div class="infoPage__temp"><span>${toDeg(temp)}</span>&deg</div>
                    <div class="infoPage__information">
                        <div class="infoPage__hum infoPage__section">Humidity: <span>${humidity}%</span></div>
                        <div class="infoPage__min infoPage__section">Min: <span>${toDeg(temp_min)}</span>&deg</div>
                        <div class="infoPage__max infoPage__section">Max: <span>${toDeg(temp_max)}</span>&deg</div>
                    </div>
                    <footer class="infoPage__footer">Current city: ${city}</footer>
                 `)
            block.classList.add('infoPage', 'animation_show__up');
            container.appendChild(block)
            setTimeout(() => {
                block.classList.remove('animation_show__up')
            }, 1000)
        }
    }
    createHelloPage() {
        let block = document.createElement('div');
        let container = document.querySelector('.container');
        block.classList.add('helloPage');
        block.insertAdjacentHTML('afterbegin',
            `
           <div class="helloPage__logo logo">
                 <div class="helloPage__title">Weather-App</div>
                 <div class="helloPage__subtitle">with <span>OpenWeather API</span></div>
             </div>
             <div class="helloPage__output">
                 <div class="helloPage__input">
                     <input type="text" placeholder="Please input your city">
                 </div>
                 <button class="helloPage__btn">
                     <?xml version="1.0" encoding="iso-8859-1"?>
                     <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                     <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                     <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px"
                         viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;"
                         xml:space="preserve">
                         <g>
                             <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
         L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
         c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>
                         </g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                         <g></g>
                     </svg>
                 </button>
             </div>
           `
        )
        container.appendChild(block);
    }
    animate(type, city, obj) {
        if (type === "workspaceRemove") {
            let output = document.querySelector('.helloPage__output'),
                logo = document.querySelector('.helloPage__logo'),
                workspace = document.querySelector('.helloPage');

            output.classList.add('animation_scroll__left');
            logo.classList.add('animation_hide');
            setTimeout(() => {
                output.remove();
                logo.remove()
                workspace.remove()
            }, 800)
        }
        else if (type === "info") {
            if (city && obj) {
                return setTimeout(() => {
                    this.createInfoPage(city, obj)
                }, 800)
            }
        }
        else if (type === "oops") {
            let output = document.querySelector('.helloPage__output');
            let btn = document.querySelector('.helloPage__btn');
            btn.style.borderLeft = "1px solid #EA6E4B";
            output.style.border = "1px solid #EA6E4B";
        }
    }
    controlButton() {
        function create() {
            let div = document.createElement('div');
            let container = document.querySelector('.infoPage');
            div.classList.add('select');
            div.insertAdjacentHTML('afterbegin', `<div class="select__title">Replace city</div> `)
            container.appendChild(div)
        }
        function hide() {
            let btn = document.querySelector('.select');
            btn.remove()
        }
        setTimeout(() => {
            let but = document.querySelector('.infoPage__footer');
            but.addEventListener('mouseover', () => {
                create();
                but.style.display = "none"
                let select = document.querySelector('.select');
                select.addEventListener('mouseout', () => {
                    hide();
                    but.style.display = "block"
                })
                select.addEventListener('click', () => {
                    let infoPage = document.querySelector('.infoPage');
                    infoPage.remove();
                    localStorage.removeItem('city')
                    this.createHelloPage()
                })
            })
        }, 1000);


    }
}
let page = new ControlPages()

module.exports = page;
