import { useEffect, useState } from "react";
import Loading from "./Components/loading/Loading";
import Right from "./Components/Right/Right";
import Left from "./Components/Left/Left";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cityName, setCityName] = useState('new mexico');
  const [todayData, setTodayData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const APIKey = 'aaf1faa8cdc04aa8babed5b25601ded5';

  useEffect(() => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=8&key=${APIKey}&lang=fa&units=M`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setTodayData(data);
        }, 2000);
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch(err => console.log(err));
  }, [cityName]);

  const darkModeHandler = data => {
    setDarkMode(data);
  };

  const SearchHandler = (name) => {
    setCityName(name);
    setIsLoading(true);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} w-full min-h-screen flex justify-center items-center`}>
      {/* backgroud for both modes using Tailwind's dark: utility */}
      <div className="
        w-full min-h-screen flex justify-center items-center
        bg-[linear-gradient(106.37deg,_#9fd3fb_0%,_#6ea8e5_50%,_#7b8bd6_100%)]
        dark:bg-[linear-gradient(106.37deg,_#1b2735_0%,_#41506b_60%,_#64748b_100%)]
      ">
        <div className="
          flex flex-col md:flex-row flex-grow-0
          w-[95%] rounded-lg bg-[rgba(255,255,255,0.35)] backdrop-blur-lg
          dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)]
          my-4 md:my-0
        ">
          {/* left / Top */}
          <div className="
            flex-none w-full md:w-[35%] lg:w-[30%] border-r border-[rgba(255,255,255,0.3)]
            bg-[rgba(255,255,255,0.25)] backdrop-blur-lg
            dark:bg-[rgba(0,0,0,0.25)] dark:border-[rgba(255,255,255,0.2)]
          ">
            <Left darkModeHandler={darkModeHandler} todayData={todayData} SearchHandler={SearchHandler} />
          </div>

          {/* right */}
          <div className='flex-1 w-full md:w-[65%] lg:w-[70%]'>
            <Right todayData={todayData} />
          </div>
        </div>
      </div>

      {/* loading modal - now outside the main weather card, covering the whole screen */}
      {isLoading ? <Loading /> : <></>}
    </div>
  );
}

export default App;