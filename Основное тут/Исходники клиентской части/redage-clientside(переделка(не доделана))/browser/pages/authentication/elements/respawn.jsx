import React, { Component } from 'react';
import { connect } from 'react-redux';

// Respawn element
import RespawnBlock from './respawn_item.jsx';

// Respawn icon
import lastexit_icon from '../../../assets/img/authentication/respawn/lastexit_icon.png';
import fraction_icon from '../../../assets/img/authentication/respawn/fraction_icon.png';
import house_icon from '../../../assets/img/authentication/respawn/house_icon.png';

class Respawn extends Component {

    state = {
        fraction: false,
        house: false
    }

    componentWillMount = () =>
    {
        window.respawn = {
            updateRespawn: (respawndata) => {
                respawndata = JSON.parse(respawndata);
                this.setState({
                    fraction: respawndata[1],
                    house: respawndata[2]
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="respawn">
                    <RespawnBlock 
                        spawnid={0}
                        unlocked={true}
                        name="lastexit"
                        icon={lastexit_icon}
                        title="Появиться на точке<br/><span>последнего выхода</span>"
                        effect="Вы не потеряете ничего."
                        button="Появиться на месте выхода"
                    />
                    
                    <RespawnBlock 
                        spawnid={1}
                        unlocked={this.state.fraction}
                        name="fraction"
                        icon={fraction_icon}
                        title="Появиться на<br/><span>территории фракции</span>"
                        effect="При заходе в игру через данную опцию, вы теряете все содержимое личного интвентаря, кроме одежды."
                        locktext="Вступите во фракцию,<br/>чтобы <span>разблокировать<br/>и появляться</span> там"
                        button="Появиться во фракции"
                    />

                    <RespawnBlock 
                        spawnid={2}
                        unlocked={this.state.house}
                        name="house"
                        icon={house_icon}
                        title="Появиться в<br/><span>своём доме</span>"
                        effect="При заходе в игру через данную опцию, вы теряете все содержимое личного инвентаря, кроме одежды."
                        locktext="Купите себе дом,<br/>чтобы <span>разблокировать<br/> и появляться</span> в нем"
                        button="Появиться дома"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Respawn;