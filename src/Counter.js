import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    

    return <div>
        {count}
        <br></br>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}>sub</button>
    </div>
}

export default Counter;