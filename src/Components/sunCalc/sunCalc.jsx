import React, { useEffect, useState } from 'react'
import { formatTime } from '../../functions';

export default function SunCalc({ todayData }) {

    const [sunStatus,setSunStatus] = useState(null)

    useEffect(() => {
        if (todayData) {

            const sunrise = formatTime(todayData.data[0].sunrise_ts)
            const sunset = formatTime(todayData.data[0].sunset_ts)

            setSunStatus({sunrise,sunset})

        }

    }, [todayData])

    return (
        <div className=" w-[100px] h-[130px] flex flex-col items-center  esm:h-[170px] esm:justify-center  sm:w-[160px] md:w-[120px]
         lg:w-[200px] xl:w-[300px] p-4bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)]
        dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 
         hover:shadow-xl rounded-2xl shadow mt-3">
            {sunStatus ? (
                <div className='flex flex-col justify-between items-center h-full w-full'>
                    <p className='text-gray-600 mb-2 text-[10px] md:text-[15px] dark:text-slate-200'>وضعیت خورشید</p>
                    <div className='flex items-center gap-2 text-right'>
                        <p>{sunStatus.sunrise}</p>
                        <img className=' w-9 sm:w-11 lg:w-14' src="./img/icons/24-sun-rise.png" alt=""/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>{sunStatus.sunset}</p>
                        <img className=' w-9 sm:w-11 lg:w-14' src="./img/icons/25-sun-set.png" alt=""/>
                    </div>
                </div>
                
            ) : (
                <p>data is loading</p>
            )}

            

        </div>
    )
}
