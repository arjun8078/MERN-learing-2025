import { useEffect, useState } from "react";

export function BasicEffects(){

    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("Component rendered");
        console.log(`Count is ${count}`);
    })

    return(
        <>
        <div style={{ padding: '20px', border: '2px solid blue' }}>
            <h2>Basic useEffect Demo</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p style={{ color: 'gray', fontSize: '14px' }}>
                Open browser console (F12) to see useEffect logs
             </p>
        </div>
        </>
    )
}