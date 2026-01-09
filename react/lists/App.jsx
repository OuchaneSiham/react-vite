// import Student from "./Student.jsx";
// import  from "./Student.jsx";
// import UserGreeting from "./UserGreeting";
// import List1 from "./List1";
// import PropTypes from 'prop-types';
import List3 from "./List3"
function App() {
  const people = [
    {id: 1}, 
    {id: 2, name:"alae", age: 9}, 
    {id: 3, name:"react", age: 8}, 
    {id: 4, name:"vite", age: 44},
    {id: 5, name:"javascript", age: 25}, 
    {id: 6, name:"fastify", age: 99}, 
    {id: 7, name:"nextjs", age: 81}, 
    {id: 8, name:"docker", age: 441}]
    const animals = [
      {id: 9, name:"dog1", age: 55}, 
      {id: 10, name:"dog2", age: 56}, 
      {id: 11, name:"dog3", age: 54}, 
      {id: 12, name:"dog4", age: 44},
      {id: 13, name:"dog5", age: 43}, 
      {id: 14, name:"dog6", age: 46}, 
      {id: 15, name:"dog7", age: 30}, 
      {id: 16, name:"dog8", age: 18}]
      return(
        <>
        {/* {people.length > 0? <List3 items={people} category="People"></List3>: null}
        {animals.length > 0? <List3 items={animals} category="Animals"></List3>: null} */}
    
        {people.length > 0 && <List3 items={people} category="People"></List3>}
        {animals.length > 0 && <List3 items={animals} category="Animals"></List3>}
        </>
      );
}
export default App
// app is the parent and studnet is teh child