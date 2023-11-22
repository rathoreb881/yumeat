import React from 'react'

const Footbar = () => {
  return (
    <div className='w-full flex bg-[#24262b] h-[400px] justify-between'>
      <div className='flex flex-col flex-wrap'>
        <p className='text-white text-[18px] m-2'>Need advice on how to improve your flow?<br/>
          Sign up to join our Newsletter and stay upto date.
        </p>
        <div className='flex w-[500px] h-[2px] bg-gray-400 my-20'></div>
        <div className='flex my-10'>
          <h2 className='text-2xl p-4 text-black font-bold'>Yum<span className='text-orange-700 '>Eats </span></h2>
        </div>
      </div>
      <div className='flex flex-row mr-10  justify-center m-2'>
        <input className='w-[300px] h-[50px] bg-white rounded-[10px] p-4 m-1' placeholder='email'/>
        <button className='bg-green-400 rounded-[10px] p-2 w-[120px] h-[50px] m-1 font-bold'>Notify Me</button>
      </div>
      
    </div>
    
    
  )
}

export default Footbar