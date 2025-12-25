import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function Userwithouthook(){

    const {data: users,loading,error}=useFetch('https://jsonplaceholder.typicode.com/users')

    if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }}></div>
        <p style={{ marginTop: '20px' }}>Loading users...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
        <h2>❌ Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>👥 Users (with Custom Hook!)</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        This page uses the <code>useFetch</code> custom hook 🎣
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {users && users.map(user => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#4CAF50',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              {user.name.charAt(0)}
            </div>
            <h3 style={{ margin: '0 0 5px 0' }}>{user.name}</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}