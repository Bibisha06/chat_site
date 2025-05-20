import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isHappy, setIsHappy] = useState(true)

  const handleCountClick = () => {
    setCount((count) => count + 1)
    if (count % 5 === 0) {
      setIsHappy(!isHappy)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Your App</h1>
      <div className="card">
        <button onClick={handleCountClick}>
          {isHappy ? '😄' : '😮'} Clicks: {count}
        </button>
        <p>
          Explore and customize your <code>src/App.jsx</code>
        </p>
      </div>
      <p className="read-the-docs">
        Powered by Vite and React - Your journey starts here!
      </p>
    </>
  )
}

export default App
