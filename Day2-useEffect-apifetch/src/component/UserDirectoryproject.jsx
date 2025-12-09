import { useState, useEffect } from 'react';

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('🚀 Fetching users...');
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Fetched users:', data);
        
        setUsers(data);
        setFilteredUsers(data); // Initially show all users
        
      } catch (err) {
        console.error('❌ Fetch error:', err);
        setError(err.message);
        
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Run once on mount

  // Filter users when search term changes
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]); // Re-run when searchTerm or users change

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Loading state
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        fontSize: '24px'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ marginTop: '20px', color: '#666' }}>Loading users...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#ffebee',
        borderRadius: '12px',
        margin: '20px 0'
      }}>
        <h2 style={{ color: '#c62828' }}>❌ Error Loading Users</h2>
        <p style={{ color: '#666', fontSize: '18px' }}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#c62828',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  // Success state - show user directory
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '12px'
      }}>
        <h1 style={{ margin: '0 0 10px 0' }}>👥 User Directory</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>
          {filteredUsers.length} of {users.length} users
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="🔍 Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
      </div>

      {/* User Cards */}
      {filteredUsers.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#999',
          fontSize: '18px'
        }}>
          No users found matching "{searchTerm}"
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredUsers.map(user => (
            <div
              key={user.id}
              style={{
                padding: '20px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              {/* User Avatar */}
              <div style={{
                width: '60px',
                height: '60px',
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

              {/* User Info */}
              <h3 style={{ 
                margin: '0 0 10px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                {user.name}
              </h3>

              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                <p style={{ margin: '5px 0' }}>
                  📧 {user.email}
                </p>
                <p style={{ margin: '5px 0' }}>
                  📞 {user.phone}
                </p>
                <p style={{ margin: '5px 0' }}>
                  🏢 {user.company.name}
                </p>
                <p style={{ margin: '5px 0' }}>
                  🌐 {user.website}
                </p>
                <p style={{ margin: '5px 0' }}>
                  📍 {user.address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDirectory;