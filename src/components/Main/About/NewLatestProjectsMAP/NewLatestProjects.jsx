import React from 'react';
import st from './newLatestProjects.module.css';
import {ProjectCardsMAP} from "./ProjectsCards/ProjectCardsMAP";


export const NewLatestProjects = ({}) => {

    return (
        <div className={st.wrap}>
            <div className={st.title}>
                <div className={st.name}>
                    NewLatestProjects
                </div>
                <div className={st.views}>
                    <div>All</div>
                    <div>Building</div>
                    <div>Interior</div>
                    <p className={st.show_view}>View <span>all</span> projects</p>

                </div>
            </div>
            <ProjectCardsMAP/>
        </div>
    );
}
