import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import image1 from '../Image/image1.jpg'
import image2 from '../Image/image2.jpg'
import image3 from '../Image/image3.jpg'
import image4 from '../Image/image4.jpg'
import { ProductData } from '../Data'
import '../Styles/Home.css'
import {useDispatch, useSelector} from 'react-redux'
import {dress} from '../Redux/Slice'
import { OrderCount } from '../Redux/Slice'


const Home = () => {

  const dispatch = useDispatch()

  const [input,setInput]=useState({
    dress:[],
    select:[]
  })


const handleChange=(e)=>{

  const {value,checked}=e.target
  const {dress}=input

  if(checked){
    setInput({
      dress:[...dress,value],
      select:[...dress,value]
    })
  }else {
    setInput({
      dress: dress.filter((e) => e !== value),
      select: dress.filter((e) => e !== value),
    });
  }

} 

const [count,SetCount]=useState({
  shirt:'',
  pant:'',
  saree:'',
  others:''
})

const handleSelect=(e)=>{
 SetCount({...count,[e.target.name]:e.target.value})
}


const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(dress({
    dress:input.select,
 }))
 dispatch(OrderCount(count))

}




  return (
    <div className='home-main'>
            <h1>Products</h1>
            <form onSubmit={handleSubmit}>
      <div className='home-container'>
      <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'shirt'} onChange={handleChange} required  />
            <label>Shirt</label>
          </div>
          <div className='home-image'>
            <img src={image1} alt='shirt' ></img>
          </div>
          <div className='home-select'>
            <select name='shirt'  value={count.shirt} onChange={handleSelect} required>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
        </div>
        </div>
      <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'pant'} onChange={handleChange} required />
            <label>Pant</label>
          </div>
          <div className='home-image'>
            <img src={image2} alt='Pant' ></img>
          </div>
          <div className='home-select'>
            <select name='pant' value={count.pant} onChange={handleSelect} required>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'saree'} onChange={handleChange} required />
            <label>Saree</label>
          </div>
          <div className='home-image'>
            <img src={image4} alt='saree' ></img>
          </div>
          <div className='home-select'>
            <select name='saree' value={count.saree} onChange={handleSelect} required>
            <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'others'} onChange={handleChange} required  />
            <label>Others</label>
          </div>
          <div className='home-image'>
            <img src={image3} alt='Others' ></img>
          </div>
          <div className='home-select' >
            <select name='others' value={count.others} onChange={handleSelect} required>
            <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </div>
      <div className='home-submit'>
          <button>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Home

// {
//   ProductData.map((item)=>(
//     <div className='home-content' key={item._id}>
//     <div className='home-checkbox'>
//       <input type={"checkbox"} name='dress' value={item.title} onChange={handleChange} />
//       <label>{item.title}</label>
//     </div>
//     <div className='home-image'>
//       <img src={item.image} alt={item.slug} ></img>
//     </div>
//     <div className='home-select'>
//     <button onClick={()=>{setCount(count-1)}}>-</button>
//     <p>{count}</p>
//     <button onClick={()=>{setCount(count+1)}}>+</button>
//     </div>
//   </div>
//   ))
// }    

