import React from 'react';
import st from './latestProject.module.css';
import SliderProject from "./SliderProject/SliderProject";

export const LatestProjects = ({}) => {


    return (
        <div className={st.block_projects}>
            <div className={st.latest_project_title}>
                <div className={st.latest_project_title_name}>Latest projects</div>
                <div className={st.latest_project_title_categories}>All</div>
                <div className={st.latest_project_title_categories}>Building</div>
                <div className={st.latest_project_title_categories}>Interior</div>
                <div className={st.latest_project_title_categories_reset}>View all projects</div>
            </div>
            <div>
                <SliderProject/>
            </div>

        </div>
    );
}
