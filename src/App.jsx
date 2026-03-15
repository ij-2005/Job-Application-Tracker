import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Job Application Tracker</h1>
          <p>By IJ2005</p>
        </div>
      </section>
    </>
  )
}

export default App
