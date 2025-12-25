import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export function User(){

     const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading users...</div>;
  if (error) return <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>Error: {error}</div>;
    return(
        <>
           <div style={{ padding: '40px' }}>
      <h1>👥 Users</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Click on a user to see their full profile
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {users.map(user => (
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
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
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
              backgroundColor: '#667eea',
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
        </>
    )
}