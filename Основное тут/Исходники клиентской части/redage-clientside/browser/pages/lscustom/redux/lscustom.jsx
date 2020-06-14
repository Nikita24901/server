const 
SELECT_NEXT_PAGE_LSCUSTOM = 'SELECT_NEXT_PAGE_LSCUSTOM';

export default function lscustom(state = 'PAGE_ARMOUR', action) {
  if (action.type === SELECT_NEXT_PAGE_LSCUSTOM) {
    return action.payload;
  }
  return state;
}