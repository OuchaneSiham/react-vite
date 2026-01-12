
import { useState } from "react";

function OnChange()
{
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [paymant, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const reset =()=>{
        setName("Guest");
    }
    const handleQuantity = (event) =>{
        setQuantity(event.target.value)
    }
    const handleComment = (event) =>{
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    const handleShipping = (event) =>{
        setShipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantity} type="number" />
            <p>Quantity: {quantity}</p>


            <textarea value = {comment} onChange={handleComment} placeholder="enter delivery steps"></textarea>
            <p>Comment: {comment}</p>


            <select value={paymant} onChange={handlePayment}>
                <option value =""> select an option</option>
                <option value ="Visa"> Visa</option>
                <option value ="Giftacrd"> Giftacrd</option>
                <option value ="option3"> option3</option>
                <option value ="option4"> option4</option>

            </select>
            <p>Payment Method: {paymant}</p>

            <label >
                <input type="radio" value="pick up" checked={shipping === "pick up"} onChange={handleShipping}></input>
               Pick up 
            </label>

            <label>
                <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShipping}></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default OnChange

