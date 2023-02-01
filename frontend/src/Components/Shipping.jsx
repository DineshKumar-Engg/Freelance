import React from 'react'
import { useSelector } from 'react-redux'

const Shipping = () => {

    const order = useSelector((state)=>state.user.product)
    const price = useSelector((state)=>state.user.cost)

    console.log(order,price);
  return (
    <div>

    </div>
  )
}

export default Shipping