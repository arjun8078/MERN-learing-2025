import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function UserDetails(){

    const {id}=useParams();
    const navigate=useNavigate()

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

   

    useEffect(()=>{
         const fetchUser=async ()=>{
        try {
            const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

             
        if (!response.ok) {
          throw new Error('User not found');
        }
            const data=await response.json()
            setUser(data)
            
        } catch (error) {
             setError(error.message); 
        }
        finally{
            setLoading(false)
        }

    }
        fetchUser();
    },[id])

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
        <p style={{ marginTop: '20px' }}>Loading user...</p>
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
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#c62828' }}>❌ {error}</h2>
        <button
          onClick={() => navigate('/users')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Back to Users
        </button>
      </div>
    );
  }

    return(
        <>
         <div style={{ padding: '40px' }}>
      {/* Back Button */}
      <Link
        to="/users"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          padding: '8px 16px',
          backgroundColor: '#e0e0e0',
          color: '#333',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        ← Back to Users
      </Link>

      {/* User Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px'
      }}>
        {/* Avatar */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#667eea',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          {user.name.charAt(0)}
        </div>

        {/* User Info */}
        <h1 style={{ margin: '0 0 10px 0', color: '#333' }}>
          {user.name}
        </h1>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '16px' }}>
          @{user.username}
        </p>

        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />

        {/* Contact Info */}
        <div style={{ fontSize: '16px', lineHeight: '2' }}>
          <p><strong>📧 Email:</strong> {user.email}</p>
          <p><strong>📞 Phone:</strong> {user.phone}</p>
          <p><strong>🌐 Website:</strong> {user.website}</p>
        </div>

        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />

        {/* Company Info */}
        <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>🏢 Company</h3>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        <p style={{ fontSize: '14px', color: '#666' }}>{user.company.bs}</p>

        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />

        {/* Address */}
        <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>📍 Address</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
        </p>
      </div>
    </div>
        </>
    )

}