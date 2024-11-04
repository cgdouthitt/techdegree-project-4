/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: 'Break a leg' },
            { phrase: 'A dime a dozen' },
            { phrase: 'Bite the bullet' },
            { phrase: 'Costs an arm and a leg' },
            { phrase: 'Better late than never' }
        ];
        this.activePhrase = null;
    }

    /***
    * Begins game by selecting a random phrase and displaying it to user
    ***/
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /***
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    ***/
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * (this.phrases.length));
        return new Phrase(this.phrases[randomNumber].phrase);
    }

    /***
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    ***/
    handleInteraction(button) {
        button.disabled = true;
        if(this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin() && this.gameOver(true);
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /***
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    ***/
    removeLife() {
        const hearts = document.querySelectorAll('[src="images/liveHeart.svg"]');
        hearts[0].src = 'images/lostHeart.svg';
        this.missed++;
        this.missed >= 5 && this.gameOver(false);
    }

    /***
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    ***/
    checkForWin() {
        return document.querySelectorAll('#phrase ul .hide').length === 0 ? true : false;
    }

    /***
    * Displays game over message and resets game board after
    * @param {boolean} gameWon - Whether or not the user won the game
    ***/
    gameOver(gameWon) {
        //Displaying game over message
        const overlay = document.querySelector('#overlay');
        let message = document.querySelector('#game-over-message');
        message.innerHTML = gameWon ? `&#127881 Great job! &#127881` : '&#128565 Sorry, better luck next time &#128565';
        overlay.style.display = '';
        overlay.className = gameWon ? 'win' : 'lose';


        //Resetting game board
        document.querySelector('#phrase ul').innerHTML = '';
        document.querySelectorAll('#qwerty button').forEach(button => {
            button.className = 'key'
            button.disabled = false;
        });
        document.querySelectorAll('.tries img').forEach(img => img.src = 'images/liveHeart.svg');
    }
}