import React, { useState, useEffect } from 'react'
import { waetherIcons, countryTranslations, weatherTranslations } from '../../data';
import { dateHandler } from '../../functions';
import JDate from 'jalali-date';
import Loading from '../loading/Loading';

export default function Left({ darkModeHandler, todayData, SearchHandler }) {
    const [darkMode, setDarkMode] = useState(false)
    const [icon, setIcon] = useState(null)
    const [waether, setWaether] = useState(null)
    const [dateInfo, setDateInfo] = useState(null)
    const [temp, setTemp] = useState(null)
    const [cloudPercent, setCloudPercent] = useState(null)
    const [inputValue, setInputValue] = useState('')

    const darkModeBtn = () => {
        const newValue = !darkMode;
        setDarkMode(newValue);
        darkModeHandler(newValue);
    }

    useEffect(() => {
        if (todayData) {
            setIcon(todayData.data[0].weather.icon)
            setWaether(todayData.data[0].weather.description)
            setTemp(todayData.data[0].temp)
            const { dayName, day, month, year } = dateHandler(todayData.data[0].datetime)
            setDateInfo(`${dayName}، ${day} ${month} ${year}`)
            

        }
    }, [todayData]);

    const inputHandler = e => {

        setInputValue(e.target.value)



    }

    const searchBtnHandler = e => {
        SearchHandler(inputValue)
        setInputValue('')

    }

    const enterHandler= e => {
        if (e.keyCode === 13){
            searchBtnHandler(e)
            
        }
        
    }

    return (
        <div className='flex flex-col items-center p-4 w-full h-screen'>
            <div className='flex items-center flex-row-reverse justify-between p-1 md:p-4 w-full'>
                <button onClick={darkModeBtn} className="px-4 py-1 rounded-full text-white bg-blue-600 dark:bg-gray-700">
                    <img className='min-w-7 max-w-7' src={darkMode ? './img/dark-mode/sun.png' : './img/dark-mode/moon.png'} alt="" />
                </button>

                <div className="relative w-[80%] sm:w-[50%] lg:w-[75%]">
                    <input
                        onKeyUp={enterHandler}
                        onChange={inputHandler}
                        className="w-full px-4 py-1 pr-10 text-center dark:text-white rounded-3xl dark:bg-[rgba(87,81,81,0.35)] outline-none"
                        type="text"
                        value={inputValue}
                    />
                    <button
                        onClick={searchBtnHandler}
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
                    >
                        🔍
                    </button>

                </div>
            </div>

            {todayData ? (
                <div className='flex flex-col items-center justify-between h-full md:h-0'>
                    <p className='text-slate-800 dark:text-slate-200 font-bold text-2xl'>
                        {countryTranslations[todayData.country_code]} / {todayData.city_name}
                    </p>
                    <p className='text-slate-800 dark:text-slate-200'>{dateInfo}</p>
                    <p className='text-slate-800 dark:text-slate-200'>: وضعیت کلی اب و هوا</p>

                    <img className='w-[200px] mt-[1.5rem]' src={waetherIcons[icon]} alt="" />

                    <p className='text-slate-800 dark:text-slate-200 mt-[10px] font-semibold text-xl'>
                        {weatherTranslations[waether]}
                    </p>
                    <p className='text-slate-800 dark:text-slate-200 mt-5 md:mt-[45px] font-bold text-6xl'>{temp}&deg;<sup>C</sup></p>
                    <div className='flex flex-col items-center'>
                        <div className=' w-[130%] mt-2 md:hidden h-[1px] bg-slate-800 dark:bg-slate-200'></div>
                        <div className=' mt-2 md:hidden'>
                            <p className=' text-slate-800 dark:text-slate-200 text-center'>مختصات</p>
                            <p className=' text-slate-800 dark:text-slate-200'>Lat : {todayData.lat}</p>
                            <p className=' text-slate-800 dark:text-slate-200'>Lon : {todayData.lon}</p>
                            <p className=' text-slate-800 dark:text-slate-200'>TimeZone : {todayData.timezone}</p>
                        </div>
                    </div>

                </div>
            ) : (
                <div className=''>


                </div>
            )}
        </div>
    )
}
