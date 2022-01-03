const images = document.querySelectorAll('.c-image');
const btn = document.querySelector('.c-btn');
const search = document.querySelector('#text');
const errMsg = document.querySelector('.c-error');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    loadGallery();
});

/*
async function getImage(search) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=zcsDt37h7nEVAe3YpEOd6Kgse2Suv0oV&s=${search}`, {mode: 'cors'});
        const data = await response.json();
        errMsg.textContent = '';
        return data;
    } catch (err) {
        errMsg.textContent = `We couldn't find any images for your search request.`;
        console.error(err);
    }
}
*/

function getData(search) {
    return new Promise((resolve, reject) => {
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=zcsDt37h7nEVAe3YpEOd6Kgse2Suv0oV&s=${search}`, {mode: 'cors'})
            .then((resp) => resp.json())
            .then((data) => resolve(data))
            .catch((err) => {
                errMsg.textContent = `We couldn't find any images for your search request.`;
                new Error(err);
            });
    });
}

function loadGallery() {
    if (search.value.trim() !== "") {
        let dataRequests = [];
        errMsg.textContent = '';

        images.forEach((image) => {
            dataRequests.push(getData(search.value));
        });

        Promise.all(dataRequests)
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    images[i].src = data[i].data.images.original.url;
                }
            })
            .catch((err) => console.log(err));
    } else {
        errMsg.textContent = 'Please type in your search.';
    }
}

//Giphy returns same urls for "translate" function, for different images use "search" and set a "limit" for obtained objects