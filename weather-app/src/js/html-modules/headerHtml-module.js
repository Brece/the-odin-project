import { getData } from '../api-modules/getData-module';
import { currentTempHtml } from '../html-modules/currentTempHtml-module';

function headerHtml() {
    let header = document.createElement('header');
    header.id = 'header';
    header.innerHTML = `<div class="o-wrap c-search">
    <input type="text" placeholder="Enter your city..." class="c-search__input" value="Berlin">
    <button type="button" class="c-search__btn c-search__btn--search">Get Forecast</button>
    <div class="c-search__units">
    <label for="celcius">Celcius</label>
    <input type="radio" id="celcius" value="Celcius" name="temp_unit" class="c-search__units__unit" data-unit="metric">
    <label for="fahrenheit">Fahrenheit</label>
    <input type="radio" id="fahrenheit" value="Fahrenheit" name="temp_unit" class="c-search__units__unit" data-unit="imperial">
    </div>
  </div>`;

    document.body.appendChild(header);
    document.getElementById('celcius').checked = true;
    _btnSearchEvent();
    _tempUnitEvent();
}

function _btnSearchEvent() {
    const searchBtn = document.querySelector('.c-search__btn--search');
    const input = document.querySelector('.c-search__input');
    const unitSelections = document.querySelectorAll('.c-search__units__unit');

    searchBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        let unit;
        unitSelections.forEach((option) => {
            if (option.checked) {
                unit = option.dataset.unit;
            }
        });
    
        const data = await getData(input.value, unit);
        currentTempHtml(data, unit);
    })
}

function _tempUnitEvent() {
    const unitSelections = document.querySelectorAll('.c-search__units__unit');
    
    unitSelections.forEach((option) => {
        option.addEventListener('change', async (e) => {
            let city;
            let element = e.target;
            let unit = element.dataset.unit;

            if (document.querySelector('.c-current__headline') !== '') {
                city = document.querySelector('.c-current__headline').textContent;
            } 
            if (document.querySelector('.c-search__input').value !== '') {
                city = document.querySelector('.c-search__input').value;
            }

            const data = await getData(city, unit);
            currentTempHtml(data, unit);
        });
    })
}

export { headerHtml }
