import React, { useEffect, useState } from 'react'
import { getProductList } from '../redux/thunk/productListThunk'
import { useDispatch, useSelector } from 'react-redux'
import HomeCarusel from '../components/HomeCarusel'
import HomeFooter from '../components/HomeFooter'
import HomeCardGroup from '../components/HomeCardGroup'
import HomeButtons from '../components/HomeButtons'

const Home = () => {
  const dispatch = useDispatch()
  const { productLists } = useSelector((state) => state.ReducerProduct)
  const { loading } = useSelector((state) => state.ReducerLoading)

  useEffect(() => {
    dispatch(getProductList())
  }, [])

  return (
    <>
      <HomeCarusel />
      <HomeButtons />

      <HomeCardGroup data={productLists} loading={loading} />
      <HomeFooter />
    </>
  )
}

export default Home
