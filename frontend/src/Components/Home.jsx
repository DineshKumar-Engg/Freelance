import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import image1 from '../Image/image1.jpg'
import image2 from '../Image/image2.jpg'
import image3 from '../Image/image3.jpg'
import image4 from '../Image/image4.jpg'
import '../Styles/Home.css'
// const data =[
//   {
//     type:"checkbox",
//     image:[
//       {
//         image1
//       },
//       {
//         image2
//       },
//       {
//         image3
//       },
//       {
//         image4
//       }
//     ],
//     title:[
//       {
//         title1:'Shirt'
//       },
//       {
//         title1:'Pant'
//       },
//       {
//         title1:'saree'
//       },
//       {
//         title1:'others'
//       }
//     ],
//     select:[
//       {
//         label:'1',
//         value:'1'
//       },
//       {
//         label:'2',
//         value:'2'
//       },
//       {
//         label:'3',
//         value:'3'
//       },
//       {
//         label:'4',
//         value:'4'
//       }
//     ]
//   }
// ]

// console.log(data);


const Home = () => {


  const [input,setInput]=useState({
    dress:[],
    select:[]
  })


const handleChange=(e)=>{

  const {value,checked}=e.target
  const {dress}=input

  console.log(`${value} is ${checked}`);
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

const [selectCount,SetSelectCount]=useState({
  dressCount:[],
})

const handleSelect=(e)=>{
   SetSelectCount({...selectCount,[e.target.name]:e.target.value})
  
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(input,selectCount);
}

  return (
    <div className='home-main'>
            <h1>Products</h1>
            <form onSubmit={handleSubmit}>
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'shirt'} onChange={handleChange} />
            <label>Shirt</label>
          </div>
          <div className='home-image'>
            <img src={image1} alt='shirt' ></img>
          </div>
          <div className='home-select'>
            <select name='optValue' onChange={handleSelect}>
              <option value={'0'}>0</option>
              <option value={'1'}>1</option>
              <option value={'2'}>2</option>
              <option value={'3'}>3</option>
              <option value={'4'}>4</option>
              <option value={'5'}>5</option>
            </select>
          </div>
        </div>
       <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'pant'} onChange={handleChange}  />
            <label>Pant</label>
          </div>
          <div className='home-image'>
            <img src={image2} alt='shirt' ></img>
          </div>
          <div className='home-select'>
            <select name='optValue' onChange={handleSelect}>
            <option value={'0'}>0</option>
              <option value={'1'}>1</option>
              <option value={'2'}>2</option>
              <option value={'3'}>3</option>
              <option value={'4'}>4</option>
              <option value={'5'}>5</option>
            </select>
          </div>
        </div>
        <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'saree'} onChange={handleChange}  />
            <label>Saree</label>
          </div>
          <div className='home-image'>
            <img src={image4} alt='shirt' ></img>
          </div>
          <div className='home-select'>
            <select name='optValue' onChange={handleSelect}>
              <option value={'0'}>0</option>
              <option value={'1'}>1</option>
              <option value={'2'}>2</option>
              <option value={'3'}>3</option>
              <option value={'4'}>4</option>
              <option value={'5'}>5</option>
            </select>
          </div>
        </div>
        <div className='home-content'>
          <div className='home-checkbox'>
            <input type={"checkbox"} name='dress' value={'others'} onChange={handleChange}  />
            <label>Others</label>
          </div>
          <div className='home-image'>
            <img src={image3} alt='shirt' ></img>
          </div>
          <div className='home-select' >
            <select name='optValue' onChange={handleSelect}>
              <option value={'0'}>0</option>
              <option value={'1'}>1</option>
              <option value={'2'}>2</option>
              <option value={'3'}>3</option>
              <option value={'4'}>4</option>
              <option value={'5'}>5</option>
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

