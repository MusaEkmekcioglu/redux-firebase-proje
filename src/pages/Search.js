import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'

import Cards from '../components/Cards'

const Search = () => {
  const { searchProduct } = useSelector((state) => state.ReducerProduct)
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          {searchProduct.map((data, i) => (
            <Cards data={data} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Search
