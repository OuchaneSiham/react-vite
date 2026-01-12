// useEffect() = React Hook that tells React to DO SOME CODE WHEN (pick one):
// 
// 1) This component re-renders
// 2) This component mounts
// 3) The state of a value changes


// SYNTAX
// useEffect(function, [dependencies])


// DIFFERENT WAYS TO USE useEffect

// 1️⃣ Runs after EVERY render
useEffect(() => {
    // code here
});


// 2️⃣ Runs ONLY once (when component mounts)
useEffect(() => {
    // code here
}, []);


// 3️⃣ Runs on mount + when a value changes
useEffect(() => {
    // code here
}, [value]);


// COMMON USE CASES

// #1 Event listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Cleanup when a component unmounts
