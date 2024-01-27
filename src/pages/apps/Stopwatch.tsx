import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

const FormatTime = (timeInSeconds:number)=>{
    const Hours = Math.floor(timeInSeconds/3600);
    const Minutes = Math.floor((timeInSeconds % 3600) / 60); 
    // const Seconds = Math.floor((timeInSeconds % 60) / 60);
    const Seconds = timeInSeconds % 60;

    const HoursInString = Hours.toString().padStart(2,"0");
    const MinutesInString = Minutes.toString().padStart(2,"0");
    const SecondsInString = Seconds.toString().padStart(2,"0");
    //padstart nhi dete toh [0:0:0] aaise dhikhta timer

    return `${HoursInString} : ${MinutesInString} : ${SecondsInString}`
}

const Stopwatch = () => {

    const [time, setTime] = useState<number>(0);
    const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);

    useEffect(()=>{

        let intervalID : number ; 

        if(isTimeRunning){
            intervalID = setInterval(()=>{
                setTime((prev)=> prev+1);
            },1000)
        }

        return ()=>{
            clearInterval(intervalID);
        };
    },[isTimeRunning])

  return (
   <>
    <div className="adminContainer">
        {/* sidebar  */} 
        <AdminSidebar />

        {/* main  */}
        <main className="dashboard-app-container">
            <h2>Stopwatch</h2>
            <section>
                <div className="stopwatch">
                    <h2>{FormatTime(time)}</h2>
                    <button onClick={()=>setIsTimeRunning((prev)=>!prev)}>{isTimeRunning? "Stop" : "Start"}</button>
                    <button onClick={()=>{setTime(0),setIsTimeRunning(false)}}>Reset</button>
                </div>
            </section>
 
        </main>
      </div>
    
   </>
  )
}

export default Stopwatch
