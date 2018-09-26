import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

/**
 * `be-media`
 * Component to render media elements based on &#34;src&#34; extension.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class BeMedia extends PolymerElement {

  constructor() {
    super();
  }

  static get template() {
    return html`
        <template is="dom-if" if="[[_renderVideo(src)]]">
            <video class$="[[className]]" autoplay> <source src="[[src]]" type="video/mp4"> </video>
        </template>
        <template is="dom-if" if="[[!_renderVideo(src)]]">
            <img class$="[[className]]" src="[[src]]"/>
        </template>
    `;
  }

  _renderVideo(src) {
      return src.endsWith('.mp4');
  }

  static get properties() {
    return {
      src: {
        type: String,
        value: '',
      },
      'class-name': {
        type: String,
        value: '',
      },
    };
  }
}

window.customElements.define('be-media', BeMedia);
