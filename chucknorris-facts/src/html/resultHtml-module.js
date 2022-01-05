function resultHtml(data, searchValue) {
    let results = [data];

    if (searchValue === undefined) {
        searchValue = 'Random Fact';
    }

    if (data.result) {
        results = data.result;
        if (results.length === 0) {
            searchValue = `Chuck Norris doesn't joke around when it comes to '${searchValue}'!`;
        }
    }

    const section = document.createElement('section');
    section.classList = 'o-wrap c-result';
    section.innerHTML = `<h2 class="c-result__headline">${searchValue}</h2>`;

    const cards = document.createElement('div');
    cards.classList.add('c-result__cards');

    results.map((result) => {
        const item = document.createElement('div');
        item.classList.add('c-result__cards__item');
        item.innerHTML = `<a href="${result.url}" target="_blank" class="c-result__cards__item__link">
        <img src="${result.icon_url}" alt="Chuck Norris Icon">
      </a>
      <p class="c-result__cards__item__text">${result.value}</p>`;

        cards.appendChild(item);
    });

    section.appendChild(cards);
    document.body.appendChild(section);
}

export { resultHtml }
