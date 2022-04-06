import {
  SET_PRODUCT_LISTS,
  SET_SEARCH_PRODUCT,
  SET_MAN_PRODUCT,
  SET_PRODUCT_WOMEN,
  SET_PRODUCT_ELEC,
  SET_PRODUCT_JEW,
  SET_PRODUCT_SELECTED,
} from '../types/ProductType'

export const setActionProductLists = (productLists) => ({
  type: SET_PRODUCT_LISTS,
  payload: productLists,
})

export const setActionProductSearch = (productSearch) => ({
  type: SET_SEARCH_PRODUCT,

  payload: productSearch,
})

export const setActionProductMan = (productMan) => ({
  type: SET_MAN_PRODUCT,
  payload: productMan,
})

export const setActionProductWomen = (productWomen) => ({
  type: SET_PRODUCT_WOMEN,
  payload: productWomen,
})

export const setActionProductJew = (parameter) => ({
  type: SET_PRODUCT_JEW,
  payload: parameter,
})

export const setActionProductElec = (parameter) => ({
  type: SET_PRODUCT_ELEC,
  payload: parameter,
})

export const setActionProductSelected = (parameter) => ({
  type: SET_PRODUCT_SELECTED,
  payload: parameter,
})
