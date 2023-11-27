import React, {useState} from 'react';
import st from './blog.module.css';
import Pagination from "../../Pagination";
import cn from "classnames";
import {mockBlogs} from "../../../assets/mock/mockBlogs";
import {MoreLink} from "../../commons/MoreLink/MoreLink";


const Blogs = ({}) => {
    const cardsPerPage = 12;    // количество карточек которое будет показано
    const pageCount = Math.ceil(mockBlogs.length / cardsPerPage)  //**
    const [itemOffset, setItemOffset] = useState(0);
    const handlePageClick = (event) => {
        // определяем ID страницы на котокую кликнули {event.selected}
        const newOffset = event.selected * cardsPerPage;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    //const start = itemOffset;
    const end = itemOffset + cardsPerPage;
    const pageBlogs = mockBlogs.slice(itemOffset, end)    // массив карточек которые будут показаны

    return (
        <div>
            <div className={st.grid_container}>
                {
                    pageBlogs.map(b => <div key={b.id}>

                            <img src={b.img} alt={''}/>
                            <div className={st.box}>
                                <span className={st.span}>{b.title}</span>
                                <p className={cn(st.p2, st.short)}>
                                    {b.description}
                                </p>
                                <MoreLink path={`/blog/${b.id}`} className={st.a2}/>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className={st.container}>
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