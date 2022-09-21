import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { actionSearch, actionSearchPage } from '../Redux/filterReducer';

function InstantSearchComponent({ toggleSearch }) {
    const [onSearch, setOnSearch] = useState('');
    const [searchKey, setSearchKey] = useState('');
    let resultData = useSelector((state) => state.filter.searchResultData);
    let totleProduct = resultData.length;
    let instantResultData = resultData.slice(0, 6);
    const searchContentRef = useRef();
    const formRef = useRef();
    const naviagate = useNavigate();
    const goToSearchPage = (searchTerm) => {
        naviagate({
            pathname: '/search',
            search: searchTerm,
        })
    };
    const goToProductPage = (productID) => {
        naviagate({
            pathname: '/product',
            search: productID,
        })
    };
    const dispatch = useDispatch();
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (searchContentRef.current && !searchContentRef.current.contains(e.target) && !formRef.current.contains(e.target)) {
                setOnSearch('');
            } else {
                setOnSearch('instant-search-active');
            }
        }
        document.addEventListener('click', handleClickOutSide)
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        }
    }, [])
    const renderResult = () => {
        return instantResultData.map((productResult, index) => {
            return <div key={productResult.id} onClick={() => {goToProductPage(`${productResult.id}`)}} className="instant-search-result-item">
                <div className="item-image">
                    <img src={productResult.image} alt="" />
                </div>
                <div className="instant-search-item-info">
                    <div className="item-title">{productResult.title}</div>
                    <div className="item-price">${productResult.price}</div>
                </div>
            </div>
        })
    }
    const submitSearch = (e, searchTerm) => {
        e.preventDefault();
        dispatch(actionSearchPage(searchTerm));
        goToSearchPage(searchTerm);
        setOnSearch('');
    };
    return (
        <>
            <div className="search-input">
                <span onClick={() => toggleSearch()} className='search-back-btn'></span>
                <form onSubmit={(e) => { submitSearch(e, searchKey) }} ref={formRef} action="">
                    <input type="search" onChange={(e) => { dispatch(actionSearch(e.target.value.trim())); setSearchKey(e.target.value.trim()) }} placeholder="Search..." />
                </form>
                <i className="fa fa-search search-icon"></i>
            </div>
            <div className={`instant-search-result-container ${onSearch}`}>
                {instantResultData.length > 0 && <div ref={searchContentRef} className="instant-search-content-container">
                    <p className='instant-search-title'>PRODUCTS</p>
                    <div className="instant-search-result-content">
                        {renderResult()}
                    </div>
                    <div className="view-all-btn">
                        <Link onClick={() => dispatch(actionSearchPage(resultData))} to={'/search'}>View all {totleProduct} products <i className="fa fa-arrow-right"></i></Link>
                    </div>
                </div>
                }

            </div>
        </>

    )
}

export default InstantSearchComponent