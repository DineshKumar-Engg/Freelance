import React from 'react'
import '../Styles/Order.css'
import { useDispatch, useSelector } from 'react-redux'
import { price } from '../Redux/Slice'



const Order = () => {

    const order = useSelector((state)=>state.user.product)
    const dispatch =useDispatch()

        const data = order?.list?.num?.shirt*10 + 
                     order?.list?.num?.pant*10 +
                    order?.list?.num?.saree*10 + 
                    order?.list?.num?.others*10
      
    const handlePrice=()=>{
        dispatch(price(data))
    }

  return (
    <div className='order-main'>
        <div className='order-container'>
            {/* {
                order?.list?.dress ? 
                (
                <> */}
                <div className='order-title'>
                <h1>Order List</h1>
            </div>
            <div className='order-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Products</th>
                            {
                                order?.list?.dress?.map((item,index)=>(
                                    <th key={index}>{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Quantity</td>
                            <td>{order?.list?.num?.shirt || ''}</td>
                            <td>{order?.list?.num?.pant || ''}</td>
                            <td>{order?.list?.num?.saree || ''}</td>
                            <td>{order?.list?.num?.others || ''}</td>
                        </tr>
                        <tr>
                            <td>Total Price</td>
                            <td colSpan="4">Rs:{data||"Please Select Product Quantity"}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handlePrice}>Order</button>
            </div>
                {/* </>
                )
            :(
                null
            )
            } */}
        </div>
    </div>
  )
}

export default Order