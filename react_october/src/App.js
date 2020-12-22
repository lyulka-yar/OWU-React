import React, {useState} from "react";
import './App.css'

export default function () {
    const arr = [1, -1, 100,-100];
 const [counter,setCounter] = useState(0);
 const editCounter = (value) => {
     const num = value + counter
     num >= 0
     ? setCounter(num)
     : setCounter(0)
 }
    return (
        <div>
            {counter}
            {
               arr.map(value => <button onClick={()=>editCounter(value)}>{value}</button>)
            }
        </div>
    )
}