// import Student from "./Student.jsx";
// import  from "./Student.jsx";
import UserGreeting from "./UserGreeting";
function App() {

  return(
    <>
    <UserGreeting isLoggedIn={true} username="my love alaaeddine el korchi hbibi alae khouya"></UserGreeting>
    <UserGreeting isLoggedIn={false} username="siham"></UserGreeting>
    <UserGreeting username="siham"></UserGreeting>
    {/* will be fale defualt  */}
    <UserGreeting isLoggedIn={true}></UserGreeting>
    {/* will print Guest */}
    </>
    
  );
}




export default App


// app is the parent and studnet is teh child 