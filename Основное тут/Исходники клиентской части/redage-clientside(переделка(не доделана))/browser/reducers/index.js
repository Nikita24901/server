import { combineReducers } from 'redux';

import dateState from './dateState';

import atm from '../pages/atm/redux/atm'
import authentication from '../pages/authentication/redux/authentication'
import authenticationInputs from '../pages/authentication/redux/inputs'
import customization from '../pages/customization/redux/customization'
import customizationdata from '../pages/customization/redux/customizationdata'
import donate from '../pages/donate/redux/donate'
import fraction from '../pages/fraction/redux/fraction'
import members from '../pages/fraction/redux/members'
import help from '../pages/help/redux/help'
import hud from '../pages/hud/redux/hud'
import messages from '../pages/hud/redux/messages'
import inventory from '../pages/inventory/redux/inventory'
import lscustom from '../pages/lscustom/redux/lscustom'
import modalmenu from '../pages/modalmenu/redux/modalmenu'
import report from '../pages/reports/redux/report'
import roulete from '../pages/roulete/redux/roulete'
import situations from '../pages/situations/redux/situations'
import server from './server'

const rootReducer = combineReducers({
  dateState,
  atm,
  authentication,
  authenticationInputs,
  customization,
  customizationdata,
  donate,
  fraction,
  members,
  help,
  hud,
  messages,
  inventory,
  lscustom,
  modalmenu,
  roulete,
  situations,
  server
});

export default rootReducer;