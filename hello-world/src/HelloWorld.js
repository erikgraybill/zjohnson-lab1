import { html, css, LitElement } from 'lit';

// creates object HelloWorld
export class HelloWorld extends LitElement {
  // gets CSS for object
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  // gets properties of object
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  // constructor for object when initialized
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  // increment used when button clicked, the counter increases by 1
  __increment() {
    this.counter += 1;
  }

  // render makes object show up on page, prints title, button, and increment value
  // on click, button increments value by 1
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
