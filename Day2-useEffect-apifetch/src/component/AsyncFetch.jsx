import { useState } from "react";

export function AsyncFetch(){

    const [data,setData]=useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData=async()=>{
        setLoading(true)
        setError(null)

        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users/1')
              // Check if request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

            const data1=await response.json()
            console.log(data1);
            setData(data1)

        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }

    }

    return(
        <>
            <div style={{ 
      padding: '20px', 
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <h2>Async/Await Fetch Example</h2>
 <button 
        onClick={fetchData}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '16px'
        }}
      >
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      {error && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px',
          backgroundColor: '#ffebee',
          color: '#c62828',
          borderRadius: '4px'
        }}>
          ❌ Error: {error}
        </div>
      )}

      {data && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px',
          backgroundColor: '#e8f5e9',
          borderRadius: '4px'
        }}>
          <h3>✅ User Loaded:</h3>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Company:</strong> {data.company.name}</p>
          <p><strong>City:</strong> {data.address.city}</p>
        </div>
      )}
            </div>
        </>
    )
}