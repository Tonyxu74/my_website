import React from 'react'
import {Link} from 'react-router-dom'
import SpaceScene from '../components/SpaceScene.js'
import "../App.css"
import {Sunnybrook, MINT, Tsinghua, DogGAN} from '../experiences/PostObjects.js'
import ExperiencesPost from '../components/ExperiencesPost.js'

function Experiences(){
    const randz = Math.random() * 100 + 50
    const randrot = Math.random() * 0.4 

    return (
        <div className="experiences_main">
            
            <div style={{position: "fixed", height: '100%', width: '100%', pointerEvents: 'none'}}>
                <SpaceScene cam_pos={[30, 0, 400]} cam_rot={[0,0,0]} />
            </div>
    
            <div className="experiences_header" id={'home'}>
                
                <h1 className="experiences_title">
                    Experiences
                </h1>


                <div className="experiences_navbar" >

                     <a href='/' className="experiences_navbar_item">
                        <p>
                            <span>Home</span>
                        </p>
                    </a>

                    <a href={`#${Sunnybrook['summary']}`} className="experiences_navbar_item">
                        <p>
                            {Sunnybrook['summary']}
                        </p>
                    </a>
                    
                    <a href={`#${MINT['summary']}`} className="experiences_navbar_item">
                        <p>
                            {MINT['summary']}
                        </p>
                    </a>

                    <a href={`#${DogGAN['summary']}`} className="experiences_navbar_item">
                        <p>
                            {DogGAN['summary']}
                        </p>
                    </a>

                    <a href={`#${Tsinghua['summary']}`} className="experiences_navbar_item">
                        <p>
                            {Tsinghua['summary']}
                        </p>
                    </a>

                </div>
            
                <div className="experiences_body">
                    <ExperiencesPost post_object={Sunnybrook} />
                    <ExperiencesPost post_object={MINT} />
                    <ExperiencesPost post_object={DogGAN} /> 
                    <ExperiencesPost post_object={Tsinghua} />
                   
                </div>   

                <a href={'#home'} className="PostTopButton">
                    back to top
                </a>

            </div>

        </div>
    )
  }

export default Experiences;