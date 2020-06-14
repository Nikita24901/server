const 
SELECT_NEXT_MODAL_MENU = 'SELECT_NEXT_MODAL_MENU';

export default function modalmenu(state = '', action) {
  if (action.type === SELECT_NEXT_MODAL_MENU) {
    return action.payload;
  }
  return state;
}