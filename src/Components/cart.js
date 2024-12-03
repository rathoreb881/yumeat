import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../Context/store.context'

const Cart = () => {

const {cartItems,setCartItems,foodItems,Dishes,addtoCart,reducetoCart,count,subTotal}=useContext(storeContext)

const [dishes,setDishes]=useState();

  return (
    <div className='flex ml-5'>
      <div className='m-2 p-2 border-2 rounded-2xl shadow-md max-w-[700px]'>
        <div>
          <div className='flex font-serif font-bold mb-4 text-gray-500'>
            <p className='text-lg ml-2'>Items</p>
          </div>
        {foodItems.map((items)=>{
          if (cartItems[items.id]>0) {return(
          <div className='grid grid-cols-3'>
            <div className='flex flex-col font-bold font-serif text-gray-500'>
              <img className='rounded-full h-[75px] w-[75px]' src={items.image} />
              {items.name}
            </div>
            <div className='flex justify-center items-center text-bold text-[18px] text-gray-500'> 
                <p className='text-bold text-[18px] text-gray-500'>Qty</p>: {cartItems[items.id]}
            </div>
            <div className='flex items-center'>
              <div className='flex justify-between items-center rounded-2xl bg-red-400 text-white text-xl p-1 font-bold w-[60px] h-[25px]' >
                    <button className='justify-center border-r-2' onClick={(id)=>addtoCart(items.id)}>+</button>
                    <button className='justify-center border-l-2' onClick={(id)=>reducetoCart(items.id)}>-</button>
              </div>
            </div>       
          </div>        
        )} 
        })}
        </div>
      </div>
      <div className='m-2 p-2 border-2 rounded-2xl shadow-md w-[400px] h-[300px]'>
        <p className='text-bold text-2xl text-gray-600 mb-10 '>Total Quantity : {count(cartItems)}</p>
        <p className='text-bold text-2xl text-gray-600 mb-10 '>Total Price : {subTotal(cartItems)}</p>
        <p className='text-bold text-2xl text-gray-600 mb-10 '>Delivery Price :</p>
        <button className='text-bold text-2xl text-white bg-red-500 rounded-lg w-[300px] h-[40px] mb-10 justify-center ml-4'>Checkout</button>
      </div>
    
    </div>
  )
}

export default Cart