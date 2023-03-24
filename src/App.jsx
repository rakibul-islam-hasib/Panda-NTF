// import { useState } from 'react'
import './App.css'
import AboutCard from './components/AboutCard/AboutCard'
import Card from './components/Card/Card'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import OutlineButton from './components/OutlineButton/OutlineButton'
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
      <div className="about-card">
        <AboutCard name="Set up your wallet"></AboutCard>
        <AboutCard name="Add your NFTs"></AboutCard>
        <AboutCard name="List them for sale"></AboutCard>
      </div>
      {/* Live Auction part */}
      <div className="live-auction">
        <div className="live-auction-title">
          <h1>Live Auction</h1>
        </div>
        <div className="live-auction-btn">
          <OutlineButton name="View More"></OutlineButton>
        </div>
      </div>
      <div className="card-part">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="live-auction">
        <div className="">
          <h1>Featured Artist</h1>
        </div>
        <div className="live-auction-btn">
          <OutlineButton name="View More"></OutlineButton>
        </div>
      </div>
    </div>
  )
}

export default App
