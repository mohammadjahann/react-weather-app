import React, { useState, useEffect } from 'react'
import { waetherIcons } from '../../data'

export default function HumidityBox({ todayData }) {

  const [humidity, setHumidity] = useState(null)
  const [icon, setIcon] = useState(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (todayData) {
      const humidity = todayData.data[0].rh
      console.log(humidity);
      setHumidity(humidity)

      if (humidity < 50) {
        setIcon('good')
        setStatus('عالی')

      } else if (humidity < 70) {
        setIcon('mid')
        setStatus('زیاد')
      } else {
        setIcon('bad')
        setStatus('بسیار زیاد')
      }

      

    }


  }, [todayData])

  return (
    <div className=" w-[100px] h-[130px] flex flex-col items-center  esm:h-[170px] esm:justify-center  sm:w-[160px] md:w-[120px]
         lg:w-[200px] xl:w-[300px] p-4bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)]
        dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 
         hover:shadow-xl rounded-2xl shadow mt-3">
      {humidity ? (
        <div className=' w-full h-full p-2 flex flex-col items-center justify-between'>

          <div className=' flex items-center gap-2'>
            <p className='text-gray-600 font-semibold mb-2 text-[10px] sm:[12px] md:text-[15px] dark:text-slate-200'>: میزان رطوبت</p>
            <img className=' w-6 sm:w-7 lg:w-8 xl:w-9' src="./img/icons/26-humidity.png" alt="" />
          </div>

          <p className=' text-[20px] md:text-[30px]'>{humidity} <span className='text-[15px]'>%</span></p>

          <div className=' flex gap-2 flex-row-reverse items-center'>
            <img className=' w-7 sm:w-9 lg:w-12 xl:w-14' src={waetherIcons[icon]} alt="" />
            <p className='text-gray-600 mb-2 text-[8px] md:text-[12px] dark:text-slate-200'>. میزان رطوبت {status} میباشد </p>

          </div>


        </div>
      ) : (
        <p>data is Loading</p>
      )}



    </div>
  )
}
