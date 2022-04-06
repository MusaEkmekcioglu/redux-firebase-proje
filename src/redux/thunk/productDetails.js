import { setActionProductSelected } from '../actions/ActionProducts'
import {
  setActionLoadingFalse,
  setActionLoadingTrue,
} from '../actions/appActions'

export const getProductDetails = (id) => async (dispatch, getState) => {
  try {
    setActionLoadingFalse()
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((res) => dispatch(setActionProductSelected(res)))
  } catch (error) {
    console.log(error)
  } finally {
    setActionLoadingTrue()
  }
}
