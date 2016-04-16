import Ul from './Ul';

/**
 * @class UlWithBlink
 * @extends Ul
 */
export default class UlWithBlink extends Ul {
    /**
     * @protected
     * @returns {string}
     */
    getClassName() {
        return this.state.changed ? 'blink' : '';
    }
}
