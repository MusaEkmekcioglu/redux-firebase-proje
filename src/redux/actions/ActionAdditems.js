import { SET_ADD_ITEMS, SET_REMOVE_ITEM } from '../types/addItemsTypes'

export const setActionAddItems = (parameter) => {
  console.log('musa add ')
  return { type: SET_ADD_ITEMS, payload: parameter }
}

console.log('musa action ')
export const setActionRemoveItems = (parameter) => {
  console.log('musa action remove')
  return {
    type: SET_REMOVE_ITEM,
    payload: parameter,
  }
}
