import './styles/style.css';
import { dropDown } from './modules/dropDown-module';
import { mobileMenu } from './modules/mobileMenu-module';

document.addEventListener('DOMContentLoaded', () => {
    dropDown();
    mobileMenu();
});
