import React from 'react';
import qwe from "../../../../assets/img/slider1.png";
import st from './latestProjects.module.css';

export const LatestProjects = ({}) => {


    return (
        <div>
            <div className={st.latest_project_title}>
                <div className={st.latest_project_title_name}>Latest projects</div>
                <div className={st.latest_project_title_categories}>All</div>
                <div className={st.latest_project_title_categories}>Building</div>
                <div className={st.latest_project_title_categories}>Interior</div>
                <div className={st.latest_project_title_categories_reset}>View all projects</div>
            </div>

        </div>
    );
}
