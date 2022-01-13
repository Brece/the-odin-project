import { player, nonPlayer } from './player-module';
import { initHeader } from './html-module';

// TODO:  creating Players and Gameboards

function initGame() {
    initHeader();

    const pc = player();
    const npc = nonPlayer();

    document.body.addEventListener('change', shipPlacement);

    console.log({ pc: pc.getBoard(), npc});
}

function shipPlacement(board) {

}

export { initGame }
