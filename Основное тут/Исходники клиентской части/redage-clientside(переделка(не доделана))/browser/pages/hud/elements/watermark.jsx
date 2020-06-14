import React, { Component } from 'react';
import { connect } from 'react-redux';

import ra_small_logo from '../../../assets/img/hud/ra_small_logo.png';

class Watermark extends Component {

    render() {
        if(this.props.settings.watermark)
        {
            return (

                <React.Fragment>
                    <div className="watermark">
                        <div className="watermark-content">
                            <img src={ra_small_logo} alt="ra_small_logo"/>
                            <span>
                                {this.props.server.domain} {this.props.server.name}<br/>
                                Онлайн {this.props.server.online}/{this.props.server.slots}
                            </span>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        settings: state.hud,
        server: state.server
    };
};

export default connect(mapStateToProps)(Watermark);