import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Imagen1 from './components/Imagen1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Imagen1></Imagen1>
    </>
  )
}

export default App
