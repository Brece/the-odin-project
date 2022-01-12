import { player, nonPlayer } from "../js/player-module";

const pc = player();
const npc = nonPlayer();

function toggleActive() {
    pc.changeActive(npc);
    let state = pc.getActive();
    return { pc: state, npc: npc.getActive() }
}

test.skip('Player changes active state', () => {
    expect(toggleActive())
    .toStrictEqual( { pc: false, npc: true} )
});
