// useContext() = React Hook that lets a component
// READ shared data without passing props manually
//
// It solves the "props drilling" problem


// CONTEXT HAS 2 PARTS
// 1) createContext → create the shared data container
// 2) useContext    → read the shared data


// STEP 1️⃣ CREATE CONTEXT (done ONCE, outside components)
import { createContext } from "react";

const MyContext = createContext();


// STEP 2️⃣ PROVIDE VALUE (wrap components that need access)
<MyContext.Provider value={data}>
    <App />
</MyContext.Provider>


// STEP 3️⃣ CONSUME VALUE (inside ANY child component)
import { useContext } from "react";

const value = useContext(MyContext);


// IMPORTANT RULES

// 1️⃣ useContext ONLY works if the component
//     is INSIDE the matching Provider

// 2️⃣ When the Provider value changes,
//     ALL components using this context re-render

// 3️⃣ useContext does NOT replace useState
//     It only SHARES data


// COMMON USE CASES

// #1 Authentication (current user)
// #2 Theme (dark / light)
// #3 Language (i18n)
// #4 Global app settings


// WHEN NOT TO USE CONTEXT

// ❌ Local component state
// ❌ Form inputs
// ❌ Temporary UI logic


// ONE-LINE MEMORY

// createContext → creates the box
// Provider      → fills the box
// useContext    → reads the box
