import {BeMedia} from 'be-media/be-media.js'
import {afterNextRender} from 'be-media/node_modules/@polymer/polymer/lib/utils/render-status.js';

/**
 * `be-cat`
 * Component to render random cat&#39;s media elements based on be-media.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BeCat extends BeMedia {
    constructor() {
        super();
        this.refresh();
        afterNextRender(this, function() {
            this.addEventListener('click', this.refresh);
        });
    }

    refresh() {
        axios.get('https://aws.random.cat/meow')
            .then(response => this.src = response.data.file)
            .catch(error => console.error(error));
    }
}

window.customElements.define('be-cat', BeCat);
