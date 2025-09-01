import React, { useState, useEffect } from 'react'
import { waetherIcons } from '../../data'

export default function VisibilityBox({ todayData }) {

    const [visibility, setVisibility] = useState(null)
    const [icon, setIcon] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (todayData) {
            
            const getVisibility = todayData.data[0].vis
            setVisibility(getVisibility)

            if(getVisibility > 10){
                setIcon('good-vis')
                setStatus('عالی')
                
            } else if(getVisibility > 6){
                setIcon('mid-vis')
                setStatus('زیاد')
            } else if(getVisibility > 3){
                setIcon('bad-vis')
                setStatus('کم')
            } else{
                setIcon('hard-vis')
                setStatus('بسیار کم')
            }


        }
    }, [todayData])

    return (
        <div className=" w-[100px] h-[130px] flex flex-col items-center  esm:h-[170px] esm:justify-center  sm:w-[160px] md:w-[120px]
         lg:w-[200px] xl:w-[300px] p-4bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)]
        dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 
         hover:shadow-xl rounded-2xl shadow mt-3">
            {visibility ? (
                <div className=' w-full h-full p-2 flex flex-col items-center justify-between'>

                    <div className=' flex items-center gap-2'>
                        <p className='text-gray-600 font-semibold mb-2 text-[10px] sm:[12px] md:text-[15px] dark:text-slate-200'>: میزان دید موثر</p>
                        <img className=' w-6 sm:w-7 lg:w-8 xl:w-9' src="./img/icons/30-vis.png" alt="" />
                    </div>

                    <p className=' text-[20px] md:text-[30px]'>{visibility} <span className='text-[15px]'>km</span></p>

                    <div className=' flex gap-2 flex-row-reverse items-center'>
                        <img className=' w-7 sm:w-9 lg:w-12 xl:w-14' src={waetherIcons[icon]} alt="" />
                        <p className='text-gray-600 mb-2 text-[8px] md:text-[12px] dark:text-slate-200'>. میزان دید {status} میباشد </p>

                    </div>


                </div>
            ) : (
                <p>data is Loading</p>
            )}



        </div>
    )
}
