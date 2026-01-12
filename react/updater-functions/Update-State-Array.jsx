import { useState } from "react";
function Update()
{
    const [food, setFood]= useState(["food1", "food2", "food3"])
    const handleAdd =()=>{
        const newF = document.getElementById("foodInput").value; //add the value
        document.getElementById("foodInput").value = "";// set teh placgolder to empty 

        // setFood([newF]);// this will add the new f but will ovreade the first list 
        // setFood([...food, newF]);// this is coorrect or 
        setFood(currentF => ([...currentF, newF]));
    }
    const removeFood = (index) =>{
        setFood(food.filter((_, ind) => {
            return ind !== index
        }))
    }
    return (
        <div>
            <h2>list of food</h2>
            {/* <input type="text" name="" id="" /> */}
            <ul>
                {/* {food.map((food, element) => <li key={element} onClick={removeFood}>{food}</li>)} */}
                {food.map((food, element) => <li key={element} onClick={ ()=>removeFood(element)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="enter name of food" ></input>
            <button onClick={handleAdd}>Add Food</button>
        </div>
    );
}
export default Update