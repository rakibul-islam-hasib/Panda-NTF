// import { useState } from 'react'
import './App.css'
import AboutCard from './components/AboutCard/AboutCard'
import Artist from './components/Artist/Artist'
import Card from './components/Card/Card'
import Hero from './components/Hero/Hero'
import HotCard from './components/HotCard/HotCard'
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
      {/* artist card part */}
      <div className="artist-card-part">
        {/* <Card></Card> */}
        <Artist name="CryptoPunks" view="818.7K"></Artist>
        <Artist name="Doodles" view="74.9K"></Artist>
        <Artist name="Bored Ape" view="378.7K"></Artist>
        <Artist name="Capsule House" view="19.3K"></Artist>
      </div>
      {/* HOT nft */}
      <div className="live-auction">
        <div className="live-auction-title">
          <h1>Hot NFTs</h1>
        </div>
        <div className="live-btn">
          <OutlineButton name="Music"></OutlineButton>
          <OutlineButton name="Art"></OutlineButton>
          <OutlineButton name="Sports"></OutlineButton>
          <OutlineButton name="Virtual"></OutlineButton>
          <OutlineButton name="Videos"></OutlineButton>
          <OutlineButton name="More"></OutlineButton>
        
        </div>
      </div>
      {/* HOT */}
      <div className="hot-card">
      <HotCard></HotCard>
      <HotCard></HotCard>
      <HotCard></HotCard>
      <HotCard></HotCard>
      <HotCard></HotCard>
      <HotCard></HotCard>

      </div>
    </div>
  )
}

export default App
