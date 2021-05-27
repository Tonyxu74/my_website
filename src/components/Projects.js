import React from 'react'

function Project({symbol, name, description, link}){
    return(
        <div className="project_box">
            <h2><a href={link} className="project_link" rel="noopener noreferrer"><span>{symbol}</span>{name}</a></h2>
            <p className="project_description">{description}</p>
        </div>
    )
}

function Projects(){
    return(
        <div className="projects_main" id="Projects">
            <div className="projects_text">
                <h1>Stuff I've done</h1>

                <Project symbol="🃏" name="Slay the Spire Neural Card Recommender" 
                description="Slay the Spire is a roguelike deckbuilder game where you ascend through spire floors while battling enemies with a deck you build along the way. 
                I created a recommender system based on cosine similarity between two embedding vectors. 
                One embedding vector encodes a card choice, and the second encodes your general gamestate (takes into account deck and relics). 
                Overall, the model recommends you card choices given their cosine similarity to your current gamestate. 
                Still a work in progress, keep an eye out for the link!" 
                link="https://github.com/Tonyxu74"/>
            
                <Project symbol="🔬" name="Overcoming the limitations of patch-based learning to detect cancer in whole slide images" 
                description="The culmination of the work I did in my summer at the Sunnybrook Research Institute in Toronto. 
                This publication details a way to improve the detection of the extent of breast cancer in a whole-slide histopathology image (the tumor bed). 
                My work was primarily on creating a patch-level classifier, which achieved 3rd on the BreastPathQ cellularity competition at the time." 
                link="https://www.nature.com/articles/s41598-021-88494-z"/>

                <Project symbol="🧠" name="Neureka 2020 - EEG Seizure Detection" 
                description="Neureka was an international challenge hosted by Novela Neurotech and NeuroTechX on seizure prediction using EEG voltage data. 
                A Short-Time Fourier Transform and other denoising methods were applied to convert time series signal into a heatmap of frequency over time. 
                By using a simple pretrained ResNet, we determined the approximate start and end of seizures in scalp EEG, and our method obtained 4th place. " 
                link="https://github.com/Tonyxu74/eeg-seizure-detection"/>

                <Project symbol="💪" name="FlexAI" 
                description="I worked with a small team of wonderful individuals at FlexAI as a machine learning engineering intern for 8 months. 
                My main contributions were towards detecting fine-grained form errors in real world exercise videos to provide insight on a user's exercise performance. 
                I researched and implemented numerous cutting-edge approaches used for 3D (2D + time) video data and pose detection." 
                link="https://flexfitnessapp.com/"/>

                <Project symbol="💭" name="MINT" 
                description="I am the lead of the ML sub-team of Multifaceted Innovations in NeuroTechnology (MINT). 
                We are working on trying to create a home-automation app that is controlled using the mind. 
                I built a data aquisition and preprocessing pipeline, and a simple classification model for EEG data that determines a person's motion intent." 
                link="https://ubcmint.github.io/"/>

                <Project symbol="🌌" name="VLBI Image Reconstruction" 
                description="I was inspired by the imaging of the black hole M87 to apply machine learning to reconstruct images from incomplete UV-plane data. 
                The further away an object is, the larger the apeture needed to see it. 
                Interferometry links many telescopes across the world to piece together an incomplete picture of a distant object." 
                link="https://github.com/Tonyxu74/vlbi_space_project"/>

                <Project symbol="📚" name="Famous Author Natural Language Generation" 
                description="My final project for the machine learning course that I took during exchange at NTU. 
                I investigate increasingly complex language models on generating a text in the style of a famous historical author, and contrast the improvements that each model brings. 
                I learned a lot about the evolution of language-related algorithms in ML, and gained experience with their properties." 
                link="https://github.com/Tonyxu74/famous-author-nlg"/>

                <Project symbol="🐶" name="Doggin' Dog GAN" 
                description="A project using generative adversarial networks to generate fake dog images from the Stanford Dogs dataset. 
                We also tried using an encoding model to apply funky GAN-like features to a real dog image. " 
                link="https://dogs.rockzhou.com"/>

                <Project symbol="🛑" name="SmartStop" 
                description="Our submission for the Decode Congestion hackathon. 
                We used a Raspberry Pi with a camera module to control a blinking 4 or 3-way stop sign, improving the intuitiveness and safety of the intersection. 
                I coded the stop sign controller and created a segmentation model to detect vehicles and pedestrians in real-time using the Berkeley DeepDrive dataset." 
                link="https://github.com/Tonyxu74/SmartStop"/>

                <div className="bottom"></div>
            </div>
            
        </div>
    )
}

export default Projects