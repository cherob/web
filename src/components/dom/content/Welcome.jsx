
import { useState, useEffect } from 'react';
import useMqtt from '@/hooks/useMqtt';

export default function Welcome() {
  const [count, setCount] = useState(0);
  const [is42, setIs42] = useState(false);
  const { message, publish } = useMqtt('increment');

  useEffect(() => {
    const newCount = parseInt(message, 10);
    if (!isNaN(newCount)) {
      setCount(newCount);
      if (newCount === 42) {
        setIs42(true);
      }
    }
  }, [message]);

  const handlePress = () => {
    publish('increment', (count + 1).toString());
  };

  return (
    <div className='container'>
      <h1>Welcome to the Welcome Page</h1>
      <h2>Count: {count}</h2>
      {is42 ? (
        <a href='/home'>Home</a>
      ) : (
        <button onClick={handlePress}>Increment</button>
      )}
    </div>
  );
}
