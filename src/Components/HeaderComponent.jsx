import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { AllContext } from '../Templates/CollectionTemplate';
import InstantSearchComponent from './InstantSearchComponent';
import { actionCartList } from '../Redux/filterReducer';
import LoginComponent from './LoginComponent';
import { handleToggle } from '../Helper/Utils/utils';
import {  handleLogout } from '../Redux/shopReducer';

function HeaderComponent() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.shop.user);
    const context = useContext(AllContext);
    const [toggleSearch, setToggleSearch] = useState('');
    let cartQty = useSelector((state) => state.filter.cartList.length);
    const [toggleLogin, setToggleLogin] = useState(false);

    useEffect(() => {
        let initCartList = JSON.parse(localStorage.getItem('cartList'));
        dispatch(actionCartList(initCartList));
    }, [])
    //bug: missing context in homepage/product page/cart page
    const actionToggleCart = window.location.href.includes('collection') ? context.toggleAjaxCart.actionToggleCart : '';
    const disableSearch = () => {
        setToggleSearch('')
    }
    const actionLogout = () => {
        dispatch(handleLogout())
    };
    return (
        <header className='section-header'>
            {/* <div className="header-left">
            </div> */}
            <div className="header-middle text-center">
                <nav className="navigation-list">
                    <Link className='navigation-item' to="/test-deploy">HOME</Link>
                    <Link className='navigation-item' to="/collection">COLLECTION</Link>
                    <Link className='navigation-item' to="/cart">CART</Link>
                </nav>
            </div>
            <div className="header-right">
                <i onClick={() => setToggleSearch('active-instant-search')} className="fa fa-search search-icon-mobile"></i>
                <div className={`instant-search ${toggleSearch}`}>
                    <InstantSearchComponent toggleSearch={disableSearch} />
                </div>
                <div className="login-logout">
                    {!user ?
                        <i onClick={() => { handleToggle(toggleLogin, setToggleLogin) }} className="fa fa-user"></i>
                        :
                        <div onClick={() => { handleToggle(toggleLogin, setToggleLogin) }} className='user-avatar'><img src={user.picture} alt="" /></div>
                    }
                    {toggleLogin && !user && <LoginComponent />}
                    {toggleLogin && user && <div className="gg-btn-wrapper">
                        <div onClick={() => { actionLogout() }} className="logout-btn">
                            <span>Logout</span>
                        </div>
                    </div>}
                </div>
                {window.location.href.includes('collection') ?
                    <div onClick={window.location.href.includes('collection') ? actionToggleCart : ''} className="cart-icon">
                        <span className="cart-qty">
                            {cartQty}
                        </span>
                        <i className="fa fa-shopping-cart"></i>
                    </div> :
                    <Link to={'/cart'} className="cart-icon">
                        <span className="cart-qty">
                            {cartQty}
                        </span>
                        <i className="fa fa-shopping-cart"></i>
                    </Link>}
                {/* <div className="wishlist-icon">
                    <i className="fa fa-heart"></i>
                </div> */}
            </div>
        </header>
    )
}

export default HeaderComponent