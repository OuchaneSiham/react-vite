import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './Student.css'
// import './UserGreeting.css'
// import './UserGreeting.jsx'
// import './List3.css'
// import './Counter.css'
import App from './App.jsx'
// import './ColorPicker.css'
// import './SignUp.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
