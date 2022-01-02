const image = document.querySelector('.c-image');
const btn = document.querySelector('.c-btn');
const search = document.querySelector('#text');
const errMsg = document.querySelector('.c-error');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (search.value.trim() !== "") {
        loadImage(search.value);
    }
});

function loadImage(search) {
    return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=zcsDt37h7nEVAe3YpEOd6Kgse2Suv0oV&s=${search}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        image.src = response.data.images.original.url;
        errMsg.textContent = '';
    })
    .catch(function(err) {
        errMsg.textContent = `We couldn't find any images for your search request`;
        console.error(err);
    })
}
