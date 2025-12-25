import { useEffect,useRef } from "react"

export function FocusInput(){
    const inputRef=useRef(null)

    useEffect(()=>{
        inputRef.current.focus();
        console.log('Input is focused on mount',inputRef.current);
        
    },[])

    return(
        <>
            <div style={{ 
      padding: '30px',
      border: '2px solid #2196F3',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
                 <h2>useRef Example 1: Auto-Focus</h2>
                 <p style={{ color: '#666', marginBottom: '15px' }}>
                    The input below is automatically focused when the component loads
                </p>
                <input type="text" ref={inputRef} placeholder="I'm automatically focused!" style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #2196F3',
          borderRadius: '4px',
          outline: 'none'
        }}/>
         <button
        onClick={() => inputRef.current.focus()}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Re-focus Input
      </button>
            </div>
        </>
    )
}