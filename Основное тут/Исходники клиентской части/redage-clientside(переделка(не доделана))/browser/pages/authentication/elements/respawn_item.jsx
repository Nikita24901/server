import React, { Component } from 'react';
import ragemp from '../../../helpers/ragemp'

import lock_icon from '../../../assets/img/authentication/respawn/lock_icon.png'

class Work extends Component {
    
    state = {
        canPress: true,
    }

    render() {

        return (
            <React.Fragment>
                <div className={'respawnblock ' + this.props.name}>

                    {this.props.unlocked == true && <div className="content">
                        
                        <img src={this.props.icon} alt="respawn icon"></img>
                        <div className="title" dangerouslySetInnerHTML={{__html: this.props.title}}></div><hr/>
                        <div className="effect">{this.props.effect}</div>

                        <div className="button" onClick={() => {
                            if(this.state.canPress)
                            {
                                //console.log("client:OnSelectSpawn");
                                ragemp.CallClient("client:OnSelectSpawn", this.props.spawnid);
                                this.setState({canPress: false});
                            }
                        }}>
                            {this.props.button}
                        </div>
                    </div>}
                    
                    {this.props.unlocked == false && <div className="content" style={{background: "rgba(0,0,0,0.75)"}}>
                        <div className="locktitle" dangerouslySetInnerHTML={{__html: this.props.locktext}}></div>

                        <img src={lock_icon} alt="lock icon"></img>
                    </div>}
                </div>
            </React.Fragment>
        )
    }
}
export default Work;