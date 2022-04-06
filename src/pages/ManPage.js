import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductMan } from '../redux/thunk/productMan'
import { Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'

const ManPage = () => {
  const dispatch = useDispatch()

  const { manProductLists } = useSelector((state) => state.ReducerProduct)

  useEffect(() => {
    dispatch(getProductMan())
  }, [])

  return (
    <div>
      <Container style={{ minHeight: '800px' }}>
        <Row className="justify-content-md-center">
          {manProductLists.map((data, i) => (
            <Cards data={data} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ManPage
