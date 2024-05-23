import React, { useState, useEffect } from 'react';
const ClickCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Click ${count} lần`;
    }, [count]);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button onClick={handleClick}>
                Click {count} lần
            </button>
        </div>
    );
};

export default ClickCounter;
