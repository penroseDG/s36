import React, { useState, useEffect, useRef } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(count);

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
export default Counter;