import React from 'react'
import '../Styles/Header.css'
import image from '../Image/logo.png'
import {auth,provider} from '../FireBase/Firebase'
import {signInWithPopup, signOut} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from '../Redux/Slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Header = () => {

    const dispatch =useDispatch()

    const userData = useSelector((state)=>state.user.value)
    useEffect(()=>{

            const onchange=(user)=>{
                dispatch(login({
                    name:user?user.displayName :'',
                    email:user?user.email:'',
                    image:user?user.photoURL:''
                }))
            }
            const onerror=(error)=>{
                console.log(error);
            }
            const unSubscribe = auth.onAuthStateChanged(onchange,onerror)
            return unSubscribe
        
          
    },[dispatch])


    const HandleLogin= async ()=>{
        
        await signInWithPopup(auth,provider)
            .then((res)=>{
                dispatch(login({
                    name:res.user.displayName,
                    email:res.user.email,
                    image:res.user.photoURL
                }))
                
                // console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        
    }

const handleLogOut = async ()=>{
   await signOut(auth)
    console.log("clicked");
    dispatch(logout({
        name:'',
        email:'',
        image:''
    }))
}


  return (

    <div className='header-main'>
        <div className='header-container'>
            <div className='header-image'>
                <img src={image} alt=''></img>
                <h1>Env</h1>
            </div>
            <div className='header-content'>
            <div className='header-button'>
            <button>Home</button>
            {
                userData.email.length ===0 ?
                (<button onClick={HandleLogin}>Login</button>
                ):(<button onClick={handleLogOut}> Logout</button>)
            }
            </div>
            
                {
                    userData.name.length ===0 ? null: (
                    <div className='header-data'>
                        <p>{userData.name}</p>
                        <img src={userData.image} alt=''></img>                   
                    </div>)
                }
            </div>
           
        </div>
    </div>
  )
}

export default Header