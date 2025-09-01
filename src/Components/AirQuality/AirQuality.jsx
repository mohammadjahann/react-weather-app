import React, { useState, useEffect } from 'react'

export default function AirQuality({ todayData }) {

    const [airQuality, setAirQuality] = useState(null)
    const [status, setStatus] = useState(null)
    

    const apiKey = 'aaf1faa8cdc04aa8babed5b25601ded5'

    
    function toPercent(value) {
       
        if (value < 1) return 0;
        if (value > 300) return 100;

        return (value / 300) * 100;
    }




    useEffect(() => {
        if (todayData) {

            const cityName = todayData.city_name
            const aqi = null
            fetch(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${apiKey}&lang=fa&units=M`)
                .then(res => res.json())
                .then(data => {
                    setAirQuality(data.data[0].aqi)
                    return data.data[0].aqi
                })
                .then((val) => {
                    if (val <= 50) {
                        setStatus({ label: "عالی ✅", color: "bg-green-500" })
                    } else if (val <= 100) {
                        setStatus({ label: "متوسط 😐", color: "bg-yellow-400" })
                    } else if (val <= 150) {
                        setStatus({ label: "نا سالم 😷", color: "bg-orange-500" })
                    } else if (val <= 200) {
                        setStatus({ label: " به شدت ناسالم ☠️", color: "bg-red-500" })
                    } else {
                        setStatus({ label: "خطرناک ☢️", color: "bg-purple-700" })
                    }
                    return val

                })
               

        }
    }, [todayData])

    return (
        <div className=" w-[100px] h-[130px] flex flex-col items-center  esm:h-[170px] esm:justify-center  sm:w-[160px] md:w-[120px]
         lg:w-[200px] xl:w-[300px] p-4bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)]
        dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 
         hover:shadow-xl rounded-2xl shadow mt-3">
            {airQuality ? (
                <div className=' flex flex-col items-center'>
                    <p className='text-gray-600 font-semibold mb-2 text-[10px] sm:[12px] md:text-[15px] dark:text-slate-200'>: کیفیت هوا</p>
                    <p className=' text-[8px] md:text-[12px]'> شاخص الایندگی {airQuality} میباشد</p>
                    <div className=' relative w-5 h-20 border-black border-[1px] rounded-2xl'>
                        <div className={`w-4 h-4 rounded-full border-none border-[1px] ${status.color} absolute left-1/2 -translate-x-1/2 transition-all duration-500`}
                        style={{ bottom: `${toPercent(airQuality)}%` }}></div>
                    </div>
                    <p>{status.label}</p>
                </div>
            ) : (
                <div className='loader'></div>
            )}
        </div>
    )
}
