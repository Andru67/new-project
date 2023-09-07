import React, {useState} from 'react';
import st from './blog.module.css';
import picture from './../../../assets/img/shutterstock_40238476 1.png'
import {NavLink} from "react-router-dom";
import {ReactComponent as Sing} from "./../../../assets/img/Arrow.svg";
import Pagination from "./../../../hooks/Pagination";

const Blogs = () => {

    const imr = 'https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg'
    const rty = picture

    const card =(id) =>  {
        return {
            id: id,
            img: picture,
            title: `Commercial proper in Abu Dhabi ${id}`,
            /*description: qwe,*/
            description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed...',
            text: <NavLink to='#' className={st.a2}>learn more  &nbsp;   <Sing /></NavLink>,
        }
    }

    const cardsPerPage = 12;    // количество карточек которое будет показано

    const mockBlogsData =  {
        blogs: Array(1144).fill(null).map((i,index) => card(index))
    }
    const pageCount = Math.ceil(mockBlogsData.blogs.length / cardsPerPage)  //**
    const [itemOffset, setItemOffset] = useState(0);

    const handlePageClick = (event) => {
        // определяем ID страницы на котокую кликнули {event.selected}
        const newOffset = event.selected * cardsPerPage;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    //const start = itemOffset;
    const end = itemOffset + cardsPerPage;
     const asd = mockBlogsData.blogs.slice(itemOffset, end)    // массив карточек которые будут показаны

    return (
        <div>
        <div className={st.grid_container}>
            {
                asd.map( b => <div key={b.id}>

                        <img src={b.img}/>
                        <div className={st.box}>
                            <span className={st.span}>{b.title}</span>
                            <p className={st.p2}>
                                {b.description}
                            </p>
                            <span  id='btn'>{b.text}</span>
                        </div>
                    </div>
                )
            }

        </div>
            <div className={st.continer}>
                <div className={st.pagination}>
                    <Pagination
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </div>
            </div>


        </div>
    )
}

export default Blogs;