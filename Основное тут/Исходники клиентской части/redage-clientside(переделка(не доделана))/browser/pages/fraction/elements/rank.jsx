import React, { Component } from 'react';
import store from '../../../helpers/store'
import { connect } from 'react-redux';

class Rank extends Component {

    state = {}

    render() {
        return (
            <React.Fragment>
                <div id="txt_4">
                    <p className="fractxt">Ранг</p>
                    <div className="fractable">
                        <div className="toptable">
                        <div className="name twotab">
                            <p>Имя Фамилия</p>
                        </div>
                        </div>
                        <div className="addorgaz">
                        <div className="useraddinorgaz">
                            <p><input type="text" className="useradd" placeholder="Введите имя и фамилию..." maxlength="32" v-model="input"/></p>
                        </div>
                                </div>
                                <div className="toptable bable">
                                <div className="name twotab">
                                    <p>Ранг</p>
                                </div>
                                </div>
                        <div className="addorgaz">
                        <div className="useraddinorgaz">
                            <p><input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number"
                            maxlength = "2" className="useradd" placeholder="Введите номер ранга..." min="1" max="20" v-model="rank"/></p>
                        </div>
                        <div className="arrowadd"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Rank;