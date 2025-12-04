export function UseCard({user}){
    const handleClick=()=>{
        alert(`${user.name} clicked`)
    }

    return(
        <>
<div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        <h3>{user.name}</h3>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Email:</strong> {user.email}</p>
       <button 
        onClick={handleClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#61dafb',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Say Hello
      </button>
    </div>
        </>
    )
}