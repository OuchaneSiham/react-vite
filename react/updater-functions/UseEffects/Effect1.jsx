import { useState, useEffect } from "react";
function Effect()
{
    const [width, setW] = useState(window.innerWidth);
    const [height, setH] = useState(window.innerHeight);
    const resizeWindow =() =>{
        setW(window.innerWidth);
        setH(window.innerHeight);
    }
    // window.addEventListener("resize", resizeWindow);
    // console.log("event listener added");
    // the window will resize but the sentence will be in aloop will get printed each time a reisze 
    // so we will put it isne a useEffect?
    useEffect(()=>{
        window.addEventListener("resize", resizeWindow);
        console.log("event listener added");
        return(()=>{
            window.removeEventListener("resize", resizeWindow);
            console.log("event listener removed");
        })
    }, [])
    useEffect(()=>{
        document.title = `size: ${width} x ${height}`;
    }, [width, height]);
    return(<>
    <p>window width:{width}px</p>
    <p>window height:{height}px</p>
    </>);
}
export default Effect