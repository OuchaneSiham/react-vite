// if u ahve more than one line u need brackets 

function Button2(){
    let count = 0;
    const handleclick = (name)=>{
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time`);
        }
        else{
            console.log(`${name} you clcikd me more than 3 times  `);
        }
    }
    return(
        <button onClick={() => handleclick("siham")}>Click me </button>
    );
}
export default Button2