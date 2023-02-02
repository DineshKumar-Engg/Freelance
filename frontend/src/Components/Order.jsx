import React from 'react'
import '../Styles/Order.css'
import { useDispatch, useSelector } from 'react-redux'
import { price } from '../Redux/Slice'



const Order = () => {

    const order = useSelector((state)=>state.user.product)
    const count =useSelector((state)=>state.user.count)
    const dispatch =useDispatch()

        const data = count?.shirt*10 + 
                    count?.pant*10 +
                    count?.saree*10 + 
                    count?.others*10
      
    const handlePrice=()=>{
        dispatch(price({total:data}))
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
                                order.list ? (order?.list?.map((item,index)=>(
                                    <th key={index}>{item}</th>
                                ))):null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Quantity</td>
                            <td>{count?.shirt || ''}</td>
                            <td>{count?.pant || ''}</td>
                            <td>{count?.saree || ''}</td>
                            <td>{count?.others || ''}</td>
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