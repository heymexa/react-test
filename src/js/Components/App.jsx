import Ul from './Ul';
import UlWithBlink from './UlWithBlink';
import UlWithBlinkAndBackground from './UlWithBlinkAndBackground';
import React from 'react';

const ulFactory = [Ul, UlWithBlink, UlWithBlinkAndBackground];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        /**
         * prepare data
         * from [[string]]
         * to [{items: [], changed: boolean}]
         */
        let dataItems = this.props.data.map(item => ({
            items: item,
            changed: false
        }));

        this.state = {
            data: dataItems
        };

        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(data, ul) {
        const dataItems = this.state.data;

        // reset changed state
        dataItems.map((item) => {
            item.changed = false;
            return item;
        });

        const changedUlId = ul.props.id;
        const deletedItem = dataItems[data.parentId].items.splice(data.id, 1)[0];
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

    render() {
        let uls = this.state.data.map((dataItems, index) => {
            let UlClass = ulFactory[index];
            return (<UlClass key={index} changed={dataItems.changed} id={index} items={dataItems.items} handleDrop={this.handleDrop} />);
        });
        return (
            <div>
                {uls}
            </div>
        );
    }
}

App.propTypes = {
    data: React.PropTypes.array
};
