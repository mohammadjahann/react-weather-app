import React, { useState, useEffect } from 'react'
import DayBox from '../DayBox/DayBox'
import UvIndex from '../UvIndex/UvIndex'
import WindStatus from '../WindStatus/WindStatus'
import SunCalc from '../sunCalc/sunCalc'
import HumidityBox from '../HumidityBox/HumidityBox'
import VisibilityBox from '../VisibilityBox/VisibilityBox'
import AirQuality from '../AirQuality/AirQuality'

export default function Right({ todayData }) {
    const [weekData, setWeekData] = useState(null)

    useEffect(() => {
        if (todayData) {
            let week = todayData.data
            let withoutFirst = week.slice(1)
            setWeekData(withoutFirst)
        }
    }, [todayData])

    return (
        <div className='flex flex-col h-full'>
            {weekData ? (
                <div className='text-right text-slate-800 dark:text-slate-300 flex flex-col flex-grow'>
                    <p className='m-2'>: وضعیت آب و هوای هفته پیش رو</p>
                    <div className=' h-[320px] overflow-hidden flex flex-row-reverse items-center justify-center flex-wrap'>
                        {weekData.map((dayData, index) => {
                            return <DayBox key={index} dayData={dayData} />
                        })}
                    </div>
                    {/* daily report */}
                    <p className='m-2 mt-4'>: شاخص ها</p>
                    <div className='px-4 pb-2 w-full flex flex-wrap items-center justify-around'>
                        <UvIndex todayData={todayData} />
                        <WindStatus todayData={todayData} />
                        <SunCalc todayData={todayData} />
                        <HumidityBox todayData={todayData} />
                        <VisibilityBox todayData={todayData} />
                        <AirQuality todayData={todayData} />
                    </div>
                </div>
            ) : <div>data is loading</div>}
        </div>
    )
}