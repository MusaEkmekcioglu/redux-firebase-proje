import { SET_USER } from '../types/userType'

const initialState = {
  user: '',
}

export const ReducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        user: payload,
      }
    default:
      return state
  }
}

export default ReducerUser
