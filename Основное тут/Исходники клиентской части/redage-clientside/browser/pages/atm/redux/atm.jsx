const 
SELECT_NEXT_PAGE_ATM = 'SELECT_NEXT_PAGE_ATM';

export default function gameMenu(state = 'PAGE_MENU', action) {
  if (action.type === SELECT_NEXT_PAGE_ATM) {
    return action.payload;
  }
  return state;
}