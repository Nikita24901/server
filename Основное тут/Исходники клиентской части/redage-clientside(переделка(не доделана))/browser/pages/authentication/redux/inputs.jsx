const 
UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT',
  initialState = {
    // Authorization
    username: "",
    password: "",

    // Reg
    regusername: "",
    regemail: "",
    regpromo: "",
    regpass1: "",
    regpass2: "",

    // Character create
    createname: "",
    createsurname: ""
  };

export default function globalInput(state = initialState, action) {
  if (action.type === UPDATE_AUTH_INPUT) {
    return {  ...state, [action.payload.name]: action.payload.text };
  }
  return state;
}