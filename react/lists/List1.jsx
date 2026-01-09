

// function List()
// {
//     const chars = ["q", "b", "c", "d"]
//     chars.sort();
//     // if u did return that it will give u one line 
//     const listitems = chars.map(element=>
//         <li>{element}</li>
//     )
//     return(<ul>{listitems}</ul>)
//     // return(chars);
// }
// export default List 
function List1()
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
    // chars.sort();
    // if u did return that it will give u one line 
    // const listitems = people.map(element=>
    //     <li>{element.name}</li>
    // )


    // if u just print this it will give u all names but witha  warnng which is each element should have a unique key 
    // we have name is unique 
    //     const listitems = people.map(element=>
    //     <li key={element.name} >{element.name}</li>
    // )

//     people.sort((a, b)=> a.name.localeCompare(b.name)
// );
        // people.sort((a, b)=> b.name.localeCompare(a.name)
        // );
        // people.sort((a, b)=> a.age - b.age);
        people.sort((a, b)=>b.age - a.age);

    // or id if its db 
    const listitems = people.map(element=>
                <li key={element.id} >
                                    {element.name}: &nbsp;
                                    <b>{element.age}</b></li>
    )
    return(<ol>{listitems}</ol>)
    // return(chars);
}
export default List1