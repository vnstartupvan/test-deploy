import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddToCart } from '../Helper/Features/AjaxCart/ajaxCart'
import { actionQuickview, actionViewProductPage } from '../Redux/filterReducer';
import { AllContext } from '../Templates/CollectionTemplate';

function ProductComponent() {
    const context = useContext(AllContext);
    const navigate = useNavigate();
    const actionToggleCart = context.toggleAjaxCart.actionToggleCart;
    const initProductData = useSelector((state) => state.filter.productList);
    const limit = useSelector((state) => state.filter.limit);
    const currentPage = window.location.search.replace('?page=', '') * 1 || 1;
    const currentPageProduct = currentPage * limit;
    let productData = initProductData.slice(currentPageProduct - limit, currentPageProduct);
    const dispatch = useDispatch();
    const renderProduct = () => {
        return productData.map(product => {
            return <div onClick={() => { dispatch(actionViewProductPage(product)) }} key={product.id} className="product-container">
                <div className="product-image">
                    <div onClick={() => { navigate({ pathname: `/product?${product.id}` }) }}>
                        <img src={product.image} alt="" />
                        <img src="" alt="" className="hover-image" />
                    </div>
                    <div className="product-actions">
                        <button onClick={() => dispatch(actionQuickview(product))} className="quickview-btn">Quick View</button>
                        <button onClick={() => handleAddToCart(product, actionToggleCart, dispatch)} className="add-to-cart-btn">
                            <span>Add To Cart</span>
                            <svg width="40" height="40" viewBox="0 0 40 40"><g id="boost-pfs-icon-cart" transform="scale(0.03125 0.03125)"><path d="M448.217 818.845c-56.377 0-102.256 45.902-102.256 102.256 0 56.377 45.879 102.256 102.256 102.256s102.256-45.879 102.256-102.256c0-56.379-45.857-102.256-102.256-102.256zM448.217 977.908c-31.312 0-56.807-25.472-56.807-56.807 0-31.312 25.495-56.807 56.807-56.807s56.807 25.495 56.807 56.807c0.003 31.335-25.472 56.807-56.807 56.807z"></path><path d="M768.66 818.845c-56.377 0-102.256 45.902-102.256 102.256 0 56.377 45.879 102.256 102.256 102.256 56.354 0 102.256-45.879 102.256-102.256 0-56.379-45.902-102.256-102.256-102.256zM768.66 977.908c-31.335 0-56.807-25.472-56.807-56.807 0-31.312 25.472-56.807 56.807-56.807 31.29 0 56.807 25.495 56.807 56.807 0.003 31.335-25.517 56.807-56.807 56.807z"></path><path d="M1019.164 259.373c-4.294-5.499-10.886-8.702-17.883-8.702h-768.3l-63.329-233.255c-0.137-0.5-0.5-0.886-0.682-1.364-0.5-1.476-1.25-2.773-2.046-4.090-0.749-1.25-1.431-2.477-2.385-3.545-0.931-1.068-2.021-1.865-3.159-2.726-1.182-0.909-2.317-1.795-3.659-2.454-1.25-0.637-2.591-0.953-3.975-1.364-1.476-0.431-2.907-0.794-4.476-0.909-0.545-0.022-1.001-0.319-1.568-0.319h-124.978c-12.543 0-22.724 10.181-22.724 22.724s10.181 22.724 22.724 22.724h107.595l63.239 232.959 113.572 460.078c2.499 10.156 11.612 17.293 22.065 17.293h558.448c10.452 0 19.543-7.112 22.065-17.293l113.617-460.282c1.7-6.796 0.154-13.955-4.162-19.476zM869.871 710.976h-522.865l-102.39-414.858h727.667l-102.413 414.858z"></path></g></svg>
                        </button>
                    </div>
                </div>
                <div className="product-info">
                    <h1 className="title">{product.title}</h1>
                    <p className='product-price'>$ {product.price}</p>
                </div>
            </div>
        })
    };
    return (
        <>
            {renderProduct()}
        </>
    )
}

export default ProductComponent