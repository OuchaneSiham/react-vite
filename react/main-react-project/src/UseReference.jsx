// use state triggers renders use ref doesnt we sue it when we wanna rememebr some infos 
import { useState, useRef, useEffect } from "react";
function Com()
{
    // const [num, setNum] = useState(0); instead of use state we use ref for not render each time w change teh state
    // const ref = useRef(0);
    const inputRef = useRef(null);
    useEffect(()=>{
        console.log("comp rendered");
        // console.log(inputRef)
    })
    const handleclick = () => {
        // setNum(num => num + 1);
        // ref.current = ref.current + 1;
        // console.log(ref.current);
        // every time u click teh button the com wont render it will render ocne 

        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
    }
    return(
        <>
        <button onClick={handleclick}>
            click me 
        </button>
        <input ref={inputRef}></input>
        </>
    );
    
}
export default Com