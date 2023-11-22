import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
const Features = () => {
const sliders = [
  {
  url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg"
  },
  {
  url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg"
  },
  {
  url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg"
  }]
  const [currentIndex,setCurrentIndex]=useState(0)
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 rounded-2xl relative group '>
      <div className=' w-[99%] m-4 h-full rounded-[10px] bg-center bg-cover duration-700' style={{backgroundImage:`url(${sliders[currentIndex].url})`}}>
        
      </div>
      <div className=' hidden group-hover:block absolute top-[50%] translate-x-[0%] translate-y-[-50%] text-3xl rounded-full bg-orange-700 left-7 cursor-pointer'>
          <BsChevronCompactLeft onClick={()=>setCurrentIndex(currentIndex!=0?currentIndex-1:currentIndex+2)}/>
      </div>
      <div className=' hidden group-hover:block absolute top-[50%] text-3xl rounded-full bg-orange-700 right-7 cursor-pointer'>
          <BsChevronCompactRight onClick={()=>setCurrentIndex(currentIndex!=2?currentIndex+1:currentIndex-2)}/>
      </div>
    </div>
    
  )
}

export default Features