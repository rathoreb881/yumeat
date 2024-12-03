import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../Context/store.context';

export const FoodItem = ({item}) => {
    
  const {addtoCart,reducetoCart,cartItems}=useContext(storeContext)
  

  return (
    <div>
        <div className='flex flex-col py-4 justify-start'>
            
            <div className='' >
                <img className='relative w-[300px] h-[200px] object-cover rounded-2xl hover:scale-105 ease-out duration-100' src={item.image} alt=""/>
                
                 <p className='absolute bg-orange-700 h-18 w-18 rounded-full px-2 py-3 text-[15px] text-white border-8 -mt-10 ml-60'>{item.price}</p>
                 
            </div>
            <div className='flex font-bold  text-[18px] justify-start items-center'  >
                <p className='mr-4'> {item.name}</p>
                
                {!cartItems[item.id]?
                <><img className='w-5 cursor-pointer' src='../../plus.jpg' onClick={(e)=>addtoCart(item.id,e)}/></>:
                <>
                <div className='flex items-center'>
                  <p className='text-[18px] font-bold border-gray-600 border-2 w-8 h-5  flex justify-center items-center cursor-pointer rounded-lg ' onClick={()=>addtoCart(item.id)}> + </p>
                  <p>{cartItems[item.id]}</p>
                  <p className='flex text-[18px] font-bold border-gray-600 border-2 w-8 h-5   justify-center items-center cursor-pointer rounded-lg ' onClick={()=>reducetoCart(item.id)} > - </p>
                </div>
                </>
              
              
              }
                
            </div>
        </div>
    </div>
  )

}
