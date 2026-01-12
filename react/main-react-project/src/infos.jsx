// useRef() = React Hook that creates a mutable value
// that survives re-renders WITHOUT causing re-render


// SYNTAX
// const ref = useRef(initialValue)


// ACCESS VALUE
// ref.current


// COMMON USE CASES

// #1 Access DOM elements (input, div, button)
// #2 Store values that shouldn't trigger re-render
// #3 Store timers / intervals
// #4 Track previous values
// #5 Integrate non-React libraries


// IMPORTANT RULES

// 1️⃣ Changing ref.current does NOT re-render
// 2️⃣ Ref value persists between renders
// 3️⃣ useRef is NOT for UI state
// 4️⃣ useRef can directly touch the DOM


// ONE-LINE MEMORY

// useState → data that affects UI
// useRef   → data that React should ignore
