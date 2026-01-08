// import Login from './Login.jsx'
function Register(){
    return(
        <>
        <div className="Register Page">
            <form>
                <div>
                    <label for="username">username:</label>
                    <input type="text" id="username" name="username" placeholder="enter your username" required></input>
                </div>
                <br></br>
                <div>
                    <label for="email">email:</label>
                    <input type="text" id="email" name="email" placeholder="enter your email" required></input>
                </div>
                <br></br>
                <div>
                    <label for="password">password:</label>
                    <input type="text" id="password" name="password" placeholder="enter your password" required ></input>
                </div>
                <br />
                <div>
                <input type="submit" value="click here"></input>
                </div>
            </form>
        </div>
        </>
    );
}
export default Register