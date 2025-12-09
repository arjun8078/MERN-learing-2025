import { useEffect, useState } from "react";

export function LiveClock(){
     const [time,setTime]=useState(new Date())
     
     useEffect(()=>{
        console.log("Clock Started");
        //Update time every 1 second
       const timerId= setInterval(() => {
            setTime(new Date())
        }, 1000);

        //Cleanup when component is unmounted
        return()=>{
            clearInterval(timerId)
        }
        

        
     },[])

     const hour=time.getHours().toString().padStart(2,'0')
     const minute=time.getMinutes().toString().padStart(2,'0')
     const seconds = time.getSeconds().toString().padStart(2, '0');

     const date = time.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});


     return(

        <>
           <div style={{
      padding: '40px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '12px',
      margin: '20px auto',
      maxWidth: '500px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    }}>
      <h2 style={{ marginBottom: '10px' }}>Live Clock</h2>
      <div style={{
        fontSize: '64px',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        marginBottom: '10px'
      }}>
        {hour}:{minute}:{seconds}
      </div>
      <div style={{ fontSize: '18px', opacity: 0.9 }}>
        {date}
      </div>
    </div>
        </>
     )
}