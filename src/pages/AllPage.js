import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'

const AllPage = () => {
  const { productLists } = useSelector((state) => state.ReducerProduct)

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          {productLists.map((data, i) => (
            <Cards data={data} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default AllPage
