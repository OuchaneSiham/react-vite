import { useState } from "react";
function Update()
{
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");
    const handleAddCar = () =>{
        // const newC = document.getElementById("carInput").value;
        // document.getElementById("carInput").value="";
        // setCars(newC);
        const newC = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        // here it gonna save the data on the input we wanna clear it and reset the date 

        setCars(c =>[...c, newC]);
        setYear(new Date().getFullYear());
        setModel("");
        setMake("");
    }
    const removeCar = (index) =>{
        setCars(cars.filter((_, ind) => {
            return ind !== index;
        }))
    }
    const YearChange = (event) =>{
        setYear(event.target.value)
    }
    const handleMakeChange = (event) =>{
        setMake(event.target.value)
    }
    const handleModelChange = (event) =>{
        setModel(event.target.value)
    }
    return(
        <>
        <div>
            <h2>list of car objects</h2>
                <ul>
                    {cars.map((car, element)=> 
                    <li key={element} onClick={() => removeCar(element)}>
                        {car.year} {car.make} {car.model}</li>)}
                </ul> 
            <input type="number"  value={carYear} onChange={YearChange}/> <br/>
            <input type="text"  value={carMake} onChange={handleMakeChange} placeholder="enter car make"/> <br/>
            <input type="text"  value={carModel} onChange={handleModelChange} placeholder="enter car model"/> <br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
        </>
    );
}
export default Update