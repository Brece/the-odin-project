import { getSearchData } from '../js/getSearchData-module';
import { getRandomData } from '../js/getRandomData-module';
import { resultHtml } from '../html/resultHtml-module';

async function categoriesHtml(data) {
    const categories = await data;

    const header = document.createElement('header');
    header.id = 'header';
    header.innerHTML = `<div class="o-wrap c-search">
      <input type="text" placeholder="You don't know Chuck Norris..." minlength="3" maxlength="120" class="c-search__input">
      <button type="button" class="c-search__btn c-search__btn--input">Get your facts!</button>
      <button type="button" class="c-search__btn c-search__btn--random">Random Facts!</button>
    </div>`;

    const list = document.createElement('ul');
    list.classList = 'o-wrap c-category';

    categories.map((category) => {
        const li = document.createElement('li');
        li.classList.add('c-category__item');
        li.innerHTML = `<input type="radio" name="category" id="${category}" class="c-category__item__option" value="${category}">
        <label for="${category}">${category}</label>`;
        list.appendChild(li);
    });

    header.appendChild(list);
    document.body.appendChild(header);

    _searchEventBtn();
    _randomEventBtn();
}

function _searchEventBtn() {
    const btn = document.querySelector('.c-search__btn--input');
    const input = document.querySelector('.c-search__input');

    btn.addEventListener('click', async (e) => {
        let strLength = input.value.trim().length;

        if (strLength < 3 || strLength > 120) {
            e.preventDefault();
        } else {
            _removeCurrentResults();
            const data = await getSearchData(input.value);
            resultHtml(data, input.value);
        }
    });
}

function _randomEventBtn() {
    const btn = document.querySelector('.c-search__btn--random');
    const categories = document.querySelectorAll('.c-category__item__option');

    btn.addEventListener('click', async (e) => {
        let value = undefined;
        let state = true;

        do {
            categories.forEach((category) => {
                if (category.checked) {
                    value = category.value;
                }
            });

            state = false;
        }
        while (state);

        _removeCurrentResults();
        const data = await getRandomData(value);
        resultHtml(data, value);
    });
}

function _removeCurrentResults() {
    if (document.body.querySelector('.c-result')) {
        document.body.removeChild(document.body.querySelector('.c-result'));
    }
}

export { categoriesHtml }
