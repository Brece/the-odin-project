async function currentTempHtml(data, unit = 'metric') {
    let temp = '--';
    let feel = '--';
    let humidity = '--';
    let pressure = '--';
    let minTemp = '--';
    let maxTemp = '--';
    let description = '--';
    let windspeed = '--';
    let gust = '--';
    let direction = '--';
    let currentCity = '';
    let tempUnit = 'C';
    let windUnit = 'm/s';

    if (unit === 'imperial') {
        tempUnit = 'F';
        windUnit = 'mph';
    }

    if (data !== undefined) {
        temp = data.main.temp;
        feel = data.main.feels_like;
        humidity = data.main.humidity;
        pressure = data.main.pressure;
        minTemp = data.main.temp_min;
        maxTemp = data.main.temp_max;
        description = data.weather[0].description;
        windspeed = data.wind.speed;
        gust = data.wind.gust;
        direction = data.wind.deg;
        currentCity = data.name;
    }
    
    const section = document.createElement('section');
    section.classList = 'o-wrap c-current';
    section.innerHTML = `<h3 class="c-current__headline">Location: ${currentCity}</h3>
    <ul class="c-current__list">
    <li class="c-current__list__item">
      <h4>Temperature:</h4>
      <p class="c-current__list__item__value c-current__list__item__value--temp">${temp} ${tempUnit}</p>
    </li>
    <li class="c-current__list__item">
      <h4>Feels like:</h4>
      <p class="c-current__list__item__value c-current__list__item__value--feel">${feel} ${tempUnit}</p>
    </li>
    <li class="c-current__list__item">
      <h4>Humidity:</h4>
      <p class="c-current__list__item__value c-current__list__item__value--humidity">${humidity}%</p>
    </li>
    <li class="c-current__list__item">
      <h4>Pressure:</h4>
      <p class="c-current__list__item__value c-current__list__item__value--pressure">${pressure} hPa</p>
    </li>
    <li class="c-current__list__item">
      <h4>Min Temperature:</h4>
      <p class="c-current__list__item__value c-current__list__item__value--minTemp">${minTemp} ${tempUnit}</p>
    </li>
    <li class="c-current__list__item">
      <h4>Max Temperature:</h4>
      <p class="c-current__list__item__value c-current__list__item__value--maxTemp">${maxTemp} ${tempUnit}</p>
    </li>
  </ul>
  <div class="c-current__info">
      <ul class="c-current__info__list">
        <li class="c-current__info__list__item">
          <h4>Description:</h4>
          <p class="c-current__info__list__item__value">${description}</p>
        </li>
        <li class="c-current__info__list__item">
          <h4>Windspeed:</h4>
          <p class="c-current__info__list__item__value">${windspeed} ${windUnit}</p>
        </li>
        <li class="c-current__info__list__item">
          <h4>Gust:</h4>
          <p class="c-current__info__list__item__value">${gust} ${windUnit}</p>
        </li>
        <li class="c-current__info__list__item">
          <h4>Direction:</h4>
          <p class="c-current__info__list__item__value">${direction} deg</p>
        </li>
      </ul>
    </div>`;

    if (document.body.querySelector('.c-current')) {
        document.body.removeChild(document.body.querySelector('.c-current'));
    }

    document.querySelector('#header').after(section);

}

export { currentTempHtml }
