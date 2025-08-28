import React, { useState, useEffect } from 'react'
import { dateHandler } from '../../functions';
import { waetherIcons, weatherTranslations } from '../../data';

export default function DayBox({ dayData }) {
    const [dateInfo, setDateInfo] = useState(null)
    const [icon, setIcon] = useState(null)
    const [waether, setWaether] = useState(null)

    useEffect(() => {
        const { dayName, day, month, year } = dateHandler(dayData.datetime)
        setDateInfo(`${dayName}، ${day} ${month} `)
        setIcon(dayData.weather.icon)
        setWaether(dayData.weather.description)

       
    }, [dayData])

    return (
        <div className="
      flex flex-col items-center justify-between
       h-48 m-2 p-3 rounded-2xl shadow-md
      bg-[rgba(255,255,255,0.25)] backdrop-blur-md
      border border-[rgba(255,255,255,0.3)]
      dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)]
      transition-all duration-300 hover:scale-105 hover:shadow-xl w-[70px] sm:w-[140px] md:w-[120px]
    ">
            <p className=" text-[10px] font-semibold text-gray-800 dark:text-gray-200 text-center">
                {dateInfo}
            </p>
            <img src={waetherIcons[icon]} alt="" className="w-14 h-14 mb-2" />
            <p className="text-[10px] text-gray-700 dark:text-gray-300 text-center">
                {weatherTranslations[waether]}
            </p>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {Math.round(dayData.temp)}°C
            </p>
        </div>
    )
}
