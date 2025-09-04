import Header from '../components/Header.js'
import SpaceScene from '../components/SpaceScene.js'
// import Publications from '../components/Publications.js'
import Projects from '../components/Projects.js'
import '../App.css'
import React from 'react'

export default function Home() {

  function handleHeaderClick() {
    document.getElementById('MainHeader').scrollIntoView({ behavior: 'smooth' })
  }

  // function handlePublicationsClick() {
  //   document.getElementById('Publications').scrollIntoView({ behavior: 'smooth' })
  // }

  function handleProjectsClick() {
    document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })
  }

  function handleTopClick() {
    document.getElementById('Home').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home_main">
      
      <SpaceScene cam_pos={[0, -45, 80]} cam_rot={[0,0,1]}/>

      <div className="home_title" >   
          <h1 className="Name">
            TONY<span> XU</span>
          </h1>
      </div>

      <ul className="ButtonBox">
        <li className="listitem">
          <a onClick={handleHeaderClick} className="Button">about</a>
        </li>
        <li className="listitem">
          <a href="https://scholar.google.ca/citations?user=3vwB4oEAAAAJ&hl=en" className="Button" target="_blank" rel="noopener noreferrer">publications</a>
        </li>
        <li className="listitem">
          <a onClick={handleProjectsClick} className="Button">experiences</a>
        </li>
        <li className="listitem">
          <a href={`${process.env.PUBLIC_URL}/TonyXuWebsiteResume.pdf`} className="Button" target="_blank" rel="noopener noreferrer">resume</a>
        </li>
        <li className="listitem">
          <a href="https://www.github.com/Tonyxu74" className="Button" target="_blank" rel="noopener noreferrer">github</a>
        </li>
        <li className="listitem">
          <a href="https://www.linkedin.com/in/tony-lt-xu/" className="Button" target="_blank" rel="noopener noreferrer">linkedin</a>
        </li>
      </ul>
      
      <Header />

      <Projects />

      <a onClick={handleTopClick} className="top_button">top ⬆</a>

    </div>
  )
}
