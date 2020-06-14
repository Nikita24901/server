const 
SELECT_NEXT_PAGE_CUSTOMIZATON = 'SELECT_NEXT_PAGE_CUSTOMIZATON';

export default function gameMenu(state = 'PAGE_MAIN', action) {
  if (action.type === SELECT_NEXT_PAGE_CUSTOMIZATON) {
    return action.payload;
  }
  return state;
}