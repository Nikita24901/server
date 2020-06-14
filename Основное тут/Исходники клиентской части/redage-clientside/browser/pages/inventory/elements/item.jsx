import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../../helpers/store';
import rage from '../../../helpers/ragemp'

class Item extends Component {

    onSelectedItem = () => {

        window.inventory.updateSelectInfo(this.props.id, this.props.index, (this.props.type == 'inv') ? 1 : 0);
        window.context.updateSelectInfo((this.props.type == 'inv') ? 1 : 0);
    }

    render() {
        return (
            <React.Fragment>
                <div className="item"
                    onContextMenu={this.onSelectedItem}
                    style={{backgroundColor: this.props.isactive ? `rgba(255, 255, 255, 0.8)` : `rgba(255, 255, 255, 0.6)`}}>

                    <img src={require(`../../../assets/img/inventory/icons/${this.props.id}.png`)} alt="item preview"/>
                    <p>{this.props.name}</p>
                    <span>{this.props.count}</span>
                    <p className="sub">{this.props.subdata}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Item;