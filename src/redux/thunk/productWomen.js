import { setActionProductWomen } from '../actions/ActionProducts'

export const getProductWomen = () => async (dispatch, getState) => {
  await fetch(`https://fakestoreapi.com/products/category/women's clothing`)
    .then((response) => response.json())
    .then((res) => dispatch(setActionProductWomen(res)))
}
