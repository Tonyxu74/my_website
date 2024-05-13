import React from 'react'

function Publication({name, authors, tony_ind, link, details}){

    const author_list = authors.map((author, ind) => {
        if (ind != tony_ind) {
            if (ind == authors.length - 1) {
                return <>{author}</>;
            }
            else {
                return <>{author}, </>;
            }
        }
        else {
            if (ind == authors.length - 1) {
                return <><strong>{author}</strong></>;;
            }
            else {
                return <><strong>{author}</strong>, </>;;
            }
        }  
    });

    return(
        <div className="project_box">
            <h2><a href={link} className="publications_link" target="_blank" rel="noopener noreferrer">{name}</a></h2>
            <p>{author_list}</p>
            <p><i>{details}</i></p>
        </div>
    )
}

function Publications(){
    return(
        <div className="publications_main" id="Publications">
            <div className="projects_text">
                <h1>Publications</h1>

                <Publication name="Interpretable Assessment of Lymph Nodes in Specimens Post-Neoadjuvant Systemic Therapy Using AI" 
                authors={["Dina Bassiouny", "Tony Xu", "Chetan Srinidhi", "Michael Sze Wai Lam", "Sharon Nofech-Mozes", "Anne Martel"]}
                tony_ind={1}
                link="https://uscap.org/uscap-annual-meeting/"
                details="United States and Canadian Academy of Pathology Annual Meeting, 2024"
                />

                <Publication name="Masked Image Modeling for Label-Efficient Segmentation in Two-Photon Excitation Microscopy" 
                authors={["Tony Xu", "Matthew Rozak", "Edward Ntiri", "Adrienne Dorr", "James Mester", "Bojana Stefanovic", "Anne Martel", "Maged Goubran"]}
                tony_ind={0}
                link="https://link.springer.com/chapter/10.1007/978-3-031-44917-8_11"
                details="MICCAI Workshop in Medical Image Learning with Limited and Noisy Data, 2023"
                />

                <Publication name="Self supervised contrastive learning for digital histopathology" 
                authors={["Ozan Ciga", "Tony Xu", "Anne L. Martel"]}
                tony_ind={1}
                link="https://www.sciencedirect.com/science/article/pii/S2666827021000992"
                details="Machine Learning with Applications, 2022"
                />
            
                <Publication name="Overcoming the limitations of patch-based learning to detect cancer in whole slide images" 
                authors={["Ozan Ciga", "Tony Xu", "Sharon Nofech-Mozes", "Shawna Noy", "Fang-I Lu", "Anne L. Martel"]}
                tony_ind={1}
                link="https://www.nature.com/articles/s41598-021-88494-z"
                details="Scientific Reports, 2021"
                />

            </div>
            
        </div>
    )
}

export default Publications