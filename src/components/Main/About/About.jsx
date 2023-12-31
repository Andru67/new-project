import React from 'react';
import AboutHeader from "./AboutHeader/AboutHeader";
import ContactUs from "../../ContactUs/ContactUs";
import {OurExpertise} from "./OurExpertise/OurExpertise";
import {VideoPlayer} from "./VideoPlayer/VideoPlayer";
import {Advertisement} from "./Advertisement/Advertisement";
import {WorkingStaff} from "./WorkingStaff/WorkingStaff";
import {FAQ} from "./FAQ/FAQ";
import {UsefulArticles} from "./UsefulArticles/UsefulArticles";
import {NewLatestProjects} from "./NewLatestProjectsMAP/NewLatestProjects";

const About = () => {
    return (
        <div>
            <AboutHeader/>
            {/*<LatestProjects/>*/}
                <NewLatestProjects/>
            <OurExpertise/>
            <VideoPlayer/>
            <Advertisement/>
            <ContactUs/>
            <div>
                <UsefulArticles/>
            </div>
            <div>
                <WorkingStaff/>
            </div>
            <div>
                <FAQ/>
            </div>
        </div>
    );
};

export default About;