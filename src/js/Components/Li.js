import React from 'react';

export default class Li extends React.Component {
    constructor(props) {
        super(props);

        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify(this.props));
    }

    render() {
        return (
            <li onDragStart={this.onDragStart} draggable={this.props.draggable}>{this.props.text}</li>
        );
    }
}

Li.propTypes = {
    draggable: React.PropTypes.bool,
    text: React.PropTypes.string
};
