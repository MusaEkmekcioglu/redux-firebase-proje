import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const LastCart = () => {
  const { addItems } = useSelector((state) => state.ReducerAddItems)

  function price() {
    let sum = 0
    for (const i of addItems) {
      sum += i.price
    }
    return sum.toFixed(2)
  }

  return (
    <div className="totaly">
      <div>
        <h1>Total : </h1>
        <h3>$ {price()} </h3>
      </div>
      <Button variant="warning">PAY</Button>{' '}
    </div>
  )
}

export default LastCart
