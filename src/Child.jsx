
import React from 'react';

const Child = ({ name }) => {
    console.log('Child compnent render');
    // Note: React 19 optimise automatic using react compiler
    // if react compiler is not used in project then we need to wrap our child component with React.memo(component)
    return (
        <>
            {/* <p>This is child component : {name}</p> */}
        </>
    );
};
export default Child;
