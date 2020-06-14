const 
SELECT_NEXT_PAGE_REPORT = 'SELECT_NEXT_PAGE_REPORT';

export default function gameMenu(state = 'PAGE_BEGINNERS', action) {
  if (action.type === SELECT_NEXT_PAGE_REPORT) {
    return action.payload;
  }
  return state;
}