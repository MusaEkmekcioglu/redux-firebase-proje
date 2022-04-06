import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductElec } from '../redux/thunk/productElect'
import { Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'

const ElectronicPage = () => {
  const dispatch = useDispatch()

  const { elecProductLists } = useSelector((state) => state.ReducerProduct)

  useEffect(() => {
    dispatch(getProductElec())
  }, [])

  return (
    <div>
      <Container style={{ minHeight: '800px' }}>
        <Row className="justify-content-md-center">
          {elecProductLists.map((data, i) => (
            <Cards data={data} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ElectronicPage
