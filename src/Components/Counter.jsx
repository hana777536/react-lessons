
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      
      {count === 10 && <p>Welcome to React!</p>}

      <div>
     

        <p onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'} 
        </p>
      </div>
    </>
  );
}

export default Counter;
