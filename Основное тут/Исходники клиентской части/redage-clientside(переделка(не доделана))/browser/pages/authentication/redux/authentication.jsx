const 
SELECT_NEXT_PAGE_AUTHENTICATION = 'SELECT_NEXT_PAGE_AUTHENTICATION';

export default function gameMenu(state = 'PAGE_AUTH', action) {
  if (action.type === SELECT_NEXT_PAGE_AUTHENTICATION) {
    return action.payload;
  }
  return state;
}