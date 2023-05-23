import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../Components/Navbar'
import Section from '../Components/Section'

function App() {
  

  return (
    <>
      <div className='app-container'>
        <Navbar/>
        <Section/>
      </div>
    </>
  )
}

export default App
