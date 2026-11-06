import React, { useCallback, useState } from 'react'
import Child from './Child';

const CallbackHook = () => {
 const [count, setCount] = useState(0);

 const funCall = useCallback(()=>{

 },[])

    return (
        <>
            <div>
                <p>Exmaple of React.memo </p>
                <p>Count:{count}</p>
                <button onClick={() => setCount(count + 1)}>Increament</button>
                <Child name={funCall} />
            </div>
        </>
    );
}

export default CallbackHook