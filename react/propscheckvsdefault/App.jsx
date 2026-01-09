import Student from "./Student.jsx";
// import  from "./Student.jsx";
function App() {

  return(
    <>
    <Student name= "siham"
              age="assss"
              isStudent={true}
    >
    </Student>
    <Student name="alae korchi" 
              age={77}
              isStudent= {true}
    >
    </Student>
    <Student name="student1" 
              age={33}
              isStudent={false}
    >
    </Student>
    <Student name="student2" 
              age={30}
              isStudent={true}
    >
    </Student>
    <Student></Student>
    </>
    
  );
}
export default App


// app is the parent and studnet is teh child 