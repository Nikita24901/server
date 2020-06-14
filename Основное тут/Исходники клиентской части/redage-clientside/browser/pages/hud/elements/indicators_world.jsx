import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndicatorsWorld extends Component {
    
    render() {
        if(this.props.hud.world)
        {
            return (
                <React.Fragment>
                    <div className="minimap-block">
                        <div className="minimap" style={{
                            width: `${this.props.minimap_width * 100}vw`,
                            height: `${this.props.minimap_height * 100}vh`
                        }}/>
                        
                        <div className="indicators_world">
                            <p id="location">{this.props.hud.crossingroad}</p>
                            <p id="street">{this.props.hud.street}</p>
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
        hud: state.hud
    };
};

export default connect(mapStateToProps)(IndicatorsWorld);