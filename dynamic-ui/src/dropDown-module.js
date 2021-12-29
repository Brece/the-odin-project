function dropDown() {
    const header = document.createElement('header');
    header.id = 'header';
    header.innerHTML = `<h2 class="c-headline">Drop Down</h2>
    <nav class="c-navbar">
      <ul class="c-navbar__section">
        <li class="c-navbar__section__item">item
          <ul class="c-navbar__section__item__sub">
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-navbar__section__item">item
          <ul class="c-navbar__section__item__sub">
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-navbar__section__item">item
          <ul class="c-navbar__section__item__sub">
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-navbar__section__item">item
          <ul class="c-navbar__section__item__sub">
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
        <li class="c-navbar__section__item">item
          <ul class="c-navbar__section__item__sub">
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
            <li class="c-navbar__section__item__sub__link"><a href="#">subItem</a></li>
          </ul>
        </li>
      </ul>
    </nav>`;

    document.querySelector('body').appendChild(header);
}

export { dropDown };
