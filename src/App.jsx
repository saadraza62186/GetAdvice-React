import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [advice , setAdvice] = useState('')
  const [count, setCount] = useState(0)


 async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    console.log(data)
    setAdvice(data.slip.advice)
    setCount(count + 1)
  }



  return (
    <>
     <div>
      <h1>{advice}</h1>
     </div>
     <button onClick={getAdvice}>
      Get Advice
     </button>
     <div>
      <h3>You have read {count} Advice</h3>
     </div>
    </>
  )
}

export default App
