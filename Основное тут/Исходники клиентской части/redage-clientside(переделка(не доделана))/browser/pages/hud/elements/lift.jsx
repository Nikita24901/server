import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

class Lift extends Component {

    state = {
        floors: [
            "Floor 1",
            "Floor 2",
            "Floor 3"
        ],
        floor: 0
    }

    componentDidMount = () => {
        window.lift = {
            set: (json) => {
                this.setState({floors: JSON.parse(json)});
            },
            up: () =>  {
                //console.log('up')
                this.setState({floor: this.state.floor++});
                if (this.state.floor == this.state.floors.length) this.setState({floor: this.state.floors.length - 1});
            },
            down: () =>  {
                //console.log('down')
                this.setState({floor: this.state.floor--});
                if (this.state.floor < 0) this.setState({floor: 0});
            },
            stop: () =>  {
                //console.log('stop')
                rage.CallClient('lift', 'stop');
            },
            start: () =>  {
                //console.log('start')
                rage.CallClient('lift', 'start', this.floor);
            },
            reset: () =>  {
                this.setState({
                    floors: [],
                    floor: 0,
                    text: ""
                })
            }
        }
    }

    componentWillUnmount() {
        window.lift = undefined;
    }

    render() {
        if(this.props.settings.lift)
        {
            return (
                <React.Fragment>
                    <div className="lift">
                        <h1>{this.state.floors[this.state.floor]}</h1>
                        <div id="btn-down" onClick={() => window.lift.down() }></div>
                        <div id="btn-up" onClick={() => window.lift.up() }></div>
                        <div id="btn-stop" onClick={() => window.lift.stop() }></div>
                        <div id="btn-start" onClick={() => window.lift.start() }></div>
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

export default connect(mapStateToProps)(Lift);