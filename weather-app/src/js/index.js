import '../styles/styles.css';

async function getData(cityName) {
    try {
        const request = await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2f1529604f68b4fe011ad80eb3fe89f6`);
        // const data = request.json();
        return request;
    } catch (err) {
        throw new Error(err);
    }
}
console.log(getData("Berlin"));