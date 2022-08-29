import React,{useState,useEffect} from 'react'

function HooksEffect() {

    const [counter,setCounter] = useState(0);
    // const [text,setText] = useState('');
    useEffect(()=>{
        console.log('running useEffect Hook');
    },[])
  return (
    <div>
        {/* <input type="text" onChange={e=>{setText(e.target.value)}} /> */}
        <button onClick={e=>{setCounter(counter+1)}}>Increment</button>
        <h1 style={{color:'red'}}>{counter}</h1>
    </div>
  )
}

export default HooksEffect