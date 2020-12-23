import React, {useState} from "react";
import './App.css'

export default function App () {
    const arr = [1, -1, 100,-100];
 const [counter,setCounter] = useState('');
 const editCounter = (value) => {
     const num = value + counter
     num >= 0
     ? setCounter(num)
     : setCounter(0)
 }
    const resetCounter = () => {
        setCounter(0)
    }


    return (
        <div className='wrapper'>
            <span className='output'> {counter}</span>
            <div className='input-wrap'><input onInput={(e)=>setCounter(parseInt(e.currentTarget.value))} type="text"/>
            </div>
            <div className='btn'> {
                arr.map(value => <button onClick={() => editCounter(value)}>{value}</button>)
            } </div>
            <button className='reset' onClick={() => resetCounter()}>reset</button>
        </div>
    )
}