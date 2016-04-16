import Ul from './Ul';
import UlWithBlink from './UlWithBlink';
import UlWithBlinkAndBackground from './UlWithBlinkAndBackground';
import React from 'react';

/**
 * @type {[Ul]}
 */
let ulFactory = [Ul, UlWithBlink, UlWithBlinkAndBackground];

/**
 * @class App
 * @extends React.Component
 */
export default class App extends React.Component {
    /**
     * @public
     * @param {object} props
     */
    constructor(props) {
        super(props);

        /**
         * prepare data
         * from [[string]]
         * to [{items: [], changed: boolean}]
         */
        let dataItems = this.props.data.reduce((items, item) => {
            items.push({
                items: item,
                changed: false
            });
            return items;
        }, []);

        this.state = {
            data: dataItems
        };
    }

    /**
     * @private
     * @param {object} data
     * @param {Ul} ul
     */
    handleDrop(data, ul) {
        let dataItems = this.state.data;

        // reset changed state
        dataItems.map(function (item) {
            item.changed = false;
            return item;
        });

        let changedUlId = ul.props.id;
        let deletedItem = dataItems[data.parentId].items.splice(data.id, 1)[0];
        dataItems[changedUlId].items.push(deletedItem);
        dataItems[changedUlId].changed = true;

        // add deleted item to first ul if changed ul is third
        if (changedUlId === 2) {
            dataItems[0].items.push(deletedItem);
        }

        this.setState({
            data: dataItems
        });
    }

    /**
     * @returns {object}
     */
    render() {
        let uls = this.state.data.reduce((data, dataItems) => {
            let index = data.length;
            let UlClass = ulFactory[index];
            data.push(<UlClass key={index} changed={dataItems.changed} id={index} items={dataItems.items}
                          handleDrop={this.handleDrop.bind(this)}/>);
            return data;
        }, []);
        return (
            <div>
                {uls}
            </div>
        )
    }
};
