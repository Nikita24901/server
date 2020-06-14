const 
SELECT_NEXT_PAGE_SITUATIONS = 'SELECT_NEXT_PAGE_SITUATIONS';

export default function situations(state = 'PAGE_DISCONNECT', action) {
  if (action.type === SELECT_NEXT_PAGE_SITUATIONS) {
    return action.payload;
  }
  return state;
}