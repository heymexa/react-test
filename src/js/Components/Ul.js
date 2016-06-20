import React from 'react';
import Li from './Li';

export default class Ul extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changed: props.changed
        };

        this.onAnimationEnd = this.onAnimationEnd.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            changed: nextProps.changed
        });
    }

    onDrop(event) {
        let data = JSON.parse(event.dataTransfer.getData('text'));
        this.props.handleDrop(data, this);
    }

    onDragOver(event) {
        event.preventDefault();
    }

    onAnimationEnd() {
        this.setState({
            changed: false
        });
    }

    getClassName() {
        return '';
    }

    render() {
        let liOptions = this.props.items.map((item, index) => {
            return <Li key={index} parentId={this.props.id} id={index} draggable text={item} />;
        });

        let className = this.state.changed ? this.props.className : '';
        return (
            <div>
                <ul className={className} onAnimationEnd={this.onAnimationEnd} onDrop={this.onDrop} onDragOver={this.onDragOver} >
                    {liOptions}
                </ul>
            </div>
        );
    }
}

Ul.propTypes = {
    changed: React.PropTypes.bool,
    className: React.PropTypes.string,
    handleDrop: React.PropTypes.func,
    id: React.PropTypes.number,
    items: React.PropTypes.array,
    text: React.PropTypes.string
};
