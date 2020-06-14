import React, { Component } from 'react';
import { connect } from 'react-redux';
import iziToast from '../../../helpers/iziToast.js'

class Notify extends Component {

    componentDidMount = () =>
    {
        var maxNotify = 5;

        iziToast.settings({
            timeout: 2000, 
            resetOnHover: true, 
            drag: false, 
            close: false, 
            pauseOnHover: false, 
            progressBar: false, 
            resetOnHover: false, 
            'maxNoty': maxNotify, 
            transitionIn: 'flipInX', 
            transitionOut: 'flipOutX',
            onClosed: function(data) {
                var c = window.notification.count_noty(data.position);
                var m = window.notification.mass_noty[data.position].turn;
                if (m[0]) {
                    var position = m[0].position, 
                    title = m[0].title, 
                    theme = m[0].theme, 
                    themeStatus = m[0].onStatus, 
                    message = m[0].message;

                    if (c < maxNotify) {
                        iziToast[themeStatus]({position: position, title: title, message: message, theme: theme});
                        m.splice(m.indexOf(0), 1);
                    }
                }
            }
        });

        window.notification = {
            show: (type, layout, message, time) => {
                var types = ['alert', 'error', 'success', 'information', 'warning'];
                var layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'];
                
                iziToast[types[type]]({position: layouts[layout], title: "Заголовок", message: message, timeout: time});
            },
            mass_noty: {
                'center':{'active':[], 'turn':[],},
                'centerLeft':{'active':[], 'turn':[],},
                'centerRight':{'active':[], 'turn':[],},
                'bottomLeft':{'active':[], 'turn':[],},
                'bottomRight':{'active':[], 'turn':[],},
                'topRight':{'active':[], 'turn':[],},
                'topLeft':{'active':[], 'turn':[],},
                'topCenter':{'active':[], 'turn':[],},
                'bottomCenter':{'active':[], 'turn':[],},
            },
            count_noty: (position) => {
                var count = Object.keys(window.notification.mass_noty[position].active).length;  
                return count;
            }
        }
    }

    render()
    {
        return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        settings: state.hud
    };
};

export default connect(mapStateToProps)(Notify);