import React from 'react';

/**
 * @class Li
 * @extends {React.Component}
 */
export default class Li extends React.Component {
    /**
     * @param {object} event
     * @private
     */
    _onDragStart(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify(this.props));
    }

    /**
     * @returns {object}
     */
    render() {
        return (
            <li onDragStart={this._onDragStart.bind(this)} draggable={this.props.draggable}>{this.props.text}</li>
        );
    }
}
