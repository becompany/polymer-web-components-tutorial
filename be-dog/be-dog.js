import {BeMedia} from 'be-media/be-media.js'
import {afterNextRender} from 'be-media/node_modules/@polymer/polymer/lib/utils/render-status.js';

/**
 * `be-dog`
 * Component to render random dogs&#39; media elements based be-media.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BeDog extends BeMedia {

    constructor() {
        super();
        this.refresh();
        afterNextRender(this, function() {
            this.addEventListener('click', this.refresh);
        });
    }

    refresh() {
        axios.get('https://random.dog/woof.json')
            .then(response => this.src = response.data.url)
            .catch(error => console.error(error));
    }
}

window.customElements.define('be-dog', BeDog);
