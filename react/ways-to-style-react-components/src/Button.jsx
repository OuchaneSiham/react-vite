
// function Button(){
//     return(
//         <button className="button">click me </button>
//     );
// }
// export default Button

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    // return(
    //     <button className="button">click me </button>
    // );
    return(
        <button style={styles}>click me </button>
    );
}
export default Button