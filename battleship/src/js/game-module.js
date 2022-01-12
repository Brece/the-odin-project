import { player, nonPlayer } from './player-module';

// TODO:  creating Players and Gameboards

function initGame() {
    const pc = player();
    const npc = nonPlayer();

    console.log({ pc: pc.getBoard(), npc});
}

export { initGame }
