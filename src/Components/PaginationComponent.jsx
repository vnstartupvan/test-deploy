import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionPagination } from '../Redux/filterReducer';
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isCurrentTemplate } from '../Helper/Utils/utils'
function PaginationComponent() {
    const [offsetTopMain, setOffsetTopMain] = useState(0);
    const navigate = useNavigate();
    let isSearchPage = window.location.href.includes('search');
    let totalProductSearchPage = useSelector((state) => state.filter.searchPageData.length);
    let totalProductCollectionPage = useSelector((state) => state.filter.productList.length);
    let totalProduct = isSearchPage ? totalProductSearchPage : totalProductCollectionPage;
    let limit = useSelector((state) => state.filter.limit);
    let totalPage = Math.ceil(totalProduct / limit);
    let lastPage = totalPage;
    let firstPage = 1;
    // let [currentPage, setCurrentPage] = useState(1);
    let currentPage = window.location.search.replace('?page=','')*1 || 1;
    
    const renderPagination = () => {
        let paginationContent = [];
        for (let i = 1; i <= totalPage; i++) {
            // () => {window.location.search = `page=${i}`; dispatch(actionPagination({ page: i, limit, totalPage, lastPage, firstPage, currentPage })); setCurrentPage(i); window.scrollTo({top: offsetTopMain, behavior: 'smooth'}) }
            paginationContent.push(<li key={i} onClick={() => {  navigate({pathname:`/${isCurrentTemplate()}`, search:`page=${i}`}); window.scrollTo({top: offsetTopMain, behavior: 'smooth'}) }} className={`pagination-item ${currentPage == i ? 'disabled' : ''}`}>{i}</li>)
        }
        return paginationContent;
    };
    useEffect(() => {
        setOffsetTopMain(document.querySelector('.section-collection-main').offsetTop)
    })
    return (
        <div className='pagination-section'>
            <ul className="pagination-content">
                <li onClick={() => { navigate({pathname:`/${isCurrentTemplate()}`, search:`page=${currentPage-1}`}); window.scrollTo({top: offsetTopMain, behavior: 'smooth'}) }} className={`pagination-item pagination-previous-page-btn ${currentPage == firstPage ? 'disabled' : ''}`}><i className="fa fa-arrow-left"></i></li>
                {renderPagination()}
                <li onClick={() => { navigate({pathname:`/${isCurrentTemplate()}`, search:`page=${currentPage+1}`}); window.scrollTo({top: offsetTopMain, behavior: 'smooth'}) }} className={`pagination-item pagination-next-page-btn ${currentPage == lastPage ? 'disabled' : ''}`}><i className="fa fa-arrow-right"></i></li>
            </ul>
        </div>
    )
}

export default PaginationComponent