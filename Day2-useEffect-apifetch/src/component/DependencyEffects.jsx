import { useState, useEffect } from 'react';

function DependencyEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  // Runs when 'count' changes (not when 'name' changes)
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    document.title = `Count: ${count}`; // Updates browser tab title!
  }, [count]); // Only re-run if count changes

  return (
    <div style={{ padding: '20px', border: '2px solid orange' }}>
      <h2>Dependency Effect Demo</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>

      <div>
        <p>Name: {name}</p>
        <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>
          Toggle Name
        </button>
      </div>

      <p style={{ fontSize: '14px', color: 'gray' }}>
        Check browser tab title - updates only when count changes!
      </p>
    </div>
  );
}

export default DependencyEffect;