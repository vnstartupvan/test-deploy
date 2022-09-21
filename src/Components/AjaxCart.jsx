import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from '../Templates/CollectionTemplate';
import { handleDescrease, handleIncrease } from '../Helper/Features/AjaxCart/ajaxCart'
import { useDispatch, useSelector } from 'react-redux';
function AjaxCart() {
    const context = useContext(AllContext);
    const dispatch = useDispatch();
    const actionToggleCart = context.toggleAjaxCart.actionToggleCart;
    let cartQty = useSelector((state) => state.filter.cartList.length);
    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    }, [])
    const renderCartItem = () => {
        if (!cartList) return;
        return cartList.map((item, index) => {
            return <div key={index} className="cart-item">
                <div className="cart-item-image">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-item-info">
                    <div className="cart-item-info-title">{item.title}</div>
                    <div className="cart-item-info-price">${item.price}</div>
                    <div className="cart-info">
                        <div className="cart-item-action">
                            <span onClick={() => { handleDescrease(item, cartList, setCartList, dispatch) }} className='decrease-qty-btn'>-</span>
                            <input className='qty-box' value={item.quantity} type="text" />
                            <span onClick={() => { handleIncrease(item, cartList, setCartList, dispatch) }} className='increase-qty-btn'>+</span>
                        </div>
                        <div className="item-total-price">
                            <span>x ${item.price * item.quantity}</span>
                        </div>
                    </div>
                </div>
            </div>
        })
    };
    return (
        <div className='ajax-cart-section'>
            <div className="ajax-cart-container">
                <div onClick={actionToggleCart} className="ajax-cart-close-btn">
                    X
                </div>
                <div className="ajax-cart-content">
                    <h3 className="ajax-cart-title">
                        Your cart ( {cartQty} item )
                    </h3>
                    <div className="ajax-cart-list">
                        {renderCartItem()}
                    </div>
                    <div className="ajax-cart-bottom">
                        <div className="ajax-cart-subtotal">
                            <span>Subtotal</span>
                            <span></span>
                        </div>
                        <div className="ajax-cart-checkout-action">
                            <div className="cart-view-cart">
                                <Link to={'/cart'} className="view-cart-btn">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjaxCart