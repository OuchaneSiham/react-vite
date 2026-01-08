// map 
// filter 
// reduce 
let args =[ 930, 44, 70]
function add(a, b){
    return a + b;
}
args.map((i)=>{
    // i is the element
   console.log( add(i , 2));
})

let names = ["aa", "bb", "cc"];
const res = names.map((name)=>{
    return name + "1";
    // return <h1>{name}</h1>
})
console.log(res);

let args1 =[ 930, 44, 70, 44, 0 , 5 , 2]
const result = args1.filter((word) => word < 6);
console.log(result);