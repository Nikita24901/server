import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../helpers/store';
import rage from '../../helpers/ragemp'

import Beginners from './elements/beginners.jsx'
import Works from './elements/works.jsx'
import Commands from './elements/commands.jsx'
import Wiki from './elements/wiki.jsx'

class Index extends Component {

    state = {
        wiki: true
    }

    render() {

        let page = this.props.data;
        switch (page) {                
            case 'PAGE_BEGINNERS':
                page = <Beginners />;
                break;
            case 'PAGE_WORKS':
                page = <Works />;
                break;
            case 'PAGE_COMMANDS':
                page = <Commands />;
                break;
            case 'PAGE_FRACTION':
                break;
            case 'PAGE_HELP':
                break;
            default: 
                page = false;
                break;
        }
        return (
            <React.Fragment>
                {this.state.wiki ? <Wiki/> : <div className="help">
                    
                    <div className="exit icon-close" onClick={() => {rage.CallClient("client:OnCloseHelpMenu")}}></div>
                    <div className="navigation">
                        <li className={this.props.data == "PAGE_BEGINNERS" ? "navSelected" : "nav"} 
                            onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_HELP', payload: 'PAGE_BEGINNERS'})}><span>Новичку</span></li>
                        
                        <li className={this.props.data == "PAGE_WORKS" ? "navSelected" : "nav"} 
                            onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_HELP', payload: 'PAGE_WORKS'})}><span>Работы</span></li>
                        
                        <li className={this.props.data == "PAGE_COMMANDS" ? "navSelected" : "nav"} 
                            onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_HELP', payload: 'PAGE_COMMANDS'})}><span>Команды</span></li>
                        
                        <li className={this.props.data == "PAGE_FRACTION" ? "navSelected" : "nav"} 
                            onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_HELP', payload: 'PAGE_FRACTION'})}><span>Фракции</span></li>
                        
                        <li className={this.props.data == "PAGE_HELP" ? "navSelected" : "nav"} 
                            onClick={() => store.dispatch({type: 'SELECT_NEXT_PAGE_HELP', payload: 'PAGE_HELP'})}><span>Помощь</span></li>
                    </div>
                    {page}
                </div>}
                
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.help
    };
};

export default connect(mapStateToProps)(Index);