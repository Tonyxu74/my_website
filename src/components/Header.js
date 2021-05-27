import React from 'react'

function Header(){
    return(
        <div className="header-major" id="MainHeader">   
          <header className="App-header"> 
            <h1>
              About me
            </h1>

            <p className="Blurb">
              Hello! I'm a 4th year Electrical Engineering student specializing in Biomed currently studying at UBC. I'm interested in applying 
              deep learning to a variety of areas including medical imaging and image reconstruction. 
              Also taking a minor in Physics and avid space enthusiast!
            </p>
            <p className="Blurb">
              I like to play badminton, go to the gym, play piano, explore the food scene, and make cool things in my free time.
            </p>
          </header>

          <img className="Image" src={`${process.env.PUBLIC_URL}/SunnybrookImage.jpg`}/>

        </div>
    )
}

export default Header