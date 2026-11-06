import { useState, useMemo } from 'react';

function heavyCalculation(num) {
    console.log('expensive calculation on going...');
    for (var i = 0; i < 1000000000; i++) { }
    return num * 2;
}

const MemoHookQuestion = () => {
    const [count, setCount] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const result = useMemo(() => {
        return heavyCalculation(count);
    }, [count]);

    return (
        <div
            style={{
                backgroundColor: darkTheme ? 'gray' : 'white',
                color: darkTheme ? 'white' : 'black',
            }}
        >
            <p>With use memo and without use memo exampple</p>
            <p>Count:{count}</p>
            <p>Result:{result}</p>
            <button onClick={handleClick}>Increament</button>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default MemoHookQuestion;
