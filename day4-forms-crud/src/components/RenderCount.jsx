import {  useRef, useState } from "react";

export function RenderCount(){

    const [count,setCount]=useState(0);

    const renderCount=useRef(0);

    renderCount.current=renderCount.current+1;

    return(
        <>
        <div style={{ 
      padding: '30px',
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
            <h2>useRef Example 2: Render Counter</h2>
      <p style={{ color: '#666' }}>
        useRef stores values without causing re-renders
      </p>
      <div style={{ 
        fontSize: '24px', 
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
            <p><strong>Count:</strong> {count}</p>
            <p><strong>Render Count:</strong> {renderCount.current}</p>
      </div>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Increment Count
      </button>

      <p style={{ 
        marginTop: '15px', 
        fontSize: '14px', 
        color: '#666',
        backgroundColor: '#e8f5e9',
        padding: '10px',
        borderRadius: '4px'
      }}>
        💡 Notice: renderCount updates without causing extra renders!
      </p>
        </div>

        </>
    )
    }