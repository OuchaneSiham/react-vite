// function Button(){
//     const handleclick1 = () => console.log("wwhat?");
//     const handleclick2 = (name ) => console.log(`${name} stop clicking me`);
//     return(
//         <>
//     <button onClick={handleclick1}>click me1 </button>
//     {/* this will wait untill we click */}
//     <button onclick={handleclick2("siham")}>click me2 </button>
//     {/* this prints before even we click  */}

//     <button  onClick={()=> handleclick2("ssss")}>click me3 </button>
//     </>
// )
// }
// Why it doesn't wait: As soon as the computer sees sayhey("siham"), 
// it thinks it needs to run that code right now to find out what the answer is.
function Button1(){
    const sayhey = () => console.log("hello u clicked me and i will wait");
    return(
        <button onClick={sayhey}>Click me i will wait </button>
        // <button onClick={sayhey()}>Click me i will wait </button>
        // wont wait cz we have ()
    );
}
// export default Button1

function Button2(){
    const sayhey = (name) => console.log(`${name} u clicked me i wont wait if u didint pass me to a arrow function cz i ahve a parameter name i have something to run isnde () `);
    return(
        <button onClick={sayhey("siham")}>Click me i wont wait wait </button>
    );
}
// export default Button2

function Button(){
    const sayhey = (name) => console.log(`${name} here im gonna wait cz u fixe it with an arrow wrapper`);
    return(
        <button onClick={() => sayhey("siham")}>Click me i will wait wait </button>
    );
}
export default Button
// The () => part acts as a container.
// React sees the container and waits.
// When clicked, it opens the container and runs the code inside.