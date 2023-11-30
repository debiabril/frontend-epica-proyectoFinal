import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center h-[100vh]'>
        <img className='object-cover m-auto' src="https://colegiomaya.edu.sv/en/wp-content/uploads/2018/03/underconstruction.jpg" />
      </div>
    </>
  )
}

export default App
