import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const incr = ()=>{
        // updater functions 
        // count is var and setCount is func 
        // u giev setCount the most recent avlue cz we dont know it 
        // setCount(prevCount=> prevCount+ 1);
        // setCount(prevCount=> prevCount+ 1);
        // setCount(prevCount=>  prevCount + 1);
        setCount(count + 1)
    }
    const decr = () =>{
        setCount(count - 1);
    }
    const reset =()=>{
        setCount(0);
    }

    return(
        <><div className="counter-container">
            <p className="count-display"> Count: {count}</p>
            <button className="counter-button" onClick={decr}>decrement counter</button>
            <button className="counter-button" onClick={reset}>reset counter</button>
            <button className="counter-button" onClick={incr}>incremnt counter</button>
            </div></>
    );
}
export default Counter