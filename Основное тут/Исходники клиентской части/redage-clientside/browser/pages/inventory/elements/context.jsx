import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store';
import rage from '../../../helpers/ragemp'

class Context extends Component {

    onSelectAction = (id) => {
        window.context.hide();
        window.inventory.send(id);
    }

    render() {

        if(this.props.visible) {

            return (
                <React.Fragment>
                    <nav className="context_menu" style={{left: this.props.x, top: this.props.y}}>
                        <ul>
                            <li onClick={() => this.onSelectAction(1)}>Использовать </li>
                            <li onClick={() => this.onSelectAction(2)}>Передать</li>
                            {this.props.type === 0 && <li onClick={() => this.onSelectAction(3)}>Взять</li>}
                            <li onClick={() => this.onSelectAction(4)}>Выбросить</li>
                        </ul>
                    </nav>
                </React.Fragment>
            );
        }
        else return (<React.Fragment/>);
    }
}

export default Context;