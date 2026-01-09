
import { useState } from "react";

function OnChange1()
{
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const reset =()=>{
        setName("Guest");
    }
    const handleQuantity = (event) =>{
        setQuantity(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            {/* <button onClick={reset}>Reset</button> */}
            <input value={quantity} onChange={handleQuantity} type="number" />
            <p>Quantity: {quantity}</p>
        </div>
    );
}
export default OnChange1

