import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductJew } from '../redux/thunk/productJew'
import { Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'

const JewerlyPages = () => {
  const dispatch = useDispatch()

  const { jewProductLists } = useSelector((state) => state.ReducerProduct)

  useEffect(() => {
    dispatch(getProductJew())
  }, [])

  return (
    <div>
      <Container style={{ minHeight: '800px' }}>
        <Row className="justify-content-md-center">
          {jewProductLists.map((data, i) => (
            <Cards data={data} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default JewerlyPages
