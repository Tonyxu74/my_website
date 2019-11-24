export const SmartStop = {
    'summary': 'SmartStop',
    'title': 'SmartStop',
    'header': 'a project improving 3 or 4 way intersections for the city of Vancouver\'s Decode Congestion hackathon',
    'image_urls': [`${process.env.PUBLIC_URL}/smartstop.jpg`, `${process.env.PUBLIC_URL}/smartstop_img.png`, `${process.env.PUBLIC_URL}/smartstop_mask.png`],
    'body': [
        'Decode Congestion is a 48-hour hackathon set up by the City of Vancouver as a way to engage the community in finding solutions to alleviate its traffic problems using “smart city” techniques like road allocation, and data-oriented solutions. ',
        'My team’s solution to this hackathon was SmartStop, a very cheap computer vision-based recognition software that controls 3 or 4 way stop intersections in a more intuitive way. SmartStop used a Raspberry Pi with a camera module that controls a blinking red LED light. While there are no cars, the LED blinks continuously. It detects when a car arrives at the intersection, and stops blinking the light given that it is safe to cross. Simply, blinking means STOP, not blinking means GO. SmartStop is meant to reduce some of the ambiguity that can arise at 4-way intersections, especially when multiple cars come up at once. However, importantly, it does NOT change the rules of the road. Whoever arrives at the stop sign first is allowed to pass first, and pedestrians are given the right of way.',
        'My role in this project was getting the computer vision software working. Over the 48 (very long) hours, I coded up and trained a PyTorch segmentation network to recognize the silhouettes of cars, and sped up training and detection with parallel processing and CUDA. We used the Berkeley DeepDrive car bounding box dataset, and you can see some of our segmentations to the left. The Raspberry Pi took images, sent them with SCP to my laptop, which consolidated information, and told the Pi whether it was safe to cross the street or not. ',
        'From SmartStop, I learned a lot about speeding up machine learning algorithms for real-time detection, and how we can apply machine learning to improve city flow. Going on, I am interested in improving the segmentation algorithm, and improving model sizes by borrowing from YOLO, to move the computation fully onto the Pi. '
    ]
}

export const Sunnybrook = {
    'summary': 'Sunnybrook',
    'title': 'Sunnybrook Research Institute',
    'header': 'summer student researching cancer detection in whole-slide digital images',
    'image_urls': [`${process.env.PUBLIC_URL}/SunnybrookImage.jpg`, ],
    'body': [
        'As a largely new experience for me (first Co-op and first look into research), my summer at Sunnybrook was a time of significant learning. I gained intuition on machine learning, and learned a bit about myself, my personal preferences, and my career aspirations. I worked in Anne Martel’s lab on digital pathology and cancer detection in humongous whole-slide images-we’re talking 60,000 x 100,000 pixels, which are an order of magnitude larger in every dimension than the Hubble Deep Field (a big space picture, take a look <a target="_blank" href="https://svs.gsfc.nasa.gov/30946" class="ExperiencesLink">here</a>).',
        'The majority of my summer’s work was summarized at the Sunnybrook poster presentation competition, which was about showcasing the summer students’ research projects (you can find my poster <a target="_blank" class="ExperiencesLink" href=' + `${process.env.PUBLIC_URL}/SunnybrookResearchPoster.pdf` + '>here</a>). I looked at the way resolution and patch size affected final outputs.', 
        'In the last two weeks at Sunnybrook, I tried entering <a href="http://spiechallenges.cloudapp.net/competitions/14" target="_blank" class="ExperiencesLink">BreastPathQ</a>, an online challenge with 470 participants (as of now). With the knowledge gained from the summer, I was able to place third in the challenge!',
        'Finally, I will be the second author of the paper that a graduate student I am currently working with and I are writing based on our work over the summer. Expect to find the link here once we publish!'
    ]
}

export const MINT = {
    'summary': 'MINT',
    'title': 'UBC Multifaceted Innovations in NeuroTechnology',
    'header': 'electrical designer and machine learning lead for design team looking to build novel neurotech solutions',
    'image_urls': [`${process.env.PUBLIC_URL}/MINTImage.jpg` ],
    'body': [
        'Over the past school year, I was a member of UBC’s Multifaceted (prev. Medical) Innovations in NeuroTechnology team. As an electrical designer, I worked primarily on a full data acquisition and processing pipeline for an electroencephalogram (EEG). Specifically, I looked at filter design, and assisted in debugging the PCB we created. Our final product was lightweight and modular: it was designed to fit perfectly over an Arduino, and netted us third place in the <a href="https://neurotechx.github.io/studentclubs/competition/" target="_blank" class="ExperiencesLink">NeuroTechX student competition</a> fixed-challenge.',
        'This year, the team is changing gears and beginning a new major project, a user-centric, EEG-controlled, smart home device. We are also trying a machine learning-based approach to controlling the app to allow for more complex output modes. With my summer experience, I will be leading the machine learning/data acquisition subteam. I expect to gain a lot of leadership and teaching experience, and a better understanding of applying machine learning to sequential data.', 
    ]
}

export const Tsinghua = {
    'summary': 'Experiencing China',
    'title': 'Experiencing China Summer Program at Tsinghua University',
    'header': 'explored culture and created solutions to improve campus sustainability',
    'image_urls': [`${process.env.PUBLIC_URL}/TsinghuaImage.jpg` ],
    'body': [
        '“Experiencing China” is a 2-week summer program at Tsinghua University. It was an excellent opportunity to both explore my Chinese heritage, and learn about different ways to improve the lives of the youth of tomorrow. The program itself was also inherently multidisciplinary, and I met dozens of people from universities all across the world.',
        'Within the program, we split into a small, 4 person team to tackle an issue surrounding the university campus. The problem we explored was campus sustainability, and our solution was a small incentive with a catchy (corny?) name: “Drink Outside the Box”. This initiative was designed to reduce plastic water bottle usage for international and short-stay students. With a survey and some research, we discovered that many short term students purchased bottled water, as tap water was unsafe to consume. Drink Outside the Box was a comprehensive plan to install water bottle and jug fillers in every international student dormitory, and bring awareness to previously existing water delivery services in the university.'
    ]
}

export const DogGAN = {
    'summary': 'Doggin\' Dog GAN',
    'title': 'Doggin\' Dog GAN',
    'header': 'a full-stack project making cute but mostly creepy dogs',
    'image_urls': [`${process.env.PUBLIC_URL}/Dog1.png`, `${process.env.PUBLIC_URL}/Dog2.png` ],
    'body': [
        'Armed with newfound knowledge and confidence halfway through the summer, a friend and I tackled a fun and exciting project involving our favorite animal (sorry cat lovers). Using the annotations on the Stanford Dogs dataset, we preprocessed the images and augmented using randomCrop and rotations. With this, and various GAN improving strategies, such as using soft labels and adding noise, we ended up with some reasonable dog features. Then, using an encoder to pack images into a noise vector, we created a method to “gannify” a real dog. This was all packaged in an AWS-based Docker app, and you can try it out or read more <a href="https://dogs.rockzhou.com" target="_blank" class="ExperiencesLink">here</a>.',
        'This project was a short but sweet way to apply the knowledge I gained about deep learning over the summer, and learn more about full-stack web development.'
    ]
}

