import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./CompA";
import CompC from "./CompC";
// function CompB(props){
    function CompB(){
        const user = useContext(UserContext);
    return(<>
    <div className="cA">
        <h1>ComponentB</h1>
        {/* <CompC user = {props.user}></CompC> */}
        {/* // same hre u can consume it here  */}
        <CompC></CompC>
    </div>
    </>);
}
export default CompB