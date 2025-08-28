import React ,{useState,useEffect} from 'react'
import DayBox from '../DayBox/DayBox'


export default function Right({todayData}) {

    const [weekData,setWeekData] = useState(null)
    

    useEffect(()=>{
        if(todayData){
            let week = todayData.data
            let withoutFirst = week.slice(1)
            setWeekData(withoutFirst)
            
            setTimeout(()=>{
                
                console.log( weekData);
                console.log(todayData);
                
                
            },2000)
        }
        
        
        
    },[todayData])
  return (
    <div className='flex flex-row-reverse items-center justify-center flex-wrap h-[200px] overflow-hidden'>
        {weekData ? weekData.map((dayData , index)=>{
            return <DayBox key={index} dayData={dayData} />
        }) : <div>data is loading</div>}
    </div>
  )
}
