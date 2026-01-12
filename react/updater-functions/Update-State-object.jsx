import { useState } from "react";
// update state of objects in reat 
function Update1()
{
    const [car, setCar] = useState({
        year: 2009,
        make: "Volkswagen",
        model: "Golf"
      }
      );
      const handleYearCHanege =(e) =>{
        // setCar({year: 2003})
        // if we run only this it give us only the year from object 
        // so we will wrrap the object with the modificaion 
        //setCar({...car, year: 2018}); // similar to setCar({ year: 2009,make: "Volkswagen",model: "Golf", year: 2018});
        // general syntax 
        setCar({...car, year:e.target.value})
        setCar( currentCar => ({...currentCar, year:e.target.value}))// take latest data in react memory and update it if we have many updates in fast way 
      }
      const handleMakeCHanege =(e) =>{
        // setCar(e.target.value)
        // setCar({...car, make:e.target.value})
        setCar( currentCar => ({...currentCar, make:e.target.value}))
      }
      const handleModelCHanege =(e) =>{
        // setCar(e.target.value)
        // setCar({...car, model:e.target.value})
        setCar( currentCar => ({...currentCar, model:e.target.value}))
      }
    return(
        <>
        <div>
            <p>Your Favourite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearCHanege}></input><br></br>
            <input type="text" value={car.make} onChange={handleMakeCHanege}></input><br></br>
            <input type="text" value={car.model} onChange={handleModelCHanege}></input><br></br>
        </div>
        </>
    );

}
export default Update1