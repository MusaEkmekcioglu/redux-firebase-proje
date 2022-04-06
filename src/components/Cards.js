import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { additemThunk } from '../redux/thunk/addItemThunk'

const Cards = ({ data }) => {
  const { user } = useSelector((state) => state.ReducerUse)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddcartButton = (id) => {
    console.log(user)
    if (!user) {
      toast.warn('You should be Login', {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      dispatch(additemThunk(id))
      // navigate('/shopcart')
    }
  }

  return (
    <Col className="mt-5">
      <Card
        style={{ width: '18rem', minHeight: '28rem', borderRadius: '5px' }}
        className="text-center"
      >
        <Link to={`/product/${data.id}`}>
          <Card.Img
            variant="top"
            src={data.image}
            style={{ maxHeight: '18rem', minHeight: '17rem', padding: '15px' }}
          />
        </Link>
        <Card.Body>
          <Card.Title>{data.category}</Card.Title>
          <Card.Text></Card.Text>
          <Button
            onClick={() => handleAddcartButton(data.id)}
            style={{ marginTop: '30px' }}
            variant="warning"
          >
            {' '}
            <FaShoppingCart />
            Add Shopping Cart 1
          </Button>{' '}
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  )
}

export default Cards
