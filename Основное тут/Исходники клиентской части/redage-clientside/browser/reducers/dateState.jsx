const 
  UPDATE_DATE_STATE = 'UPDATE_DATE_STATE',
  UPDATE_DATE_DYNAMIC_STATE = 'UPDATE_DATE_DYNAMIC_STATE',
  initialState = {
    dynamic: 'auth',
    inventory: false,
    hud: false,
    camerasettings: false,
    none: false
  };

let oldState = '';

export default function dateState(state = initialState, action) {
  if (action.type === UPDATE_DATE_STATE) {
    state[oldState] = false;
    oldState = action.payload;
    state[oldState] = true;
    state.hud = (oldState === "none") ? true : false;
    state.dynamic = '';
    return { ...state };
  } else if (action.type === UPDATE_DATE_DYNAMIC_STATE) {
    state.dynamic = action.payload;
    //state.hud = (state.dynamic === '') ? true : false;
    return { ...state };
  }
  return state;
}