import WORDS from '../assets/words.json';
console.log(WORDS[253])

class WordleGame extends HTMLElement {
 constructor() {
  super();
  this.attachShadow({ mode: "open" });
  this.startGame();
 }

 static get styles() {
  return /* css */`
  :host {
    --exact-color: #6aaa64;
    --exist-color: #c9b458;
    --used-color: #3a3a3c;

    font-family: Montserrat, sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }

  h1 {
    text-transform: uppercase;
    border-bottom: 1px solid #555;
    margin-bottom: 0;
  }

  h2 {
    font-weight: lighter;
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }

  h2 a {
    color: #f4b400;
  }

  h2 a:hover {
    color: #a22;
  }

  .words {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
   `;
 }

 startGame() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    this.secretWord = WORDS[randomIndex].toLowerCase();
    // console.log(this.secretWord);
    this.ending = false;
  }

 connectedCallback() {
  this.render();
 }

 render() {
   this.shadowRoot.innerHTML = /* html */`
   <style>${WordleGame.styles}</style>
   <div class="container">
    <h1>Wordle</h1>
    <div class="words">
        <wordle-word current></wordle-word>
        <wordle-word></wordle-word>
        <wordle-word></wordle-word>
        <wordle-word></wordle-word>
        <wordle-word></wordle-word>
        <wordle-word></wordle-word>
    </div>
    <wordle-keyboard></wordle-keyboard>
   </div>`;
 }
}
customElements.define("wordle-game", WordleGame);