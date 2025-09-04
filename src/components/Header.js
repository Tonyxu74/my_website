import React from 'react'

function Header(){
    return(
        <div className="header-major" id="MainHeader">   
          <header className="App-header"> 
            <h1>
              About me
            </h1>

            <p className="Blurb">
              Hello! I'm a fourth-year PhD candidate at the Department of Medical Biophysics at the University of Toronto supervised by Dr. Anne Martel and Dr. Maged Goubran. 
              My research focuses on improving self-supervised methods applied to huge medical images to reduce the reliance of deep learning methods on expert-generated annotations.
              I'm also broadly interested in using deep learning in healthcare to accelerate and enhance medical workflows.
              I'm honored to have recently received the <a href="https://research.google/programs-and-events/phd-fellowship/" className="blurbs_link" target="_blank" rel="noopener noreferrer">Google PhD Fellowship in health and bioscience</a>.
            </p>
            <p className="Blurb">
              Before my PhD, I completed my undergraduate studies at UBC with a major in Electrical Engineering specializing in Biomedical Engineering and a minor in Physics. 
              I'm an avid space enthusiast, enjoy learning and building new things, playing badminton, and going to the gym in my free time.
              Thanks for visiting my website!
            </p>
          </header>

          <img className="Image" src={`${process.env.PUBLIC_URL}/pic.jpg`}/>

        </div>
    )
}

export default Header