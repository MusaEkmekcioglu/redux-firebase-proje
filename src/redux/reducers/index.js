import { combineReducers } from 'redux'
import { ReducerLoading } from './reducersLoading'
import { ReducerProduct } from './reducerProduct'
import { ReducerUser } from './reducerUser'
import { ReducerAddItems } from './reducerAddItems'

const rootReducer = combineReducers({
  ReducerProduct: ReducerProduct,
  ReducerLoading: ReducerLoading,
  ReducerUse: ReducerUser,
  ReducerAddItems: ReducerAddItems,
})

export default rootReducer
