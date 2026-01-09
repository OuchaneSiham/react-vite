import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const incr = ()=>{
        setCount(count + 1);
    }
    const decr = () =>{
        setCount(count - 1);
    }
    const reset =()=>{
        setCount(0);
    }

    return(
        <><div className="counter-container">
            <p className="count-display"> {count}</p>
            <button className="counter-button" onClick={decr}>decrement counter</button>
            <button className="counter-button" onClick={reset}>reset counter</button>
            <button className="counter-button" onClick={incr}>incremnt counter</button>
            </div></>
    );
}
export default Counter