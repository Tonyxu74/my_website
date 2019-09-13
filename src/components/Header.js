import React from 'react'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header-major">   
        <header className="App-header"> 
          <h1 className="Name">
            <span>TONY</span> XU
          </h1>
          <p className="Blurb">
            Hello! I'm a 3rd year Electrical Engineering student specializing in Biomed currently studying at UBC. I'm interested in applying 
            deep learning to a variety of areas including medical imaging and image reconstruction. 
            Also taking a minor in Physics and avid space enthusiast!
          </p>
          <p className="Blurb">
            I like to play badminton, go to the gym, play piano, explore the food scene, and make cool things in my free time.
          </p>
          <div className="ButtonBox">

            <a href={`${process.env.PUBLIC_URL}/TonyXuWebsiteResume.pdf`} target="_blank" rel="noopener noreferrer">
              <button className="Button" type="button"><span>Resume</span></button>
            </a>
          
            <a href="https://www.github.com/Tonyxu74" target="_blank" rel="noopener noreferrer">
              <button className="Button" type="button"><span>GitHub</span></button>
            </a>
            
            <Link to="/experiences/">
              <button className="Button" type="button"><span>Experiences</span></button>
            </Link>

          </div>
        </header>

        </div>
    )
}

export default Header