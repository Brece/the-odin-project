/**
 * <section class="c-sidebar">
      <div class="c-sidebar__headline"><a href="#" class="c-sidebar__headline__link"><i class="fas fa-bars"></i><p class="c-sidebar__headline__text">Navigation</p></a></div>
      <div class="c-sidebar__option">
        <div class="c-sidebar__option__item">
          <form action="#" class="c-sidebar__option__item__form">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search">
          </form>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="far fa-envelope-open"></i>
            <p class="c-sidebar__option__item__title">Dashboard</p>
          </a>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="fas fa-users"></i>
            <p class="c-sidebar__option__item__title">Team</p>
          </a>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="far fa-comment-dots"></i>
            <p class="c-sidebar__option__item__title">Chat</p>
          </a>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="fas fa-user-plus"></i>
            <p class="c-sidebar__option__item__title">Followers</p>
          </a>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="fas fa-user-check"></i>
            <p class="c-sidebar__option__item__title">Following</p>
          </a>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="fas fa-heart"></i>
            <p class="c-sidebar__option__item__title">Saved</p>
          </a>
        </div>
        <div class="c-sidebar__option__item">
          <a href="#">
            <i class="far fa-plus-square"></i>
            <p class="c-sidebar__option__item__title">New Work</p>
          </a>
        </div>
      </div>
    </section>
 */

function mobileMenu() {
    const sidebar = document.createElement('section');
    sidebar.classList.add('c-sidebar');
    sidebar.innerHTML = `<div class="c-sidebar__headline"><a href="#" class="c-sidebar__headline__link"><i class="fas fa-bars"></i><p class="c-sidebar__headline__text">Navigation</p></a></div>
    <div class="c-sidebar__option">
      <div class="c-sidebar__option__item">
        <form action="#" class="c-sidebar__option__item__form">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search">
        </form>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="far fa-envelope-open"></i>
          <p class="c-sidebar__option__item__title">Dashboard</p>
        </a>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="fas fa-users"></i>
          <p class="c-sidebar__option__item__title">Team</p>
        </a>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="far fa-comment-dots"></i>
          <p class="c-sidebar__option__item__title">Chat</p>
        </a>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="fas fa-user-plus"></i>
          <p class="c-sidebar__option__item__title">Followers</p>
        </a>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="fas fa-user-check"></i>
          <p class="c-sidebar__option__item__title">Following</p>
        </a>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="fas fa-heart"></i>
          <p class="c-sidebar__option__item__title">Saved</p>
        </a>
      </div>
      <div class="c-sidebar__option__item">
        <a href="#">
          <i class="far fa-plus-square"></i>
          <p class="c-sidebar__option__item__title">New Work</p>
        </a>
      </div>
    </div>`;

    document.querySelector('body').appendChild(sidebar);
    _sidebarEvent();
}

function _sidebarEvent() {
    const sidebar = document.querySelector('.c-sidebar');
    const hamburger = document.querySelector('.c-sidebar__headline__link');
    const options = document.querySelectorAll('.c-sidebar__option__item');

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('isHidden');
    });

    options.forEach((item) => {
        item.addEventListener('click', (el) => {
            el.preventDefault();
            
            if (sidebar.classList.contains('isHidden')) {
                sidebar.classList.remove('isHidden');
                }
        });
    });

}

export { mobileMenu };
