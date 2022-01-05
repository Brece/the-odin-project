async function getCategories() {
    try {
        const request = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = request.json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export { getCategories }
