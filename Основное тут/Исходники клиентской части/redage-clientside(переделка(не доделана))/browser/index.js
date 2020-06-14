import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './helpers/store';
import App from './App';

import './assets/css/style.css';
import './assets/css/icons.css';
import './assets/css/fonts.css';

import './assets/css/atm.css';
import './assets/css/authentication.css';
import './assets/css/camerasettings.css';
import './assets/css/confirm.css'
import './assets/css/circle.css';
import './assets/css/customization.css';
import './assets/css/donate.css';
import './assets/css/fraction.css';
import './assets/css/help.css';
import './assets/css/hud.css';
import './assets/css/inventory.css';
import './assets/css/lscustom.css';
import './assets/css/notification.css';
import './assets/css/petrol.css'
import './assets/css/phone.css';
import './assets/css/puregrid.css';
import './assets/css/rangesliders.css'
import './assets/css/reports.css'
import './assets/css/respawn.css';
import './assets/css/roulete.css';
import './assets/css/situations.css';

ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('container')
);