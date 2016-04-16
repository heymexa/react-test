import UlWithBlink from './UlWithBlink';

/**
 * @class UlWithBlinkAndBackground
 * @extends UlWithBlink
 */
export default class UlWithBlinkAndBackground extends UlWithBlink {
    /**
     * @protected
     * @returns {string}
     */
    getClassName() {
        return this.state.changed ? super.getClassName() + ' background-red' : '';
    }
}
