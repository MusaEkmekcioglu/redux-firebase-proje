import { setActionProductElec } from '../actions/ActionProducts'

export const getProductElec = () => async (dispatch, getState) => {
  await fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then((response) => response.json())
    .then((res) => dispatch(setActionProductElec(res)))
}
