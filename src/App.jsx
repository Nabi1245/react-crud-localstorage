import { useState } from 'react'
import AppRoutes from './router/AppRoutes'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Add a simple navigation menu */}
     
      <nav style={{ padding: "20px", background: "#f0f0f0",textAlign:"center" }}>
        <a href="/create" style={{ marginRight: "10px", textDecoration: "none" }}>
          Create
        </a>
        <a href="/view" style={{ marginRight: "10px", textDecoration: "none" }}>
          View
        </a>
       
      </nav>
     {/* This will show the current page */}
      <AppRoutes/>
    </>
  )
}

export default App
