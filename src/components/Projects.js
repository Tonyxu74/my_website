import React from 'react'

function Projects(){
    return(
        <div className="projects_main" id="Projects">
            <div className="projects_text">
                <h1>Stuff I've done</h1>

                <div className="project_box">
                    <h2><a href="https://iccv.thecvf.com/virtual/2025/poster/327" className="project_link" target="_blank" rel="noopener noreferrer"><span>🌺</span>ICCV 2025</a></h2>
                    <p className="project_description">
                        I attended ICCV 2025 in Honolulu, USA to present <a href="https://www.arxiv.org/abs/2503.17564" target="_blank" rel="noopener noreferrer" className="blurbs_link">ModalTune</a>, a work I co-first authored to improve fine-tuning of slide-level foundation models in digital pathology.
                        I explored the latest in computer vision research and had excellent conversations with some of the brightest in the field! 
                        While not attending the conference, I was able to do some surfing and snorkeling.
                    </p>
                </div>

                <div className="project_box">
                    <h2 className="project_title"><span>🌆</span>MICCAI 2025</h2>
                    <p className="project_description">
                        I attended MICCAI 2025 in Daejeon, Korea to present my first-place solutions to the <a href="https://selma3d2025.grand-challenge.org/" target="_blank" rel="noopener noreferrer" className="blurbs_link">SELMA3D 2025 Challenge</a> and <a href="https://openreview.net/forum?id=5Zp3iXRBYc" target="_blank" rel="noopener noreferrer" className="blurbs_link">FLARE 2025 Challenge Task 4</a>.
                        The first challenge is a new rendition of last year's challenge (below), and this year I improved on our solution by adding our pretrained model to the nnUNet pipeline, using parameter efficient fine-tuning (LoRA), and improving generalizability by pseudo-labelling unlabelled data.
                        The second challenge looks to test pretraining methods for 3D MRI and CT images; my solution used parameter efficient fine-tuning on top of <a href="https://doi.org/10.1038/s41746-025-02035-w" target="_blank" rel="noopener noreferrer" className="blurbs_link">3DINO</a> to improve performance on 10 different downstream tasks simultaneously.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://selma3d.grand-challenge.org/" className="project_link" target="_blank" rel="noopener noreferrer"><span>🧠</span>SELMA3D Challenge</a></h2>
                    <p className="project_description">
                        SELMA3D is a challenge on using self-supervised learning to improve the segmentation of structures inside 3D light-sheet microscopy images. 
                        We developed a novel self-supervised method and segmentation pipeline and applied it to the challenge (<a href="https://doi.org/10.1038/s41746-025-02035-w" target="_blank" rel="noopener noreferrer" className="blurbs_link">3DINO</a>)!
                        Our method ended up obtaining third place on the challenge, and we presented our work at a Medical Image Computing and Computer Assisted Intervention (MICCAI) 2024 workshop.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://semicol.org/" className="project_link" target="_blank" rel="noopener noreferrer"><span>; </span>SemiCOL Challenge</a></h2>
                    <p className="project_description">
                        SemiCOL is a computational challenge using self-supervised learning approaches to tackle colorectal cancer detection.
                        The pipeline we developed for the challenge used label-efficient methods to pretrain feature extractors (PAWS and DINO), that were later applied to a tissue segmentation task.
                        We used both convolution-based (UNet) and Transformer-based (UNETR) segmentation models. 
                        The algorithm ended up obtaining second place in both arms of the challenge, and I presented the algorithm during the 19th European Congress on Digital Pathology (EDCP 2023)!
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://github.com/Tonyxu74/ddpm-mri" className="project_link" target="_blank" rel="noopener noreferrer"><span>🧲</span>DDPM for MRI Denoising</a></h2>
                    <p className="project_description">
                        A project I made for an AI course during my PhD.
                        Diffusion models are typically used as generative models that recover high-quality images from random noise in an iterative manner.
                        However, if you give them an image halfway through this iterative process, they can also be used for denoising!
                        I applied this idea and extended the original DDPM model into 3D to denoise MR images.
                        I was motivated to do this project because I was very interested in learning more about DDPMs and how they work at a deeper level.
                    </p>
                </div>
                
                <div className="project_box">
                    <h2 className="project_title"><span>🐚</span>Samsung Research America - Think Tank Team</h2>
                    <p className="project_description">
                        I worked for a summer as a computational scientist intern with a fantastic team situated in Mountain View, California. 
                        With TTT, I ideated, experimented, and created technologies to push the frontier of existing Samsung products, and sometimes invent new ones! 
                        I probably learned something new every day I spent on the team, whether it be technical (like SLaM) or otherwise (like surfing).
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://www.gandeeva.com/" className="project_link" target="_blank" rel="noopener noreferrer"><span>❄</span>Machine Learning Approaches to Accelerate Cryo-EM</a></h2>
                    <p className="project_description">
                        My capstone project for my Major in Electrical Engineering in collaboration with Gandeeva Therapeutics! 
                        Cryo-EM is a new technology capable of creating detailed 3D maps of proteins with high precision. 
                        Using traditional and deep-learning computer vision techniques, I helped create a pipeline to automate the imaging process of the cryo-EM microscope.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://open.library.ubc.ca/soa/cIRcle/collections/undergraduateresearch/52966/items/1.0413043" className="project_link" target="_blank" rel="noopener noreferrer"><span>🔬</span>Multi-Resolution Vision Transformer for Subtype Classification in Ovarian Cancer Whole-Slide Histopathology Images</a></h2>
                    <p className="project_description">
                        My thesis for my Major in Electrical Engineering in collaboration with the AIM Lab at UBC! 
                        Whole-slide images contain a wealth of data, but their immense size (~100,000 x 100,000 pixels) makes them difficult to process. 
                        Usually, computer vision algorithms will comb through the image patch-by-patch (~224 x 224 pixels), but combining information from each patch in the slide is nontrivial. 
                        I developed a method to extract, and combine information from patches at multiple resolutions using the new Vision Transformer model.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://chime-experiment.ca/en" className="project_link" target="_blank" rel="noopener noreferrer"><span>🔭</span>Variable Source Detection in the CHIME Telescope</a></h2>
                    <p className="project_description">
                        The thesis I completed for my Minor in Physics in collaboration with CHIME! 
                        The CHIME Telescope monitors a huge swath of the sky every single day, giving it the unique ability to track random transient events. 
                        I first cleaned and reduced the size of the ringmap data, and then developed an automated algorithm to detect legitimate sources varying over a few days.
                    </p>
                </div>

                <div className="project_box">
                    <h2 className="project_title"><span>🔬</span>Undergraduate Research Student at Sunnybrook Research Institute</h2>
                    <p className="project_description">
                        I spent a summer (and some more time remotely) researching with the Sunnybrook Research Institute in Toronto! 
                        I worked on two projects during this time. 
                        The first one describes a way to improve the detection of the extent of breast cancer in whole-slide histopathology images. 
                        The second explores the application of a new wave of self-supervised machine learning algorithms (like SimCLR) to a variety of histopathology datasets and tasks.
                    </p>
                </div>

                <div className="project_box">
                    <h2 className="project_title"><span>🌴</span>Amazon</h2>
                    <p className="project_description">
                        I spent a summer as an SDE Intern at Amazon, where I worked with a number of talented individuals on the eCommerce Financial Integrations (eCFI) team on financial data aggregation and tracking.
                        I helped design and build an operational dashboard website to consolidate and securely manage the workflows my team tracked.
                        Apart from learning about a variety of AWS services, I had my first experience with writing, documenting, and reviewing code to be used for an industry-level application.
                    </p>
                </div>

                <div className="project_box">
                    <h2 className="project_title"><span>🃏</span>Slay the Spire Neural Card Recommender</h2>
                    <p className="project_description">
                        Slay the Spire is a roguelike deckbuilder game where you ascend through spire floors while battling enemies with a deck you build along the way. 
                        I created a recommender system using a transformer-based encoder model to generate a pair of embedding vectors. 
                        One embedding vector encodes a card choice, and the second encodes your general gamestate (takes into account deck and relics). 
                        The model essentially uses the distance between these vectors to recommend card choices as you progress through the game. 
                        Still a work in progress, keep an eye out for the link soon!
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href={`${process.env.PUBLIC_URL}/BAOsAndChime.pdf`} className="project_link" target="_blank" rel="noopener noreferrer"><span>💥</span>Baryon Acoustic Oscillations and CHIME</a></h2>
                    <p className="project_description">
                        A poster I created for an introductory cosmology course I took for my physics minor. 
                        In the early stages of the universe's development, protons, photons, and electrons were tightly coupled in a primordial fluid. 
                        This fluid underwent acoustic oscillations (equivalent of a sound wave in the fluid), that left imprints on the distribution of matter on huge scales.
                        Investigations on this length scale can lead to better constraints on the evolution of the universe, and my poster uses simulated hydrogen density data to demonstrate this.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://github.com/Tonyxu74/eeg-seizure-detection" className="project_link" target="_blank" rel="noopener noreferrer"><span>🧠</span>Neureka 2020 - EEG Seizure Detection</a></h2>
                    <p className="project_description">
                        Neureka was an international challenge hosted by Novela Neurotech and NeuroTechX on seizure prediction using EEG voltage data. 
                        A Short-Time Fourier Transform and other denoising methods were applied to convert time series signal into a heatmap of frequency over time. 
                        By using a simple pretrained ResNet, we determined the approximate start and end of seizures in scalp EEG, and our method obtained 4th place. 
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://flexfitnessapp.com/" className="project_link" target="_blank" rel="noopener noreferrer"><span>💪</span>FlexAI</a></h2>
                    <p className="project_description">
                        I worked with a small team of wonderful individuals at FlexAI as a machine learning engineering intern for 8 months. 
                        My main contributions were towards detecting fine-grained form errors in real world exercise videos to provide insight on a user's exercise performance. 
                        I researched and implemented numerous cutting-edge approaches used for 3D (2D + time) video data and pose detection.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://ubcmint.github.io/" className="project_link" target="_blank" rel="noopener noreferrer"><span>💭</span>MINT</a></h2>
                    <p className="project_description">
                        I was the lead of the ML sub-team of Multifaceted Innovations in NeuroTechnology (MINT). 
                        I helped to build a home-automation app that is controlled using the mind. 
                        I built a data aquisition and preprocessing pipeline, and a simple classification model for EEG data that determines a person's motion intent.
                    </p>
                </div>

                <div className="project_box">
                    <h2 className="project_title"><span>🌏</span>Exchange at Nanyang Technological University</h2>
                    <p className="project_description">
                        I went on exhange at NTU in Singapore. 
                        It was fascinating to experience the multitude of different cultures in and around Singapore, and meeting new people was fun too. 
                        And yes, the food is in fact as good as they say.    
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="" className="project_link" target="_blank" rel="noopener noreferrer"><span>🌌</span>VLBI Image Reconstruction</a></h2>
                    <p className="project_description">
                        I was inspired by the imaging of the black hole M87 to apply machine learning to reconstruct images from incomplete UV-plane data. 
                        The further away an object is, the larger the apeture needed to see it. 
                        Interferometry links many telescopes across the world to piece together an incomplete picture of a distant object.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="" className="project_link" target="_blank" rel="noopener noreferrer"><span>📚</span>Famous Author Natural Language Generation</a></h2>
                    <p className="project_description">
                        My final project for the machine learning course that I took during exchange at NTU. 
                        I investigate increasingly complex language models on generating a text in the style of a famous historical author, and contrast the improvements that each model brings. 
                        I learned a lot about the evolution of language-related algorithms in ML, and gained experience with their properties.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://dogs.rockzhou.com" className="project_link" target="_blank" rel="noopener noreferrer"><span>🐶</span>Doggin' Dog GAN</a></h2>
                    <p className="project_description">
                        A project using generative adversarial networks to generate fake dog images from the Stanford Dogs dataset. 
                        We also tried using an encoding model to apply funky GAN-like features to a real dog image.
                    </p>
                </div>

                <div className="project_box">
                    <h2><a href="https://github.com/Tonyxu74/SmartStop" className="project_link" target="_blank" rel="noopener noreferrer"><span>🛑</span>SmartStop</a></h2>
                    <p className="project_description">
                        Our submission for the Decode Congestion hackathon. 
                        We used a Raspberry Pi with a camera module to control a blinking 4 or 3-way stop sign, improving the intuitiveness and safety of the intersection. I coded the stop sign controller and created a segmentation model to detect vehicles and pedestrians in real-time using the Berkeley DeepDrive dataset.
                    </p>
                </div>

                <div className="bottom"></div>
            </div>
            
        </div>
    )
}

export default Projects