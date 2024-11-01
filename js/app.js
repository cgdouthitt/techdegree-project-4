/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startBtn = document.querySelector('#btn__reset');
startBtn.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});

const buttons = document.querySelector('#qwerty');
buttons.addEventListener('click', e => e.target.tagName === 'BUTTON' && game.handleInteraction(e.target));

const form = document.querySelector('html');
form.addEventListener('keyup', e => {
    const key = e.key.toLowerCase();
    const keys = buttons.querySelectorAll('.key')
    const button = Array.from(keys).find(button => button.textContent === key);
    const keyRegex = /^[a-z]{1}$/;
    const validKey = keyRegex.test(key)
    validKey && game.handleInteraction(button);
});