import React, { useEffect, useState } from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import FilterTreeComponent from '../Components/FilterTreeComponent';
import FooterComponent from '../Components/FooterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { actionQuickview } from '../Redux/filterReducer';
import PaginationComponent from '../Components/PaginationComponent'
import AjaxCart from '../Components/AjaxCart';
import { actionSearchPage } from '../Redux/filterReducer';
import { useNavigate, useSearchParams } from 'react-router-dom';



function SearchTemplate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const quickviewData = useSelector((state) => state.filter.quickviewData);
    let initProductData = useSelector((state) => state.filter.searchPageData);
    const limit = useSelector((state) => state.filter.limit);
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageProduct = currentPage * limit;
    let productData = initProductData.slice(currentPageProduct - limit, currentPageProduct);
    const [openAjaxCart, setOpenAjaxCart] = useState(false);
    useEffect(() => {
        setSearchTerm(window.location.search.replace('?', ''))
        dispatch(actionSearchPage(window.location.search.replace('?', '')));
    }, []);
    useEffect(()=> {
        let pageIndex = searchParams.get('page') !== null ?  searchParams.get('page') * 1 : 1;
        setCurrentPage(pageIndex)
    }, [searchParams])

    const renderProduct = () => {
        return productData.map(product => {
            return <div key={product.id} className="product-container">
                <div className="product-image">
                    <img src={product.image} alt="" />
                    <img src="" alt="" className="hover-image" />
                    <div className="product-actions">
                        <button onClick={() => dispatch(actionQuickview(product))} className="quickview-btn">Quick View</button>
                        <button className="add-to-cart-btn"><span>Add To Cart</span>
                            <svg width="40" height="40" viewBox="0 0 40 40"><g id="boost-pfs-icon-cart" transform="scale(0.03125 0.03125)"><path d="M448.217 818.845c-56.377 0-102.256 45.902-102.256 102.256 0 56.377 45.879 102.256 102.256 102.256s102.256-45.879 102.256-102.256c0-56.379-45.857-102.256-102.256-102.256zM448.217 977.908c-31.312 0-56.807-25.472-56.807-56.807 0-31.312 25.495-56.807 56.807-56.807s56.807 25.495 56.807 56.807c0.003 31.335-25.472 56.807-56.807 56.807z"></path><path d="M768.66 818.845c-56.377 0-102.256 45.902-102.256 102.256 0 56.377 45.879 102.256 102.256 102.256 56.354 0 102.256-45.879 102.256-102.256 0-56.379-45.902-102.256-102.256-102.256zM768.66 977.908c-31.335 0-56.807-25.472-56.807-56.807 0-31.312 25.472-56.807 56.807-56.807 31.29 0 56.807 25.495 56.807 56.807 0.003 31.335-25.517 56.807-56.807 56.807z"></path><path d="M1019.164 259.373c-4.294-5.499-10.886-8.702-17.883-8.702h-768.3l-63.329-233.255c-0.137-0.5-0.5-0.886-0.682-1.364-0.5-1.476-1.25-2.773-2.046-4.090-0.749-1.25-1.431-2.477-2.385-3.545-0.931-1.068-2.021-1.865-3.159-2.726-1.182-0.909-2.317-1.795-3.659-2.454-1.25-0.637-2.591-0.953-3.975-1.364-1.476-0.431-2.907-0.794-4.476-0.909-0.545-0.022-1.001-0.319-1.568-0.319h-124.978c-12.543 0-22.724 10.181-22.724 22.724s10.181 22.724 22.724 22.724h107.595l63.239 232.959 113.572 460.078c2.499 10.156 11.612 17.293 22.065 17.293h558.448c10.452 0 19.543-7.112 22.065-17.293l113.617-460.282c1.7-6.796 0.154-13.955-4.162-19.476zM869.871 710.976h-522.865l-102.39-414.858h727.667l-102.413 414.858z"></path></g></svg>
                        </button>
                        {/* <button className="wishlist-btn">Add to Wishlist</button> */}
                    </div>
                </div>
                <div className="product-info">
                    <h1 className="title">{product.title}</h1>
                    <p className='product-price'>$ {product.price}</p>
                </div>
            </div>
        })
    };

    const renderQuickview = () => {
        return <div className="modal-quickview">
            <div className="quickview-container">
                <button onClick={() => dispatch(actionQuickview('close'))} className='close-quickview'>X</button>
                <div className="quickview-item">
                    <div className="quickview-item-image">
                        <img src={quickviewData.image} alt="" />
                    </div>
                    <div className="quickview-item-info">
                        <div className="title">{quickviewData.title}</div>
                        <div className="price">${quickviewData.price}</div>
                        <div className="quickview-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam, libero fuga doloremque nihil placeat ea obcaecati quam maxime maiores.</div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div className='collection-template alignment search-tempalte'>
            <HeaderComponent />
            <h1 className='search-term'>Search result for {searchTerm}</h1>
            {productData.length > 0 ?
                <div className="section-collection-main">
                    <div className={`collection-main-left-sidebar`}>
                        <FilterTreeComponent />
                    </div>
                    <div className={`collection-main-right-side`}>
                        <div className="product-list-wrapper">
                            {renderProduct()}
                        </div>
                        <PaginationComponent />
                    </div>
                </div>
                :
                <h1>No product found</h1>
            }
            <FooterComponent />
            {quickviewData.title && renderQuickview()}
            {openAjaxCart && <AjaxCart />}
        </div>
    )
}

export default SearchTemplate;