import { useEffect, useState } from "react"

interface TimerProps {
    time: number,
    taskAfter: () => void
}

export default function Timer({time, taskAfter}: TimerProps) {
    const [minutes, setMinutes] = useState(Math.floor(time/60));
    const [seconds, setSeconds] = useState(time - Math.floor(time/60)*60);
    useEffect(() => {
        const interval = setInterval(() => {
            if(seconds === 0 && minutes === 0) {
                clearInterval(interval);
                taskAfter();
            }
            else if(seconds === 0){
                setMinutes(prevState => prevState - 1);
                setSeconds(59);
            }
            else {
                setSeconds(prevState => prevState - 1);
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    })
    return (
        <span>{minutes}:{String(seconds).length === 1 ? "0" + seconds : seconds}</span>
    )
}