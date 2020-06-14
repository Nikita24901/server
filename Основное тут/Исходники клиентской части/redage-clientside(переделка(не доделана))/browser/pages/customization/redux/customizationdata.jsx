const 
  CUSTOMIZATION_GENDER = 'CUSTOMIZATION_GENDER',
  CUSTOMIZATION_UPDATE_GENDER = 'CUSTOMIZATION_UPDATE_GENDER',
  initialState = {
    gender: 'men',
    men: {
      father: 0,
      mother: 0,
      hair: 0,
      eyebrows: 0,
      beard: 0,
      hairColor: 0,
      eyeColor: 0,

      similar: 0.5,
      skin: 0.5,
      noseWidth: 0.0,
      noseHeight: 0.0,
      noseTipLength: 0.0,
      noseDepth: 0.0,
      noseTipHeight: 0.0,
      noseBroke: 0.0,
      eyebrowHeight: 0.0,
      eyebrowDepth: 0.0,
      cheekboneHeight: 0.0,
      cheekboneWidth: 0.0,
      cheekDepth: 0.0,
      eyeScale: 0.0,
      lipThickness: 0.0,
      jawWidth: 0.0,
      jawShape: 0.0,
      chinHeight: 0.0,
      chinDepth: 0.0,
      chinWidth: 0.0,
      chinIndent: 0.0,
      neck: 0.0,
    },
    women: {
      father: 0,
      mother: 0,
      hair: 0,
      eyebrows: 0,
      beard: 0,
      hairColor: 0,
      eyeColor: 0,

      similar: 0.5,
      skin: 0.5,
      noseWidth: 0.0,
      noseHeight: 0.0,
      noseTipLength: 0.0,
      noseDepth: 0.0,
      noseTipHeight: 0.0,
      noseBroke: 0.0,
      eyebrowHeight: 0.0,
      eyebrowDepth: 0.0,
      cheekboneHeight: 0.0,
      cheekboneWidth: 0.0,
      cheekDepth: 0.0,
      eyeScale: 0.0,
      lipThickness: 0.0,
      jawWidth: 0.0,
      jawShape: 0.0,
      chinHeight: 0.0,
      chinDepth: 0.0,
      chinWidth: 0.0,
      chinIndent: 0.0,
      neck: 0.0,
    },
  };

export default function customizationdata(state = initialState, action) {
  if (action.type === CUSTOMIZATION_GENDER) {
    state[state.gender][action.payload.name] = action.payload.value;
    return { ...state };
  } else if (action.type === CUSTOMIZATION_UPDATE_GENDER) {
    state.gender = action.payload;
    return { ...state };
  }
  return state;
}