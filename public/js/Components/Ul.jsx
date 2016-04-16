import React from 'react';
import Li from './Li';

/**
 * @class Ul
 * @extends React.Component
 */
export default class Ul extends React.Component {
    /**
     * @public
     */
    componentWillMount() {
        this.setState({
            changed: this.props.changed
        })
    }

    /**
     * @public
     * @param {object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            changed: nextProps.changed
        });
    }

    /**
     * @private
     * @param {object} event
     */
    onDrop(event) {
        let data = JSON.parse(event.dataTransfer.getData('text'));
        this.props.handleDrop(data, this);
    }

    /**
     * @private
     * @param {object} event
     */
    onDragOver(event) {
        event.preventDefault();
    }

    /**
     * @private
     */
    onAnimationEnd() {
        this.setState({
            changed: false
        });
    }

    /**
     * @protected
     * @returns {string}
     */
    getClassName() {
        return '';
    }

    /**
     * @returns {object}
     */
    render() {
        let items = this.props.items.reduce((items, item) => {
            items.push(<Li key={items.length} parentId={this.props.id} id={items.length} draggable={true}
                           text={item}/>);
            return items;
        }, []);

        return (
            <ul className={this.getClassName()} onAnimationEnd={this.onAnimationEnd.bind(this)} onDrop={this.onDrop.bind(this)} onDragOver={this.onDragOver.bind(this)}>
                {items}
            </ul>
        );
    }
}
