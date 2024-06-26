import React from 'react'

function Header(){
    return(
        <div className="header-major" id="MainHeader">   
          <header className="App-header"> 
            <h1>
              About me
            </h1>

            <p className="Blurb">
              Hello! I'm a second-year PhD student at the Department of Medical Biophysics at UofT supervised by Dr. Anne Martel and Dr. Maged Goubran. 
              I recently graduated from UBC with a major in Electrical Engineering specializing in Biomedical Engineering and a minor in Physics. 
              I'm working on applying deep learning to a variety of areas including huge medical images and image reconstruction. 
              I enjoy learning new things, and am also an avid space enthusiast!
            </p>
            <p className="Blurb">
              I like to play badminton, go to the gym, play piano, explore the food scene, and make cool things in my free time. 
              Thanks for visiting my website!
            </p>
          </header>

          <img className="Image" src={`${process.env.PUBLIC_URL}/pic.jpg`}/>

        </div>
    )
}

export default Header