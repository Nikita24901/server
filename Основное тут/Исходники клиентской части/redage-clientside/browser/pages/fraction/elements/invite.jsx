import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Invite extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
               <div id="txt_2">
                    <p className="fractxt">Принять в организацию</p>
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
                            <div className="arrowadd" onClick={() => {}}></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Invite;