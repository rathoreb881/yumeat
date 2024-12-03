import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiOutlineSearch}from "react-icons/ai"
import {BsFillCartFill,BsPerson} from "react-icons/bs"
import {TbTruckReturn} from "react-icons/tb"
import { FaGoogleWallet} from "react-icons/fa"
import { CiShoppingCart } from "react-icons/ci";
import {MdHelp,MdOutlineFavorite} from "react-icons/md"
import { Link } from "react-router-dom";
import { storeContext } from '../Context/store.context'



const TopNav = () => {

  const [click,setClick]=useState(false)
  const [showlogin,setShowlogin]=useState(false)

  const {addtoCart,count,store,setStore,reducetoCart,cartItems,foodItems,Dishes,menuDismiss,dropMenu,setDropMenu}=useContext(storeContext)
 
  const [items,setItems]=useState([0])
 
  return (
    <div  className='text-xl  flex justify-between font-bold mx-auto p-4 md:p-0'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={25} onClick={()=>setDropMenu(!dropMenu)}/>
        </div>
        {
          dropMenu?(<div className='fixed w-[300px] bg-gray-200 h-screen left-0 top-0 z-10 duration-10 p-2'>
            <AiOutlineClose size={35} onClick={()=>setDropMenu(!dropMenu)} className='absolute cursor-pointer right-4 top-4'/>
            <h2 className='text-2xl p-4 text-black font-bold'>Yum<span className='text-orange-700 '>Eats </span></h2>
              <nav> 
                <ul className=' cursor-pointer p-4 text-xl text-gray-600 flex flex-col'>
                  <li className='text-[18px] flex py-4 items-center'><BsFillCartFill size={24} className='mr-4 text-white bg-black rounded-full'/>My Account</li>
                  <li className='text-[18px] flex py-4 items-center '><TbTruckReturn  size={24} className='mr-4 text-white  bg-black rounded-full'/>Delivery</li>
                  <li className='text-[18px] flex py-4 items-center '><MdOutlineFavorite  size={24} className='mr-4 text-white  bg-black rounded-full'/>My Favourite</li>
                  <li className='text-[18px] flex py-4 items-center '><FaGoogleWallet  size={24} className='mr-4 text-white  bg-black rounded-full'/>My Wallet</li>
                  <li className='text-[18px] flex py-4 items-center '><MdHelp  size={24} className='mr-4 text-white  bg-black rounded-full'/>Help</li>
                </ul>
              </nav>
            </div>
            ):(<div className='fixed bg-yellow-200 h-screen left-[-100] top-0 z-10 duration-10'></div>)
        }
        <h1 className='text-2xl p-4 text-black font-bold'>Yum<span className='text-orange-700 '>Eats </span></h1>
      <div  className='relative w-[150px] h-[38px] text-[20px] bg-black text-white rounded-full flex p-1 justify-center items-center ml-[100px]'> 
        
        <div className='flex justify-center items-center' onClick={()=>(setClick(!click))}>
          {
           click?
              <>
              <p onClick={()=>(setClick(true))} className='absolute right-0 bg-orange-600 rounded-full cursor-pointer w-[60px] h-[32px] px-2' >Free</p>
              <p className='absolute left-0 px-2 text-[12px]'>Free Delivery</p>
              </>
              :
              <>
              <p onClick={()=>(setClick(true))} className='absolute left-0  bg-orange-600 rounded-full cursor-pointer w-[60px] h-[32px] px-2' >Free</p>
              <p className='absolute right-0 px-2'>Delivery</p>
              
              </>    
              }
        </div>
      </div>
      
        <div className='px-4 rounded-full h-[50px] w-[500px]  bg-gray-200 flex items-center mx-[100px] p-2'>
          <AiOutlineSearch size={25} />
          
          <input className='text-xl bg-white-600 bg-transparent  p-2 focus:outline-none' type='text' placeholder='search meals'/>
        </div>
        <button className='text-center text-white bg-red-600 color-primary p-2 rounded-full w-[100px]' onClick={()=>setShowlogin(true)}>Sign in</button>
        <Link to='/cart' className='text-[50px] ml-10 cursor-pointer relative'><CiShoppingCart />
        <p className='text-[14px]  absolute top-2 right-1.5 p-1'>
          <p className=' text-black h-6 w-6 justify-center text-center'>{count(cartItems)}</p>
        </p>
        </Link>
    </div>
        { 
         showlogin===true?
          <div className='absolute z-10 w-[100%] h-[100%] bg-[#00000090]'>
            <div className='place-self-center rounded-md ml-[500px] mt-[100px] bg-slate-100 w-[300px] h-[400px] text-[18px]'>
              Login <button className='relative left-40 ml-14 text-[14px]' onClick={(prev)=>setShowlogin(!prev)}>X</button>
              <div className='flex flex-col gap-10 p-4 text-[15px] outline-none'>
                <input className='text-[15px]' placeholder='Your Email'/>
                <input placeholder='Password'/>
                <button className='bg-red-400 w-100'>Login</button>
                <div className='flex items-start text-slate-500 text-[14px]'>
                  <input  className='content-start mt-2 m-1' type='checkbox'/>
                  <p>By continuing.I agree to the terms and conditions.</p>
                  
                </div>
                <p className='flex items-start text-slate-500 text-[14px] mb-4'>Create a new account? 
                  <p className='text-red-700 cursor-pointer'>Click here</p>                 
                </p>
              </div>
            </div>
          </div>:<></>
         }
     
      
    </div>
  )
}

export default TopNav