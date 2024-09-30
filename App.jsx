import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import img1 from './Pictures/Clock.png'
import minute from './Pictures/Minute.png'
import hour from './Pictures/Hour.png'
import second from './Pictures/Second.png'

const App = () => {
  const [hourRotate, setHourRotate]=useState(-90)
  const [minuteRotate, setMinuteRotate]=useState(-90)
  const [secondsRotate, setSecondsRotate]=useState(-90)
  const hourRef=useRef()
  const minuteRef=useRef()
  const secondRef=useRef()

  useEffect(()=>{
    let date=new Date()
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()

    const animation=setTimeout(()=>{
      setHourRotate((-90)+(h*30)+(s*0.00833333333))
      setMinuteRotate((-90)+(m*6)+(s*0.1))
      setSecondsRotate((-90)+(s*6))
    }, 1000)

    hourRef.current.style="transform:rotate("+hourRotate+"deg)"
    minuteRef.current.style="transform:rotate("+minuteRotate+"deg"
    secondRef.current.style="transform:rotate("+secondsRotate+"deg"
  })

  return (
    <div className='w-full h-screen bg-cyan-900 flex justify-center items-center'>
      <div className='relative w-[500px] flex justify-center items-center h-[500px] rounded-full box-border'>
        <img src={img1} alt="Clock" className='w-[500px] h-[500px] absolute'/>
        <img src={hour} ref={hourRef} alt='Minute' className='absolute w-[120px] ml-[95px] mt-[4px] rotate-[-90deg] hour'></img>
        <img src={minute} ref={minuteRef} alt='Minute' className='absolute w-[180px] ml-[147px] mt-[7px] rotate-[-90deg] minute'></img>
        <img src={second} ref={secondRef} alt='Minute' className='absolute w-[220px] rotate-[-90deg] seconds'></img>
      </div>
    </div>
  )
}

export default App