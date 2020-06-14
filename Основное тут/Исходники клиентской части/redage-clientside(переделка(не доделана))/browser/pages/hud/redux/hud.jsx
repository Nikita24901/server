const 
  HUD_MAIN = 'HUD_MAIN',
  initialState = {
    // Components
    toggle: true,
    watermark: true,
    help: true,
    player: true,
    vehicle: false,
    world: true,
    chat: true,
    camerasettings: false,
    circle: false,
    breakinglock: false,
    lift: false,
    jobmenu: false,
    
    microphone: 0,

    ammo: 0,
    money: 0,
    bankmoney: 0,

    street: "",
    crossingroad: "",

    speed: 0,
    doors: false,
    engine: false,
    petrol: 0
  };

export default function hud(state = initialState, action) {
  if (action.type === HUD_MAIN) {
    //console.log("HUD_MAIN " + action.payload.name);
    return { ...state, [action.payload.name]: action.payload.status };
  }
  return state;
}