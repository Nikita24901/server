import React, { Component } from 'react';
import { connect } from 'react-redux';

class Help extends Component {

    render() {
        if(this.props.settings.help)
        {
            return (
                <React.Fragment>
                    <div className="helpbox">
                        <p>N - Микрофон</p>
                        <p>I - Инвентарь</p>
                        <p>M - Телефон</p>
                        <p>U - Анимации</p>
                        <p>B - Завести машину</p>
                        <p>L - Закрыть/открыть авто</p>
                        <p>5 - Никнеймы</p>
                        <p>6 - Круиз-контроль</p>
                        <p>F5 - Скрыть HUD</p>
                        <p>F9 - Донат панель</p>
                        <p>F10 - Помощь</p>
                        <p>Ё(~) - Курсор</p>
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

export default connect(mapStateToProps)(Help);