// import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sponsors from './components/Sponsors/Sponsors'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="sponsor">

        <Sponsors></Sponsors>
      </div>
      <div className="title">
        <h1>Create and sell your <br /> NFTs</h1>
      </div>
    </div>
  )
}

export default App
