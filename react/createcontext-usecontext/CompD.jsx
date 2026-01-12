// import { useState, useContext } from "react";
import { useContext } from "react";
import { UserContext } from "./CompA";
// function CompD(props){
    // d is consumer and a is provider 
    function CompD(props){
        const user = useContext(UserContext);
    return(<>
    <div className="cA">
        <h1>ComponentD</h1>
        <h2>{`bye  ${user}`}</h2>
    </div>
    </>);
}
export default CompD