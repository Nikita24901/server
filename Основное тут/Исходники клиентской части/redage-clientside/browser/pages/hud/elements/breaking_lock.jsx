import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

import TickAudio from '../../../assets/audio/hud/breakinglock/tick.mp3';

class BreakingLock extends Component {

    state = {
        rot: 0,
        value: 36,
        off: 2,
        shakeClass: ""
    }

    tick = () => {

        if(this.props.settings.breakinglock)
        {
            if(this.state.rot % 2) return;
            this.audio = new Audio();
            this.audio.src = TickAudio;
            this.audio.autoplay = true;
            this.audio.volume = 0.6;
        }
    }

    set = (value) => {

        if(this.props.settings.breakinglock)
        {
            switch(value){
                case 'minus':
                    if(this.state.rot <= 0) {
                        return; // Надо с пашей решить, добавляем ли полный круг или нет
                        this.setState({rot: 360}); 
                    }
                    this.tick(); 
                
                    this.setState({rot: this.state.rot - 1}); 
                    break;
                case 'plus':
                    if(this.state.rot >= 360) {
                        return;
                        this.setState({rot: 0}); 
                    }
                    this.tick(); 
                    this.setState({rot: this.state.rot + 1}); 
                    break;
            }
        }
    }

    shake = () => {
        
        if(this.props.settings.breakinglock)
        {
            if(this.state.rot == this.state.value) 
                this.setState({shakeClass: ' shake3'});
            else if (this.state.value - this.state.off <= this.state.rot && this.state.rot <= this.state.value + this.state.off)
                this.setState({shakeClass: ' shake2'});
            else if (this.state.value - this.state.off - Math.random(2, 4) <= this.state.rot && this.state.rot <= this.state.value + this.state.off + Math.random(2, 4))
                this.setState({shakeClass: ' shake1'});
        }
    }

    send = () => {

        if(this.props.settings.breakinglock)
        {
            this.tick()
            if(this.state.rot == this.state.val){
                rage.CallClient("dial", 'call', true);
                this.hide();
            } 
            else {
                rage.CallClient("dial", 'call', false);
            }
        }
    }

    handleKey = (event) => {
        
        if(this.props.settings.breakinglock)
        {
            switch(event.which) {
                case 37: case 38:
                    this.set('minus')
                    break;
                case 39: case 40:
                    this.set('plus')
                    break;
                case 32: case 13:
                    this.send();
                    break;
                default: 
                    break;
            }
            this.shake();
        }
    }

    componentDidMount = () => {
        document.addEventListener("keydown", this.handleKey);

        window.breakinglock = {
            setData: (value, off) => {
                this.setState({value: value, off: off});
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKey);
    }

    render() {
        
        if(this.props.settings.breakinglock)
        {
            return (
                <React.Fragment>
                    <div className={"dial" + this.state.shakeClass}>
                        <div className="img base"></div>
                        <div className="img num" style={{transform: `rotate(${this.state.rot}deg)`}}></div>
                        <div className="img center"></div>
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

export default connect(mapStateToProps)(BreakingLock);