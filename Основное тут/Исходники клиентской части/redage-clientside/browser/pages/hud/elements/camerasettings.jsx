import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBlock from './camerasettings_input_item.jsx';

class CameraSettings extends Component {

    render() {
        if(this.props.settings.camerasettings)
        {
            return (
                <React.Fragment>
                    <div className="camerasettings">
                        <p>Поворот головы</p>
                        <InputBlock id="head_rotate" type="range" value={0} step={0.05} min={-2.0} max={2.0}/>

                        <p>Поворот</p>
                        <InputBlock id="rotate" type="range" value={0} step={1} min={0} max={360}/>

                        <p>Высота</p>
                        <InputBlock id="height" type="range" value={0} step={0.1} min={-0.7} max={0.7}/>
                         
                        <p>Дальность</p>
                        <InputBlock id="depth" type="range" value={1} step={0.1} min={0.5} max={1.5}/>
                    </div>
                </React.Fragment>
            );
        }
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        settings: state.hud
    };
};

export default connect(mapStateToProps)(CameraSettings);