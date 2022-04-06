import {
  SET_PRODUCT_LISTS,
  SET_SEARCH_PRODUCT,
  SET_MAN_PRODUCT,
  SET_PRODUCT_WOMEN,
  SET_PRODUCT_ELEC,
  SET_PRODUCT_JEW,
  SET_PRODUCT_SELECTED,
} from '../types/ProductType'

const initialState = {
  productLists: [],
  searchProduct: [],
  manProductLists: [],
  womenProductLists: [],
  jewProductLists: [],
  elecProductLists: [],
  selectedProduct: [],
}

export const ReducerProduct = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT_LISTS:
      return {
        ...state,
        productLists: payload,
      }
    case SET_SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: payload,
      }
    case SET_MAN_PRODUCT:
      return {
        ...state,
        manProductLists: payload,
      }
    case SET_PRODUCT_WOMEN:
      return {
        ...state,
        womenProductLists: payload,
      }
    case SET_PRODUCT_ELEC:
      return {
        ...state,
        elecProductLists: payload,
      }
    case SET_PRODUCT_JEW:
      return {
        ...state,
        jewProductLists: payload,
      }
    case SET_PRODUCT_SELECTED:
      return {
        ...state,
        selectedProduct: payload,
      }
    default:
      return state
  }
}

export default ReducerProduct
