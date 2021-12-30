function dropDown() {
    const header = document.createElement('header');
    header.id = 'header';
    header.classList.add('c-header');
    header.innerHTML = `<h2 class="c-header__headline">Drop Down</h2>
    <nav class="c-header__navbar">
      <ul class="c-header__navbar__section">
        <li class="c-header__navbar__section__item">item
          <ul class="c-header__navbar__section__item__sub">
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-header__navbar__section__item">item
          <ul class="c-header__navbar__section__item__sub">
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-header__navbar__section__item">item
          <ul class="c-header__navbar__section__item__sub">
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-header__navbar__section__item">item
          <ul class="c-header__navbar__section__item__sub">
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-header__navbar__section__item">item
          <ul class="c-header__navbar__section__item__sub">
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-header__navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <button type="button" class="c-header__btn">Toggle Drop Down Menu</button>`;

    document.querySelector('body').appendChild(header);
    _dropBtn();
}

function _dropBtn() {
  const btn = document.querySelector('.c-header__btn');
  const menus = document.querySelectorAll('.c-header__navbar__section__item');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < menus.length; i++) {
      _toggleActive(menus[i], i);
    }
  });
}

function _toggleActive(el, delay) {
  setTimeout(function() {
    el.classList.toggle('isActive');
    el.lastElementChild.classList.toggle('isVisible');
  }, 100 * delay);
}

export { dropDown };
