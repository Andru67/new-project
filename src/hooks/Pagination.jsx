import React, {useEffect, useState} from 'react';
import st from "../components/Main/Blog/blog.module.css";
import {ReactComponent as Left} from "../assets/img/left.svg";
import {ReactComponent as Right} from "../assets/img/right.svg";
import ReactPaginate from "react-paginate";
import mockBlogDate from "../assets/mock/mockBlogDate";



const Pagination = ({ pageCount, handlePageClick}) => {
    //** https://www.npmjs.com/package/react-paginate (в ссылке глюл, перейте куда-то и вернуться назад)

    return (

        <div>
            <ReactPaginate
                pageCount={pageCount}
                containerClassName="pagination_container"
                activeClassName="pagination_active"
                pageClassName="pagination_pade"
                pageLinkClassName="pagination_page_link"
                nextClassName="pagination_page_next"
                previousClassName="pagination_page_previous"
                 onPageChange={handlePageClick}
                nextLabel=<Right/>
                previousLabel=<Left/>
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                forcePage={0}
            />
        </div>
    );
};

export default Pagination;