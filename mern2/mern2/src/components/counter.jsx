import React from "react";

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick(){
        setCount(count+1)
    }

    return(
        <div>
            <hr />
            <h3>{count}</h3>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default Counter