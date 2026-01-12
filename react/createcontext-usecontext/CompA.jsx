import { useState, createContext } from "react";
import CompB from "./CompB.jsx";
export const UserContext = createContext();
function CompA(){
    const [user , setUser] = useState("siham");

    return(<>
    <div className="cA">
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        {/* if i wanna do same to do i will use props to pass data from a b c then d 
         */}
         {/* // STEP 2️⃣ PROVIDE VALUE (wrap components that need access)
          */}
          <UserContext.Provider value={user}><CompB></CompB> </UserContext.Provider>
        {/* <CompB user={user}></CompB> // we no longer need props  */}
    </div>
    </>);
}
export default CompA    