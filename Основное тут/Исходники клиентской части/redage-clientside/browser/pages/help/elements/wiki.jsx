import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from '../../../helpers/jquery-3.2.1.js';

class Fractions extends Component {

    componentDidMount = () => {

    }

    render() {
        //<link rel="import" href="" width={this.props.server.game.width} height={this.props.server.game.height} align="left"/>
        return (
            <React.Fragment>
                <div className="content wiki">
                    <object data="http://wiki.redage.net" width="600" height="400">
                       
                    </object>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        server: state.server  
    };
};

export default connect(mapStateToProps)(Fractions);