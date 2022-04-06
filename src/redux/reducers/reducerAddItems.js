import { SET_ADD_ITEMS, SET_REMOVE_ITEM } from '../types/addItemsTypes'

const initialState = {
  addItems: [],
}

export const ReducerAddItems = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ADD_ITEMS:
      console.log('reducer add')
      const add = state.addItems.find((item) => item.id === payload.id)
      return add
        ? state
        : {
            ...state,
            addItems: [...state.addItems, payload],
          }

    case SET_REMOVE_ITEM:
      console.log('reducer remove')
      return {
        ...state,
        addItems: state.addItems.filter((item) => item.id !== payload),
      }
    default:
      return state
  }
}

export default ReducerAddItems
