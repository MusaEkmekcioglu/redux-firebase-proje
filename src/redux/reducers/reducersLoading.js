import { SET_LOADING_FALSE, SET_LOADING_TRUE } from '../types/loadingTypes'

const initialState = {
  loading: false,
}

export const ReducerLoading = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_FALSE:
      return {
        ...state,
      }
    case SET_LOADING_TRUE:
      return {
        loading: true,
      }
    default:
      return state
  }
}

export default ReducerLoading
