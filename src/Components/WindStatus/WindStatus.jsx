import React, { useState, useEffect } from 'react'
import { windDirections } from '../../data';

export default function WindStatus({ todayData }) {

    const [windStatus, setWindStatus] = useState(null)
    const [windDir, setWindDir] = useState(null)

    useEffect(() => {
        if (todayData) {

            setWindStatus(todayData.data[0].wind_spd)
            setWindDir(todayData.data[0].wind_cdir_full)

        }

    }, [todayData])

    return (
        <div className=" w-[100px] h-[130px] flex flex-col items-center  esm:h-[170px] esm:justify-center  sm:w-[160px] md:w-[120px]
         lg:w-[200px] xl:w-[300px] p-4bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)]
        dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 
         hover:shadow-xl rounded-2xl shadow mt-3">
            <div className=' w-full h-full p-2 flex flex-col items-center justify-between'>

                <div className=' flex items-center justify-center'>

                    <p className="text-gray-600 font-semibold mb-2 text-[10px] md:text-[15px] dark:text-slate-200">وضعیت باد  </p>
                    <img className=' w-6 sm:w-7 lg:w-8 xl:w-9' src="./img/icons/23-wind.png" alt="" />
                </div>

                
                    <p className="text-gray-600 mb-2 text-[10px] md:text-[15px] xl:text-2xl font-bold dark:text-slate-200">{windStatus} <span className=' font-normal text-[10px] esm:text-[12px]  sm:text-[14px]'>KMH</span>   </p>
                    <p className=' font-normal text-[10px] esm:text-[12px]  sm:text-[14px]'>{windDirections[windDir]}</p>
                

            </div>
        </div>
    )
}
