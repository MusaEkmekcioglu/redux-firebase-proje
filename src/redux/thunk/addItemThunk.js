import {
  setActionAddItems,
  setActionRemoveItems,
} from '../actions/ActionAdditems'

export const additemThunk = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then((response) => response.json())
    dispatch(setActionAddItems(response))
  } catch (error) {
    console.log(error)
  }
}
