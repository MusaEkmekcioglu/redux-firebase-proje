import { setActionProductLists } from '../actions/ActionProducts'
import {
  setActionLoadingFalse,
  setActionLoadingTrue,
} from '../actions/appActions'

export const getProductList = () => async (dispatch, getState) => {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Host': 'walmart.p.rapidapi.com',
  //     'X-RapidAPI-Key': '6ca7dfafc2msh93f655fa94295f5p141e25jsn1a0f6b6c34c2',
  //   },
  // }
  dispatch(setActionLoadingFalse())
  await fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((response) => dispatch(setActionProductLists(response)))
    .catch((err) => console.error(err))
  dispatch(setActionLoadingTrue())
}
