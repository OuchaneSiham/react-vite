// filter
function List2()
{
    const people = [
    {id: 1, name:"siham", age: 90}, 
    {id: 2, name:"alae", age: 9}, 
    {id: 3, name:"react", age: 8}, 
    {id: 4, name:"vite", age: 44},
    {id: 5, name:"javascript", age: 25}, 
    {id: 6, name:"fastify", age: 99}, 
    {id: 7, name:"nextjs", age: 81}, 
    {id: 8, name:"docker", age: 441}]
    // const filter = people.filter(i => i.age > 30);
    // const filter = people.filter(i => i.age < 30);
    // people.sort((a, b)=>b.age - a.age);
    const listitems = people.map(element=>
                <li key={element.id} >
                                    {element.name}: &nbsp;
                                    <b>{element.age}</b></li>
    )
    return(<ol>{listitems}</ol>)
}
export default List2