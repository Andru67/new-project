import React from 'react';
import picture from "../../../assets/img/shutterstock_40238476 1.png";
import {Link, useParams} from "react-router-dom";
import st from "./blog.module.css";
import {ReactComponent as Sing} from "./../../../assets/img/Arrow.svg";
// import {mockBlogsData} from "./Blogs";
import {mockBlogs} from "../../../assets/mock/mockBlogs";


const LearnMor = () => {
    let {id} = useParams();
    const blog = mockBlogs.find(item => item.id === Number(id))

    console.log(blog)

    return (

        <div className={st.blog_wrep}>

            <img src={blog.img} alt={""}/>

            <div>

                <div className={st.span}>{blog.title}</div>

                <p className={st.p2}>{blog.description}</p>

                <Link to={'/blog'} className={st.a2}>Back to blog</Link>
            </div>

        </div>
    )


};

export default LearnMor;