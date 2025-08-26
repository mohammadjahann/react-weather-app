import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50
      bg-white/50 backdrop-blur-xl">

      {/* لودینگ خودمون */}
      <div className='flex items-center justify-center
        shadow-[25px_25px_51px_#93adc8,-25px_-25px_51px_#c7e9ff] 
        rounded-[50px] bg-[#689acf]/50 backdrop-blur-3xl w-[200px] h-[200px]'>

        <img className='w-[50px] animate-bounce' src="/img/loader/cloud.png" alt="" />
        <img className='w-[50px] animate-bounce [animation-delay:0.5s]' src="/img/loader/moon.png" alt="" />
        <img className='w-[50px] animate-bounce' src="/img/loader/sun.png" alt="" />
      </div>

    </div>

  )
}
