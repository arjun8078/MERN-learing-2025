import { useState } from "react";

export function Counter(){

    const [count,setCount]=useState(0);
    const [step,setStep]=useState(1);

    const increment=()=>{
        setCount(count + step)
    }
       const decrement=()=>{
        setCount(count - step)
    }

       const reset=()=>{
        setCount(0)
        setStep(1)
    }

    const update=(e) => {
  const value = e.target.value;

  if (value === "") {
    setStep("");
    return;
  }

  const num = parseInt(value);
  if (!isNaN(num)) {
    setStep(num);
  }
};


    return(
        <>
        <div style={{padding: '20px', 
      textAlign: 'center',
      border: '2px solid #61dafb',
      borderRadius: '8px',
      margin: '20px auto',
      maxWidth: '400px'}}>

        <h2>Counter :  {count}</h2>
        <div style={{ marginBottom: '15px' }}>
            <h2>Steps</h2>
            <input type="text" value={step} onChange={update}/>

        </div>

        <button onClick={increment} style={buttonStyle} >+Add</button>
         <button onClick={decrement} style={{ ...buttonStyle, marginLeft: '10px' }}>+Sub</button>
          <button onClick={reset} style={{ ...buttonStyle, marginLeft: '10px', backgroundColor: '#f44336' }}>+Reset</button>

        </div>

        </>
    )
}

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#61dafb',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold'
};