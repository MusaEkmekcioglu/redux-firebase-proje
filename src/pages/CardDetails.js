import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../redux/thunk/productDetails'
import { additemThunk } from '../redux/thunk/addItemThunk'

const CardDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { selectedProduct } = useSelector((state) => state.ReducerProduct)
  const { loading } = useSelector((state) => state.ReducerLoading)
  const { user } = useSelector((state) => state.ReducerUse)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [])

  const Loading = () => {
    return <div>musa</div>
  }

  const addCartHandle = (id) => {
    console.log(user)
    if (!user) {
      toast.warn('You should be Login', {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      dispatch(additemThunk(id))
      navigate('/shopcart')
    }
  }

  const Continue = () => {
    return (
      <Container className="card-details mt-5">
        <Row className="justify-content-md-center">
          {console.log(selectedProduct)}
          <Col className="col-md-6">
            <img
              src={selectedProduct?.image}
              alt=""
              height="400px"
              width="400px"
            />
          </Col>
          <Col className="col-md-6">
            <h4 className="text-uppercase text-black-50">
              {selectedProduct?.category}
            </h4>
            <h1 className="display-5">{selectedProduct?.title}</h1>
            <p className="lead">Rating : {selectedProduct?.rating?.rate}</p>
            <h3 className="display-6 fw-bold my-4">
              {' '}
              $ {selectedProduct?.price}
            </h3>
            <p className="lead">
              {selectedProduct?.description?.substring(0, 200)}...
            </p>
            <Button
              onClick={() => addCartHandle(selectedProduct.id)}
              style={{ marginTop: '30px' }}
              variant="secondary"
            >
              {' '}
              <FaShoppingCart />
              Add Shopping Cart
            </Button>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    )
  }

  return <div>{loading ? <Continue /> : <Loading />}</div>
}

export default CardDetails
