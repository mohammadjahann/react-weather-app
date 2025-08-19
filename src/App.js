import { useState } from "react";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`
      ${darkMode ? "dark" : ""}
      h-screen w-full flex justify-center items-center
    `}>

      {/* backgroud for both modes using Tailwind's dark: utility */}
      <div className="
        h-full w-full flex justify-center items-center
        bg-[linear-gradient(106.37deg,_#9fd3fb_0%,_#6ea8e5_50%,_#7b8bd6_100%)]
        dark:bg-[linear-gradient(106.37deg,_#1b2735_0%,_#41506b_60%,_#64748b_100%)]
      ">

        <div className="
          grid h-[95%] w-[95%] rounded-lg bg-[rgba(255,255,255,0.35)]
          backdrop-blur-lg overflow-hidden
          dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)]
        ">

          {/* left */}
          <div className="
              w-[25%] h-screen border-r border-[rgba(255,255,255,0.3)]
              bg-[rgba(255,255,255,0.25)] backdrop-blur-lg
              dark:bg-[rgba(0,0,0,0.25)] dark:border-[rgba(255,255,255,0.2)]
            ">
          </div>

          {/* right */}
          <div>
          </div>

        </div>

       
      </div>

    </div>
  );
}

export default App;
