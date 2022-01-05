async function getRandomData(category) {
    try {
        let url = 'https://api.chucknorris.io/jokes/random';

        if (category !== undefined) {
            url += `?category=${category}`;
        }

        const request = await fetch(`${url}`, {mode: 'cors'});
        const data = request.json();

        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export { getRandomData }
