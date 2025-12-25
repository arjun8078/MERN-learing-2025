import { useEffect,useState,useRef } from "react";

export function PreviousValue(){

    const [count,setCount]=useState(0);
    const prevCount=useRef(0);

    useEffect(()=>{
        prevCount.current=count
    },[count]);


    return(
        <>
            <div style={{ 
      padding: '30px',
      border: '2px solid #FF9800',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
                <h2>useRef Example 3: Track Previous Value</h2>
                <div style={{ 
        fontSize: '20px', 
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#fff3e0',
        borderRadius: '8px'
      }}>
                    <p>Count is {count}</p>
                    <p>Previous Count is {prevCount.current}</p>
                    <button onClick={()=>setCount(count+1)}  style={{
          padding: '10px 20px',
          backgroundColor: '#FF9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginRight: '10px'
        }}>Increment</button>
        <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Decrement
      </button>
                </div>
            </div>
        </>
    )
}