import React from 'react'

const DeliveryApp = () => {
  return (
    
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 items-center justify-center mt-4 text-2xl flex font-bold '>Quick Delivery App</h3>
      
      <div className='flex flex-row mx-auto justify-between py-10'>
        <img className='w-[600px] h-[500px] ml-40 my-4' src="./mobilefood.png" alt=''/>
        <p className='text-blue-400 font-bold text-[14px] flex flex-col mr-[90px] py-10 items-start'>Get The App <span className='text-black font-bold text-[30px]' >Limitless Convenience on-demand</span>

        <p className='text-black '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className='bg-black text-white w-[180px] mt-4 h-[40px] rounded-[5px]'>Get Started</button>
        </p>   
      </div>
      
    </div>
    
  )
}

export default DeliveryApp