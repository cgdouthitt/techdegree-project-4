/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /***
    * Display phrase on game board
    ***/
    addPhraseToDisplay() {
        const phraseDisplay = document.querySelector('#phrase ul');
        let html = '';
        this.phrase.split('').forEach(letter => html += letter !== ' ' ? `<li class="hide letter ${letter}">${letter}</li>` : `<li class="space"> </li>` );
        phraseDisplay.insertAdjacentHTML('beforeend', html);
    }

    /***
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    ***/
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /***
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    ***/
    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(match => match.className = `show letter ${letter}`);        
    }
}