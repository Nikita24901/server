const 
SELECT_NEXT_PAGE_INVENTORY = 'SELECT_NEXT_PAGE_INVENTORY';

export default function inventory(state = '', action) {
  if (action.type === SELECT_NEXT_PAGE_INVENTORY) {
    return action.payload;
  }
  return state;
}