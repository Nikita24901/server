const 
  SELECT_NEXT_PAGE_HELP = 'SELECT_NEXT_PAGE_HELP';

export default function gameMenu(state = 'PAGE_BEGINNERS', action) {
  if (action.type === SELECT_NEXT_PAGE_HELP) {
    return action.payload;
  }
  return state;
}