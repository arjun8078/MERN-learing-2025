import { useEffect, useState } from "react";

export function Autofetch(){

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    const fetchuser=async ()=>{
            try {
                  const response=await fetch('https://jsonplaceholder.typicode.com/users')

            if(!response.ok){
                 throw new Error('Network response was not ok');
            }

            const data=await response.json()
            setData(data)
                
            } catch (error) {
                setError(error.message)
                
            }
            finally{
                setLoading(false)
            }
          
        }

    useEffect(()=>{
        
        fetchuser();
    },[])

    if(loading){
         return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        fontSize: '20px'
      }}>
        ⏳ Loading users...
      </div>
    );
    }

    if(error){
        return(
             <div style={{ 
        padding: '20px',
        backgroundColor: '#ffebee',
        color: '#c62828',
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        ❌ Error: {error}
      </div>
        )
    }

    return(
        <>
            <div style={{ 
      padding: '20px', 
      border: '2px solid #FF9800',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
         <h2>Auto-Fetch on Mount</h2>
         <p style={{ color: '#666' }}>Fetched {data.length} user automatically</p>
         <div>
             {data.map(user=>(
            <div
            key={user.id}
            style={{
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#fff3e0',
              borderRadius: '4px',
              borderLeft: '4px solid #FF9800'
            }}>
                 <h3 style={{ margin: '0 0 5px 0' }}>{user.name}</h3>
            <p style={{ margin: '5px 0', color: '#666' }}>{user.email}</p>
            </div>
        ))}

         </div>
       
            </div>
        </>
    )


}