import React from 'react'
import jwt_decode from 'jwt-decode'
import { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { AllContext } from '../Templates/CollectionTemplate';
import InstantSearchComponent from './InstantSearchComponent';
import { handleLogin, handleLogout } from '../Redux/shopReducer';
import { actionCartList } from '../Redux/filterReducer';

function HeaderComponent() {
    const dispatch = useDispatch();
    const [toggleLogin, setToggleLogin] = useState(false);
    const [toggleLogout, setToggleLogout] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(AllContext);
    const [toggleSearch, setToggleSearch] = useState('');
    const [cartList, setCartList] = useState([]);
    let cartQty = useSelector((state) => state.filter.cartList.length);
    const user = useSelector((state) => state.shop.user);
    useEffect(() => {
        const handleCredentialResponse = response => {
            const user = jwt_decode(response.credential)
            dispatch(handleLogin(user))
        };
        window.onload = () => {
            window.google.accounts.id.initialize({
                client_id: '658443136711-li4ip94et41bdj04vkuovqev658mpoeu.apps.googleusercontent.com',
                callback: handleCredentialResponse
            });
            setIsLoading(true)
        }

        if (toggleLogin) {
            window.google.accounts.id.renderButton(
                document.querySelector('.gg-login-btn'),
                { type: '', theme: 'outline', size: '' }
            )
        }

    }, [toggleLogin, isLoading])
    useEffect(() => {
        let initCartList = JSON.parse(localStorage.getItem('cartList'));
        setCartList(initCartList);
        dispatch(actionCartList(initCartList));
    }, [])
    //bug: missing context in homepage/product page/cart page
    const actionToggleCart = window.location.href.includes('collection') ? context.toggleAjaxCart.actionToggleCart : '';
    const disableSearch = () => {
        setToggleSearch('')
    }
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
                {toggleLogin && !user ? <div className="gg-login-btn"></div> : toggleLogout && user && <button onClick={() => dispatch(handleLogout())} className='logout-btn'>Logout</button>}
                <div className="login-logout">
                    {!user ? <i onClick={() => { if (!toggleLogin) { setToggleLogin(true) } else { setToggleLogin(false) } }} className="fa fa-user"></i> : <div onClick={() => { if (!toggleLogout) { setToggleLogout(true) } else { setToggleLogout(false) } }} className='user-avatar'><img src={user.picture} alt="" /></div>}
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