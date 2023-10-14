import React from 'react';
import st from './about.module.css'
import SlicerAbout from "./SlicerAbout/SlicerAbout";
import {LatestProjects} from "./LatestProjects/LatestProjects";

const About = () => {
    return (
        <div>
            <SlicerAbout/>
            <div className={st.block_projects}>
                <LatestProjects/>
            </div>
            <div className={st.block_expertyise}>
                <p className={st.block_expertyise_p}>Our expertise</p>
                <h3 className={st.block_expertyise_h3}>"The best apartment in Dubai" we will find your dream</h3>
                <p className={st.block_expertyise_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam
                    egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur
                    vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec
                    massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu
                    tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor
                    massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor
                    dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={st.block_player}>
                This was play vidio
            </div>
            <div className={st.block_container}>
                <p className={st.block_description}>“Don’t limit yourself. Many people limit themselves to what they
                    think they can do. You can go as far as your mind lets you. What you believe, remember, you can
                    achieve.” <span className={st.block_description_span}>— Mary Kay Ash</span> </p>
            </div>
        </div>
    );
};

export default About;