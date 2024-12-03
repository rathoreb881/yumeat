import React, { useContext, useState } from 'react'
import { mealData } from './data'
import { FoodItem } from './foodItem';

const OurMeal = () => {
 
  const [foods,setFoods]=useState(mealData);
  
  const filterCat=(category)=>{
  setFoods(mealData.filter((item)=>{
    return item.category===category})
  )};
  return (
    <div className='max-w-[1520px] h-full py-12 m-auto px-4'>
      <h1 className='text-orange-700 text-2xl font-bold text-center py-2'>Our Meal</h1>
        <div className='flex flex-row text-center items-center justify-center'>
          <div className='flex justify-center'>
            <button onClick={()=>setFoods(mealData)} className='w-[100px] m-2 rounded-3xl  bg-orange-500 text-white font-bold p-2'>All</button>
            <button onClick={()=>filterCat("Pizza")} className='w-[100px] m-2 rounded-3xl  bg-orange-500 text-white font-bold p-2'>Pizza</button>
            <button onClick={()=>filterCat("salad")} className=' w-[100px] m-2 rounded-3xl  bg-orange-500 text-white font-bold p-2'>salad</button>
            <button onClick={()=>filterCat("chicken")} className=' w-[100px] m-2 rounded-3xl  bg-orange-500 text-white font-bold p-2'>chicken</button>
          </div>
         
        </div>
        
    
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
      {foods.map((item,index)=>(
        <FoodItem item={item}  id={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default OurMeal