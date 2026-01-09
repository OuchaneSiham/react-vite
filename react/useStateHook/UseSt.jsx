
// react hooks 

import { useState } from 'react';
function UseSt1()
{
    // const [name="siham", setName] = useState();
    const [name, setName] = useState();
    // name = ""
    const updateNmae =() =>{
        // name = "siham";
        setName("siham3");
        // console.log(name);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateNmae}>set name</button>
        </div>
    );
}
// drawing new screen with new values  
function UseSt()
{
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(7);
    const [isEmployed, setisEmp] = useState(false);
    const updateNmae =() =>{
        setName("siham3");
    }
    const upgradeAge = ()=>{
        setAge(age + 2);
    }
    const toggelteEmpStatues = () =>{
        setisEmp(!isEmployed) 
        // this 
        // and not this 
        // setisEmp(isEmployed = true) 
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateNmae}>set name</button>

            <p>Age: {age}</p>
            <button onClick={upgradeAge}>set age</button>

            <p>IsEmployed: {isEmployed? "yes": "no"}</p>
            <button onClick={toggelteEmpStatues}>set isEmployed</button>
        </div>
    );
}
export default UseSt