const 
SELECT_NEXT_PAGE_DONATE = 'SELECT_NEXT_PAGE_DONATE';

export default function donate(state = 'PAGE_NAVIGATIONS', action) {
  if (action.type === SELECT_NEXT_PAGE_DONATE) {
    return action.payload;
  }
  return state;
}