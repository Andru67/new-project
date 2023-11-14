import React from 'react';
import st from './usefulArticles.module.css';
import {MoreLink} from "../../../commons/MoreLink/MoreLink";
import cn from "classnames";


export const UsefulArticles = ({}) => {

    return (
        <div className={st.wrapper}>
            <div className={st.block_title}>
                <div className={st.title}>UsefulArticles</div>
                {/*<div className={st.link}>View all articles <Sing/></div>*/}
                <MoreLink text='View all articles' className={st.link}/>
            </div>
            <div className={st.block_information}>
                <div className={cn(st.img, st.picture1)}>
                    <h3 className={st.h3}>Discover Architecture</h3>
                </div>
                <div className={st.information}>
                    <p className={st.date}>Jule 03, 2022</p>
                    <h3 className={st.h3}>Discover Architecture</h3>
                    <p className={st.text}>Projects for many large domestic and foreign corporations,
                        enterprises in many elds such
                    </p>
                    <div className={st.more_link}>
                        <MoreLink />
                    </div>
                </div>
                <div className={cn(st.img, st.picture2)}>
                    <h3 className={st.h3}>Discover Architecture</h3>
                </div>
            </div>
        </div>
    );
}
