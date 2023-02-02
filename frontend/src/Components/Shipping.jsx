import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../Styles/Shipping.css'
import axios from 'axios'

const Shipping = () => {

    const order = useSelector((state)=>state.user.product)
    const count = useSelector((state)=>state.user.count)
    const price = useSelector((state)=>state.user.cost)
    const userDetails = useSelector((state)=>state.user.value)
    // console.log(order,price,userDetails);

    const [location,setLocation]=useState({
      lat:'',
      long:''
    })

    const [input, setInput] = useState(
        { 
            name:''|| userDetails?.name, 
            email:"" || userDetails?.email,
            address: '' ,
            district:'',
            phoneNumber:'',
            postalcode:'' ,
            // location:location.lat 
        }
    )

   
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const getPosition = () => {
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError); 
      } else {
      alert("Sorry, Geolocation is not supported by this browser."); 
      }
      }
       const posError = () => {
        if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' }).then(res => {
        if (res.state === 'denied') {
        alert('Enable location permissions for this website in your browser settings.')
        }
        })
        } else {
        alert('Unable to access your location. You can continue by submitting location manually.') 
        }
        }
        const showPosition = (position) => {
          let latitude= position.coords.latitude
          let longitude = position.coords.longitude
          setLocation({lat:latitude,long:longitude})
        }

        // console.log(location);
      const handleSubmit= async(e)=>{
        e.preventDefault();
        // console.log(order.list.toLocaleString());
        // console.log(count);
        // console.log(order,price,userDetails,input,location);
        const orderList=order.list.toLocaleString()
        const priceList = price.total

        const data={
            input,orderList,count,priceList,location
        }
        // console.log(data);
        await axios.post("http://localhost:5000/mail",{value:data})
       }

  return (
    <div className='shipping-main'>
      <div className='shipping-container'>
                <div className="form-title">
                  <h1 >Delivery Address</h1>
                </div>
      <form className='form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type={"text"} name="name" value={input.name} onChange={handleChange} className="form-control" required />
                    <label className="form-label">Name</label>
                </div>
                <div className="form-group">
                    <input type={"email"} name="email" value={input.email} onChange={handleChange} className="form-control" required/>
                    <label className="form-label">Email</label>
                </div>
                <div className="form-group">
                    <input type={"number"} name="phoneNumber" value={input.phoneNumber} onChange={handleChange} className="form-control" required />
                    <label className="form-label">Phone Number</label>
                </div>
                <div className="form-group">
                    <input type={"text"} name="address" value={input.address} onChange={handleChange} className="form-control" required/>
                    <label className="form-label">Address</label>
                </div>
                <div className="form-group">
                    <input type={"text"} name="district" value={input.district} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">District</label>
                </div>
                <div className="form-group">
                    <input type={"Number"} name="postalcode" value={input.postalcode} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">Postal Code</label>
                </div>
                {/* <div className="form-group">
                    <input type={"Number"} name="location" value={input.location} onChange={handleChange} className="form-control" id="txtpassword" required />
                    <label className="form-label">Location</label>
                </div> */}
                <div className='register-btn'>
                    <span><button type="submit" className='submitBtn' >Submit</button></span>
                    <span><button type="button" className='submitBtn' onClick={getPosition} >Current Location</button></span>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Shipping