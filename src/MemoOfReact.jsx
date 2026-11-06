import { useState } from 'react'
import Child from "./Child"

const MemoOfReact = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p>Exmaple of React.memo </p>
                <p>Count:{count}</p>
                <button onClick={() => setCount(count + 1)}>Increament</button>
                <Child name={'Hemant'} />
            </div>
        </>
    );
}

export default MemoOfReact;