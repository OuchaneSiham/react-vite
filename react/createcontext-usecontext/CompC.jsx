import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./CompA";
import CompD from "./CompD";
// function CompC(props){
    function CompC(){
        const user = useContext(UserContext);
    return(<>
    <div className="cA">
        <h1 >ComponentC</h1>
        <h2>{`hello again from ${user}`}</h2>
        <CompD></CompD>
    </div>
    </>);
}
export default CompC    