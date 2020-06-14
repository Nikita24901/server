const 
SELECT_NEXT_PAGE_FRACTION = 'SELECT_NEXT_PAGE_FRACTION';

export default function fraction(state = 'PAGE_MEMBERS', action) {
  if (action.type === SELECT_NEXT_PAGE_FRACTION) {
    return action.payload;
  }
  return state;
}