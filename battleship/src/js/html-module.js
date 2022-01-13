function initHeader() {
  const header = document.createElement('header');
  header.className = 'o-wrap c-header';
  header.innerHTML = `<button type="button" class="c-header__btn">Start Game</button>`;
  document.body.appendChild(header);

  // start game and render gameboard
  const startBtn = document.querySelector('.c-header__btn');
  startBtn.addEventListener('click', _initBoard);
}

function _initBoard() {
    // gameboard section
    const container = document.createElement('div');
    container.className = 'o-wrap';
    container.innerHTML = `<section class="c-gameboard">
    <div class="c-gameboard__player">
    <h2 class="c-gameboard__player__headline">Player</h2>
    <div class="c-gameboard__player__board"></div>
  </div>
  <div class="c-gameboard__player">
    <h2 class="c-gameboard__player__headline">NPC</h2>
    <div class="c-gameboard__player__board"></div>
  </div>
  </section>`

    document.body.appendChild(container);

    // gameboard boxes
    _initBoxes();
}

function _initBoxes() {
    const boards = document.querySelectorAll('.c-gameboard__player__board');

    for (let j = 0; j < boards.length; j++) {
        for (let i = 0; i < 100; i++) {
            const box = document.createElement('div');
            box.classList.add('c-gameboard__player__board__box');
            box.dataset.index = i;
            // TODO: event listener for boxes
            box.addEventListener('click', () => {})
            boards[j].appendChild(box);

        }
    }
}


export { initHeader }
