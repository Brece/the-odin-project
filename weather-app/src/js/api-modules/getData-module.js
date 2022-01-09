async function getData(cityName, unitTemp = 'metric') {
    try {
        const request =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unitTemp}&appid=2f1529604f68b4fe011ad80eb3fe89f6`, {mode: 'cors'});
        const data = await request.json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export { getData };
