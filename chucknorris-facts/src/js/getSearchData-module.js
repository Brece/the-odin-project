async function getSearchData(query) {
    try {
        const request = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, {mode: 'cors'});
        const data = request.json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export { getSearchData }
