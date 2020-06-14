import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Uninvite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
                <div id="txt_3">
                    <p className="fractxt">Выгнать из организации</p>
                    <div className="fractable">
                        <div className="toptable">
                        <div className="name twotab">
                            <p>Имя Фамилия</p>
                        </div>
                        </div>
                        <div className="addorgaz">
                        <div className="useraddinorgaz">
                            <p>
                                <input type="text" className="useradd" placeholder="Введите имя и фамилию..." maxLength="32"/>
                            </p>
                        </div>
                        <div className="arrowadd"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Uninvite;