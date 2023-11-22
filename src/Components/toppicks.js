import React from 'react'
import TopDish from './data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Toppicks = () => {
  const{id,title,price,img}=TopDish
  return (
    <div className='flex  max-w-[1520px]'>
      <Splide options={{perPage:4,gap:4}}>
      {TopDish.map((item)=>(
        <SplideSlide>
        <div className='bg-black/50 relative w-full flex-row'>
            <div className='flex flex-col'>
                <div className='relative cursor-pointer hover:scale-105 ease-out duration-100'>
                  <div className='absolute text-[18px] font-bold text-white  ml-2'>{item.title}</div>
                  <div className='absolute text-[18px] font-bold text-white py-5 ml-2'>{item.price}</div>
                  <button className='absolute rounded-3xl border-dotted border bottom-5 ml-5 p-4 bg-transparent text-red-700  font-bold text-[15px] bg-gray-200 '>Add To Cart</button>
                  <img className='w-full h-[200px] rounded-[10px] object-cover' src={item.img} alt=''/>
                 
                </div>
            </div>  
        </div>
        </SplideSlide>
      ))}
      </Splide>
    </div>
  )
}

export default Toppicks