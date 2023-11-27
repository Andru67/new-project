import React from 'react';
import {Link, useParams} from "react-router-dom";
import st from "./blog.module.css";
import {mockBlogs} from "../../../assets/mock/mockBlogs";


const GoBack = () => {
    let {id} = useParams();
    const blog = mockBlogs.find(item => item.id === Number(id))

    return (

        <div className={st.blog_wrep}>
            <img src={blog.img} alt={""}/>
            <div>
                <div className={st.span}>{blog.title}</div>
                <p className={st.p2}>{blog.description}</p>
                <Link to={'/blog'} className={st.a2}>Back to blog2</Link>
            </div>
        </div>
    )
};

export default GoBack;