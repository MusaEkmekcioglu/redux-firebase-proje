import { SET_USER } from '../types/userType'

export const setActionUser = (parameter) => ({
  type: SET_USER,
  payload: parameter,
})
