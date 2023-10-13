import React, {useState} from 'react';
import st from './blog.module.css';
import picture from './../../../assets/img/shutterstock_40238476 1.png'
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as Sing} from "./../../../assets/img/Arrow.svg";
import Pagination from "../../Pagination";
import cn from "classnames";
import {mockBlogs} from "../../../assets/mock/mockBlogs";
import {MoreLink} from "../../commons/MoreLink/MoreLink";


// const card = (id) => {
//     return {
//         id: id,
//         img: picture,
//         title: `Commercial proper in Abu Dhabi ${id}`,
//         /*description: qwe,*/
//         description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed...',
//         text: <Link to={`/blog/${id}`} className={st.a2}>learn more<Sing/></Link>,
//     }
// }
//
// export const mockBlogsData = {
//     blogs: Array(1144).fill(null).map((i, index) => card(index))
// }

// export const mockBlogs = Array(1144).fill(null).map((i, index) => card(index))

const Blogs = ({}) => {

    const imr = 'https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg'
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
    const asd = mockBlogs.slice(itemOffset, end)    // массив карточек которые будут показаны

    return (
        <div>
            <div className={st.grid_container}>
                {
                    asd.map(b => <div key={b.id}>

                            <img src={b.img} alt={''}/>
                            <div className={st.box}>
                                <span className={st.span}>{b.title}</span>
                                <p className={cn(st.p2, st.short)}>
                                    {b.description}
                                </p>
                                {/*<Link to={`/blog/${b.id}`} className={st.a2}>learn more<Sing/></Link>*/}
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