import React from 'react'
import AddCart from '../components/AddCart'
import LastCart from '../components/LastCart'
import { Container, Col, Row } from 'react-bootstrap'

const ShopCart = () => {
  return (
    <Container className="shopcart">
      <Row>
        <Col>
          <AddCart />
        </Col>
        <Col>
          <LastCart />
        </Col>
      </Row>
    </Container>
  )
}

export default ShopCart
