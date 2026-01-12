import { use, useState } from "react";
import user from './Assets/person.png'
import password from './Assets/password.png'
import email from './Assets/email.png'
function SignUp(){
    const [action, setAction] = useState("Sign Up")

    const handleSignUp = () =>{
        setAction("Sign Up");
    }
    const handleSignIn = () =>{
        setAction("Sign In");
    }
    return(
        <div className="signup-container">
                <div className="header" >
                <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                        {action === "Sign In"?
                                <div></div>
                        :                    
                                <div className="input">
                                <label for="user">User:</label>
                                <img src={user} alt=""></img>
                                <input type="text" placeholder="enter your username"></input>
                    </div>}
                    <div className="input">
                        <label for="password">Password:</label>
                        <img src={password} alt=""></img>
                        <input type="password" placeholder="enter your password" ></input>
                    </div>
                    <div className="input">
                        <label for="email">Email:</label>
                        <img src={email} alt=""></img>
                        <input type="email" placeholder="enter your email" required></input>
                        {/* <input type="submit"></input> */}
                    </div>
                </div>
                <div className="submit-container">
                    <div className= {action === "Sign In"? "submit gray" : "submit"}
                                            onClick={handleSignUp}>Sign Up</div>
                    <div className= {action === "Sign Up"? "submit gray" : "submit"}
                                            onClick={handleSignIn}> Sign In</div>
                </div>
        </div>
    );

}
export default SignUp