import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent'
import { handleDescrease, handleIncrease } from '../Helper/Features/AjaxCart/ajaxCart';
import { initData } from '../Helper/Utils/utils';

function CartTemplate() {
    const [cartList, setCartList] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        initData('cartList', setCartList);
    }, []);
    const totalPrice = cartList.reduce((sum, item) => {
        return sum += item.price * item.quantity;
    }, 0)
    const renderCartItem = () => {
        return cartList.map(item => {
            return <div key={item.id} className="cart-item">
                <div className="cart-item-product">
                    <div className="item-image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="item-info">
                        <p className="item-info-title">{item.title}</p>
                    </div>
                </div>
                <div className="cart-item-price">${item.price}</div>
                <div className="cart-item-quantity">
                    <div className="cart-item-info">
                        <div className="cart-item-action">
                            <span onClick={() => { handleDescrease(item, cartList, setCartList, dispatch) }} className='decrease-qty-btn'>-</span>
                            <input className='qty-box' value={item.quantity} type="text" />
                            <span onClick={() => handleIncrease(item, cartList, setCartList, dispatch)} className='increase-qty-btn'>+</span>
                        </div>
                    </div>
                </div>
                <div className="cart-item-total">${item.quantity * item.price}</div>
            </div>
        })
    }
    return (
        <div className='cart-template'>
            <HeaderComponent />
            <div className="main-cart">
                <div className="cart-title">
                    <h1>Shopping Cart</h1>
                </div>
                <div className="cartlist">
                    <div className="cart-list-heading">
                        <span style={{ textAlign: 'left' }}>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-list-items">
                        {renderCartItem()}
                    </div>
                    <div className="totalPrice"><span>Total: ${totalPrice}</span></div>
                </div>
            </div>
            
            <FooterComponent />
        </div>
    )
}

export default CartTemplate

