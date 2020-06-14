const 
  SERVER_MAIN = "SERVER_MAIN",
  initialState = {
    game: {
      width: 1280,
      height: 800
    },
    serverid: 0,
    domain: "RedAge.net",
    name: "",

    online: 0,
    slots: 1000,

    servertime: "",
    serverdate: "",

    redbucks: 0
  };

export default function server(state = initialState, action) {
  if (action.type === SERVER_MAIN) {
    return { ...state, [action.payload.name]: action.payload.status };
  }
  return state;
}