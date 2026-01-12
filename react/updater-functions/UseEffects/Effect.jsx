import { useState, useEffect } from "react";
function Effect()
{
    const [count, setCounter] = useState(0);
    // useEffect(function, [array of dependencises])
    // useEffect(()=>{
    //     document.title = `Count is ${count}`
    // }, [])
    const [color, setC] = useState("green")
    useEffect(()=>{
        document.title = `Count is ${count} ${color}`
        // return ()=>{
        //     // clean recourcses 

        // }
    }, [count, color])
    const AddCount = () =>{
        setCounter(count => count + 1);
        // setCounter(count => count + 1);
        // setCounter(count => count + 1);
    }
    const SubtCount = () =>{
        setCounter(count => count - 1);
    }
    const changecolor = () =>{
        // setCounter(count => count - 1);
        setC(c => c ==="green" ? "red" : "green")
    }
    return(<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={AddCount}>ADD</button>
    <button onClick={SubtCount}>Subt</button> <br />
    <button onClick={changecolor}>change color</button>
    </>);
}
export default Effect