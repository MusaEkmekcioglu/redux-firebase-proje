import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWomen } from '../redux/thunk/productWomen'
import { Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'

const WomenPage = () => {
  const dispatch = useDispatch()

  const { womenProductLists } = useSelector((state) => state.ReducerProduct)

  useEffect(() => {
    dispatch(getProductWomen())
  }, [])

  return (
    <div>
      {console.log(womenProductLists)}
      <Container style={{ minHeight: '800px' }}>
        <Row className="justify-content-md-center">
          {womenProductLists.map((data, id) => (
            <Cards data={data} key={id} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default WomenPage
