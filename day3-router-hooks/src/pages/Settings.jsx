import { useLocalStorage } from "../hooks/useLocalStorage";


export function Settings(){

    const [theme,setTheme]=useLocalStorage('theme','light');
    const [fontSize, setFontSize] = useLocalStorage('fontSize', '16');
  const [username, setUsername] = useLocalStorage('username', '');

  const isDark = theme === 'dark';

  return(
    <>
        <div style={{
      padding: '40px',
      backgroundColor: isDark ? '#1e1e1e' : 'white',
      color: isDark ? 'white' : 'black',
      minHeight: '80vh',
      borderRadius: '12px'
    }}>
      <h1>⚙️ Settings</h1>
      <p style={{ color: isDark ? '#ccc' : '#666', marginBottom: '30px' }}>
        Your settings are automatically saved to localStorage! Try refreshing the page.
      </p>

      {/* Theme Setting */}
      <div style={{
        padding: '20px',
        backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>🎨 Theme</h3>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button
            onClick={() => setTheme('light')}
            style={{
              padding: '10px 20px',
              backgroundColor: theme === 'light' ? '#2196F3' : '#e0e0e0',
              color: theme === 'light' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ☀️ Light
          </button>
          
          <button
            onClick={() => setTheme('dark')}
            style={{
              padding: '10px 20px',
              backgroundColor: theme === 'dark' ? '#2196F3' : '#e0e0e0',
              color: theme === 'dark' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            🌙 Dark
          </button>
        </div>
      </div>

      {/* Font Size Setting */}
      <div style={{
        padding: '20px',
        backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>📏 Font Size: {fontSize}px</h3>
        <input
          type="range"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          style={{ width: '100%', marginTop: '10px' }}
        />
        <p style={{ fontSize: `${fontSize}px`, marginTop: '10px' }}>
          This is preview text at {fontSize}px
        </p>
      </div>

      {/* Username Setting */}
      <div style={{
        padding: '20px',
        backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>👤 Username</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginTop: '10px',
            backgroundColor: isDark ? '#1e1e1e' : 'white',
            color: isDark ? 'white' : 'black'
          }}
        />
        {username && (
          <p style={{ marginTop: '10px', fontSize: '18px' }}>
            Hello, <strong>{username}</strong>! 👋
          </p>
        )}
      </div>

      {/* Clear All Button */}
      <button
        onClick={() => {
          setTheme('light');
          setFontSize('16');
          setUsername('');
        }}
        style={{
          padding: '12px 24px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '20px'
        }}
      >
        🗑️ Reset All Settings
      </button>

      {/* Info Box */}
      <div style={{
        marginTop: '40px',
        padding: '15px',
        backgroundColor: isDark ? '#0d47a1' : '#e3f2fd',
        borderRadius: '8px',
        borderLeft: '4px solid #2196F3'
      }}>
        <p style={{ margin: 0 }}>
          💡 <strong>Try this:</strong> Change settings, then refresh the page. Your settings persist!
        </p>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
          Open DevTools → Application → Local Storage → localhost to see stored data
        </p>
      </div>
    </div>
    </>
  )


}