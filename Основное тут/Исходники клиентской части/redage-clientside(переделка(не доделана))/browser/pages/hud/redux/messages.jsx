const 
      MESSAGE_ADD = 'MESSAGE_ADD';

var counts = 0;

export default function chat(state = [], action) {
  if (action.type === MESSAGE_ADD) {
    if(state.length > 49)
    {
      state.pop();
    }
    counts++;
    return [
      {
        id: counts,
        time: new Date(),
        tag: action.payload.tag,
        text: action.payload.text
      }, ...state
    ]
  }
  return state;
}