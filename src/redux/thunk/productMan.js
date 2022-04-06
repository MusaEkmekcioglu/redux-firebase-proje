import { setActionProductMan } from '../actions/ActionProducts'

export const getProductMan = () => async (dispatch, getState) => {
  await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
    .then((response) => response.json())
    .then((res) => dispatch(setActionProductMan(res)))
}
