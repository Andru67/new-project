import React, {useState} from 'react';
import st from './newLatestProjects.module.css';
import {ProjectCardsMAP} from "./ProjectsCards/ProjectCardsMAP";


export const NewLatestProjects = ({}) => {
    const [category, setCategory] = useState('all')
    const handleClick = (qwe) => setCategory(qwe.toLowerCase())


    return (
        <div className={st.wrap}>
            <div className={st.title}>
                <div className={st.name}>
                    NewLatestProjects
                </div>
                <div className={st.views}>
                    <div className={st.btn} onClick={() => handleClick('All')}>All</div>
                    <div className={st.btn} onClick={() => handleClick('Building')}>Building</div>
                    <div className={st.btn} onClick={() => handleClick('Interior')}>Interior</div>
                    <p className={st.show_view}>View <span>{category}</span> projects</p>
                </div>
            </div>
            <ProjectCardsMAP category={category}/>
        </div>
    );
}
