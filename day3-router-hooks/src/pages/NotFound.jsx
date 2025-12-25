import { Link } from "react-router-dom";

export function NotFound(){
    return(
        <>
           <div style={{ 
      padding: '60px', 
      textAlign: 'center',
      backgroundColor: '#ffebee'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#2196F3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      >
        Go Home
      </Link>
    </div>
        </>
    )
}