import React from "react";

function Counter(props) {
    const [count, setCount] = React.useState(0);

    function handleClick(){
        setCount(count+props.increment)
    }

    return(
        <div>
            <hr />
            <h3>{count}</h3>
            <button onClick={handleClick}>+{props.increment}</button>
        </div>
    )
}

export default Counter