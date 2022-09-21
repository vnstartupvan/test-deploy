import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import FooterComponent from '../Components/FooterComponent';
import HeaderComponent from '../Components/HeaderComponent';
import { Link } from "react-router-dom";
import {handleAddToCart} from '../Helper/Features/AjaxCart/ajaxCart'

function ProductTemplate() {
    const { search } = useLocation();
    const dispatch = useDispatch();
    const initData = useSelector((state) => state.filter.originalProductList);
    // const productData = data;
    const data = initData.find(item => item.id == search.replace('?', ''))
    return (
        <div className='product-template'>
            <HeaderComponent />
            <div className="breadcrumb">
                <div className="page-width">
                    <Link to={'/test-deploy'}>Home</Link>
                    <span className="arrow"> {'>'} </span>
                    <Link to={'/collection'}>Collection</Link>
                    <span className="arrow"> {'>'} </span>
                    <span>{data.title}</span>
                </div>
            </div>
            <div className="section-main-product">
                <div className="section-main-product-wrapper">
                    <div className="main-product-image">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="main-product-info">
                        <div className="main-product-info-title">
                            {data.title}
                        </div>
                        <div className="main-product-info-price">
                            ${data.price}
                        </div>
                        <div className="main-product-review">
                            <div className="review-icon">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="review-content">
                                1 Review
                            </div>
                        </div>
                        <div className="main-product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam, id maxime eaque explicabo earum quae. Molestias tempora accusamus doloribus illo facilis cupiditate doloremque ipsam quae commodi nesciunt voluptatum laboriosam excepturi saepe labore consectetur, ad ea eius similique quos. Eligendi magnam nisi perferendis harum soluta quibusdam explicabo nobis alias accusamus?</p>
                        </div>
                        <div className="main-product-actions">
                            <button className="main-quickview-btn">Buy it now</button>
                            <button onClick={()=> handleAddToCart(data, '' ,dispatch)} className="main-add-to-cart-btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default ProductTemplate                      