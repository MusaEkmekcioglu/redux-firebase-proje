import { setActionProductSearch } from '../actions/ActionProducts'

export const getProductSearch = (key) => async (dispatch, getState) => {
  try {
    const res = await fetch('https://fakestoreapi.com/products').then(
      (response) => response.json()
    )

    const result = res.filter((product) =>
      product.title.toLowerCase().includes(key)
    )
    dispatch(setActionProductSearch(result))
  } catch (error) {
    console.log(error)
  }
}
