import React, {useState} from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const[mode,setMode]=useState("light")

  const toggleMode = ()=>{
    if(mode === "light")
    {
      setMode("dark")
      document.body.style.backgroundColor = '#212529';
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = '#fff';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
    </>
  )
}

export default App
