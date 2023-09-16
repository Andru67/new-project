import React from 'react';
import picture from "../../../assets/img/shutterstock_40238476 1.png";
import {Link, useParams} from "react-router-dom";
import st from "./blog.module.css";
import {ReactComponent as Sing} from "./../../../assets/img/Arrow.svg";
import {mockBlogsData} from "./Blogs";


const LearnMor = () => {
    let {id} = useParams();
    const blog = mockBlogsData.blogs.find(item => item.id === Number(id))

    console.log(blog)

    return (
        <div className={st.continer}>
            222


            <img src={blog.img}/>

            <div className={st.box}>

                <span className={st.span}>{blog.title}</span>

                <p className={st.p2}>{blog.description}</p>

                <span>Back  &nbsp;   <Sing/></span>
            </div>

        </div>
    )


    /* return (
         <div>
             Hello

             {
                 <div>
                     <img src={card.img}/>

                     <div className={card.box}>
                         <span className={st.span}>{card.title}</span>
                         <p className={st.p2}>
                             {card.description}
                         </p>
                         <span id='btn'>{card.text}</span>

                     </div>
                 </div>
             }
             333
         </div>*/

};

export default LearnMor;