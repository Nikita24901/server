import React, { Component } from 'react';
import { connect } from 'react-redux';

import main1 from '../../../assets/img/help/main-1.jpg';
import main2 from '../../../assets/img/help/main-2.jpg';
import main3 from '../../../assets/img/help/main-3.jpg';

class Beginners extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="beginners">
                        <div className="title">
                            Приветствуем Вас
                        </div> 
                        <div className="description">
                            Первым делом Вам необходимо заработать некоторые начальные средства, сделать
                            это можно ознакомившись с тем что предлагает Bony, который стоит на причале, а
                            именно, поднявшись по лестнице, помочь женщине по имени Emma… они и дальше
                            сопроводят Вас по стори-лайну, помогут заработать хоть какие-то начальные
                            средства. В дальнейшем для трудоустройства Вам будет необходимо добраться к
                            Мэрии и поговорив с Heady Hunter выбрать одну из доступных на начальных этапах
                            работу: Электрик или газонокосильщик.
                        </div>
                        <div className="images-rd">
                            <img src={main1} alt={"preview-1"}/>
                            <img src={main2} alt={"preview-2"}/>
                            <img src={main3} alt={"preview-3"}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Beginners);