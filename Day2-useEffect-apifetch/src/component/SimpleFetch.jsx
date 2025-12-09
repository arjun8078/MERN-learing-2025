import { useState } from "react";

export function SimpleFetch(){

    const [data1,setData]=useState(null)

    const fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1').then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
            
        })
        .catch(error=>console.log(error)
        )
    }

    return(
        <>
        <div style={{ 
      padding: '20px', 
      border: '2px solid #2196F3',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
        <h2>Simple Fetch Example</h2>
            <button onClick={fetchData} style={{
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>Fetch User Data</button>

           {data1 && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
        }}>
          <h3>User Info:</h3>
          <p><strong>Name:</strong> {data1.name}</p>
          <p><strong>Email:</strong> {data1.email}</p>
          <p><strong>Phone:</strong> {data1.phone}</p>
          <p><strong>Website:</strong> {data1.website}</p>
        </div>
      )}
        </div>
        
        </>
    )
}