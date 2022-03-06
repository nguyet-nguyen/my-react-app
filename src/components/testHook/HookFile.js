import React, {useState,useEffect} from 'react'


export default function HookFile() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hook React</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}