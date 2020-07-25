import Line from '../components/Lines.js'
import Header from '../components/Header.js'
import SpaceScene from '../components/SpaceScene.js'
import '../App.css'
import React from 'react'

export default function Home() {
  return (
    <div className="home_main">
      <div className="home_space">
        <SpaceScene cam_pos={[0, -45, 80]} cam_rot={[0,0,1]}/>
      </div>
      <Line />
      <Header />
    </div>
  )
}
