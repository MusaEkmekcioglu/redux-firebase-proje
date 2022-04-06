import React from 'react'
import { Carousel } from 'react-bootstrap'
import storebg from '../utilities/storebg.jpg'
import bg1 from '../utilities/bg1.jpg'
import bg2 from '../utilities/bg2.jpg'

const HomeCarusel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: '80vh' }}
          src={storebg}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h5 style={{ fontSize: '40px', fontWeight: '800' }}>
            STUDENTS GET 15% OFF{' '}
          </h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '80vh' }}
          className="d-block w-100"
          src={bg1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ fontSize: '40px', fontWeight: '800' }}>NEW SEASON</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: '80vh' }}
          className="d-block w-100"
          src={bg2}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption-left">
          <h5 style={{ fontSize: '40px', fontWeight: '800' }}>
            SHOP THE TREND
          </h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarusel
