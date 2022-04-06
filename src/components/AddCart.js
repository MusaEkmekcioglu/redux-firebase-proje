import React, { useState } from 'react'
import { Card, Col, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setActionRemoveItems } from '../redux/actions/ActionAdditems'

const AddCart = () => {
  const { addItems } = useSelector((state) => state.ReducerAddItems)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    console.log(id)
    dispatch(setActionRemoveItems(id))
    console.log(addItems)
  }

  console.log(addItems)

  return (
    <Row>
      {addItems?.map((item, i) => {
        return (
          <Col
            style={{ display: 'flex', margin: '1rem', marginLeft: '3rem' }}
            key={i}
          >
            <Card.Img
              variant="top"
              src={item.image}
              style={{ width: '12rem' }}
            />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text> $ {item.price}</Card.Text>
                <Button onClick={() => handleDelete(item.id)} variant="warning">
                  Delete
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AddCart
