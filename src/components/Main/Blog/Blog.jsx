import React, {Component} from 'react';
import st from './blog.module.css'
import {ReactComponent as Search} from '../../../assets/img/search.svg';
import LearnMore from "./LearnMore";
import Blogs from "./Blogs";

const Blog = () => {

    return (
        <div>
            <div className={st.title_blog}>
                {/* <Modal/>*/}
                <div>
                    <h1 className={st.text_blog}>Blog</h1>
                </div>
                <div>
                    <form className={st.form}>
                        <div>
                            <input className={st.search} placeholder='search...'/>
                        </div>

                        <div className={st.submit}>
                            <Search/>
                        </div>
                    </form>

                </div>

            </div>
            <div className={st.container}>
                <ul >                           {/*<ul className={st.grid_container}>*/}

                   {/* <li><LearnMore /></li>*/}

                    <li><Blogs /></li>

                </ul>
            </div>
        </div>
    );
}

export default Blog;

