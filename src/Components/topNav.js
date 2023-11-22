import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiOutlineSearch}from "react-icons/ai"
import {BsFillCartFill,BsPerson} from "react-icons/bs"
import {TbTruckReturn} from "react-icons/tb"
import { FaGoogleWallet} from "react-icons/fa"
import {MdHelp,MdOutlineFavorite} from "react-icons/md"
const TopNav = () => {
  const[dropMenu,setDropMenu]=useState(false)
  const [click,setClick]=useState(false)
 
  return (
    <div className='text-xl flex justify-between font-bold mx-auto p-4'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={25} onClick={()=>setDropMenu(!dropMenu)}/>
        </div>
        {
          dropMenu?(<div className='fixed w-[300px] bg-gray-200 h-screen left-0 top-0 z-10 duration-10 p-2'>
            <AiOutlineClose size={25} onClick={()=>setDropMenu(!dropMenu)} className='absolute cursor-pointer right-4 top-4'/>
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
            ):(<div className='fixed bg-gray-200 h-screen left-[-100] top-0 z-10 duration-10'></div>)
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
        <div className='px-4 rounded-full h-[40px] w-[500px] bg-gray-200 flex items-center mx-[100px] p-2'>
          <AiOutlineSearch size={25} />
         
          <input className='text-xl bg-white-600 bg-transparent w-full p-2 focus:outline-none' type='text' placeholder='search meals'/>
        </div>
     
    </div>
      
    </div>
  )
}

export default TopNav