import './styles/style.css';
import { getCategories } from './js/getCategories-module';
import { categoriesHtml } from './html/categoriesHtml-module';

import { getSearchData } from './js/getSearchData-module';
import { resultHtml } from './html/resultHtml-module';

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    categoriesHtml(getCategories());
}
