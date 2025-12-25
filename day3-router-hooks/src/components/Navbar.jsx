import { NavLink } from "react-router-dom"

export function Navbar(){

    const linkStyle=({isActive})=>({
         color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'all 0.3s'

    })
    return (
        <>
            <nav style={{
      padding: '20px',
      backgroundColor: '#2196F3',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
                <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }}>
                    <h2 style={{ margin: 0, fontSize: '24px' }}>Day 3</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <NavLink to='/' style={linkStyle}>Home</NavLink>
                        <NavLink to='/about' style={linkStyle}>About</NavLink>
                        <NavLink to='/users' style={linkStyle}>Users</NavLink>
                        <NavLink to='/users-hook' style={linkStyle}>Users (Hooks)</NavLink>
                        <NavLink to='/settings' style={linkStyle}>Settings</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}