import React, { Component } from 'react';
import { connect } from 'react-redux';

// Simple color interpolator for Speed.
function InterpolateColor(start, end, steps, count) {
    var s = start, e = end, final = s + (((e - s) / steps) * count);
    return Math.floor(final);
}

function Color(_r, _g, _b) {
    var r, g, b;
    var setColors = function(_r, _g, _b) { r = _r; g = _g; b = _b; };
    setColors(_r, _g, _b);
    this.getColors = function() { return { r: r, g: g, b: b }; }
}

class IndicatorsVehicle extends Component {

    state = {
        toggle: false,
        speed: 0,
        petrol: 0,
        doors: false
    }

    getSpeedColor = () =>
    {
        var speed = this.state.speed;

        var speed_percent = Math.floor(speed / 200 * 100);
        if(speed_percent > 100) speed_percent = 100;

        var start = new Color(255, 255, 255), end = new Color(225, 228, 66);
    
        if (speed_percent > 50) {
            speed_percent = speed_percent % 51;
            start = new Color(225, 228, 66);
            end = new Color(228, 66, 66);
        }

        var start_colors = start.getColors();
        var end_colors = end.getColors();
        
        var 
            r = InterpolateColor(start_colors.r, end_colors.r, 50, speed_percent),
            g = InterpolateColor(start_colors.g, end_colors.g, 50, speed_percent),
            b = InterpolateColor(start_colors.b, end_colors.b, 50, speed_percent);

        return `rgb(${r},${g},${b})`;          
    }

    getDoorColor = () =>
    {
        if(this.state.doors === true) return "#fff";
        else return "#E44242";
    }

    getEngineColor = () =>
    {
        if(this.state.engine === true) return "#fff";
        else return "#E44242";
    }

    getPetrolColor = () =>
    {
        var petrol = this.state.petrol;

        if(petrol < 30) return "#E44242";
        else if(petrol < 60) return "#E1E442";
        else return "#fff";
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.settings !== undefined)
        {
            if(nextProps.settings.vehicle != this.state.toggle) this.setState({toggle: nextProps.settings.vehicle});
            if(nextProps.settings.speed != this.state.speed) this.setState({speed: nextProps.settings.speed});
            if(nextProps.settings.petrol != this.state.petrol) this.setState({petrol: nextProps.settings.petrol});
            if(nextProps.settings.engine != this.state.engine) this.setState({engine: nextProps.settings.engine});
            if(nextProps.settings.doors != this.state.doors) this.setState({doors: nextProps.settings.doors});
        }
    }

    render() {
        if(this.state.toggle)
        {
            return (
                <React.Fragment>
                    <div className="indicators_vehicle">
                        <div className="speed" style={{color: this.getSpeedColor()}}>
                            <p>{this.state.speed}</p>
                            <p>КМ/ч</p>
                        </div>

                        <div className="icon_block icon-door" style={{color: this.getDoorColor()}}></div>
                        <div className="icon_block icon-engine" style={{color: this.getEngineColor()}}></div>
                        
                        <div className="petrol icon_block icon-gas" style={{color: this.getPetrolColor()}}>
                            <p style={{fontFamily: "UniNeue", marginLeft: "5px"}}>{this.state.petrol}l</p>
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
        settings: state.hud
    };
};

export default connect(mapStateToProps)(IndicatorsVehicle);