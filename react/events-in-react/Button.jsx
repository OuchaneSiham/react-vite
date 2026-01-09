function Button(){
    const handleclick = (e) => {
        // 1. Log the OLD text
        console.log("Old text was: " + e.target.textContent);
    
        // 2. CHANGE the text on the button physically
        e.target.textContent = "YOU CLICKED ME! 😊";
        
        // 3. Log the NEW text
        console.log("New text is: " + e.target.textContent);
    }
    return(
        <>
        <button onClick={(e) => handleclick(e)}>Click me </button>
        <button onDoubleClick={(e) => handleclick(e)}>Click me </button>
        </> );
}
export default Button
// e object containes data that we send to the browsr who clciked time exetra ////
