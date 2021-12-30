import './styles/style.css';
import { dropDown } from './modules/dropDown-module';
import { mobileMenu } from './modules/mobileMenu-module';
import { imageSlider } from './modules/imageSlider-module';

document.addEventListener('DOMContentLoaded', () => {
    dropDown();
    mobileMenu();
    imageSlider();
});
