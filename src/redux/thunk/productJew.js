import { setActionProductJew } from '../actions/ActionProducts'

export const getProductJew = () => async (dispatch, getState) => {
  await fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then((response) => response.json())
    .then((res) => dispatch(setActionProductJew(res)))
}
