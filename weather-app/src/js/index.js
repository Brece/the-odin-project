import '../styles/styles.css';
import { headerHtml } from './html-modules/headerHtml-module.js';
import { currentTempHtml } from './html-modules/currentTempHtml-module.js';

document.addEventListener('DOMContentLoaded', () => {
    initHtml();
});

function initHtml() {
    headerHtml();
    currentTempHtml();
}


