import React from 'react'
import CollectionDescription from '../Components/CollectionComponents/CollectionDescription'
import HeaderComponent from '../Components/HeaderComponent'
import ToolbarFeature from '../Components/ToolbarFeature'
import ProductListComponent from '../Components/ProductListComponent'
import FilterTreeComponent from '../Components/FilterTreeComponent'
import FooterComponent from '../Components/FooterComponent'
import { useDispatch, useSelector } from 'react-redux'
import { actionQuickview } from '../Redux/filterReducer';
import { useState } from 'react'
import { createContext } from 'react'
import PaginationComponent from '../Components/PaginationComponent'
import AjaxCart from '../Components/AjaxCart'
import { useEffect } from 'react'

export const AllContext = createContext();

function CollectionTemplate() {
    const quickviewData = useSelector((state) => state.filter.quickviewData);
    const [leftSideStyle, setLeftSideStyle] = useState('left-side-toggle');
    const [rightSideStyle, setRightSideStyle] = useState('right-side-toggle');
    const [openAjaxCart, setOpenAjaxCart] = useState(false);
    const [cartQty, setCartQty] = useState(0)
    const dispatch = useDispatch();
    useEffect(()=> {
        let qty = JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')).length : 0;
        setCartQty(qty)
    },[])
    const handleToggle = () => {
        setLeftSideStyle(leftSideStyle === '' ? 'left-side-toggle' : '')
        setRightSideStyle(rightSideStyle === '' ? 'right-side-toggle' : '')
    };
    const handleToggleCart = () => {
        if(openAjaxCart) {
            setOpenAjaxCart(false)
        } else {
            setOpenAjaxCart(true)
        }
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
    const renderAjaxCart = () => {

    }
    const valueContext = {
        toggleFilter: {
            actionToggle: handleToggle,
        },
        toggleAjaxCart: {
            actionToggleCart: handleToggleCart,
        },
        cartQty,
    }
    return (
        <AllContext.Provider value={valueContext}>
            <div className='collection-template alignment'>
                <HeaderComponent />
                <CollectionDescription />
                <ToolbarFeature />
                <div className="section-collection-main">
                    <div className={`collection-main-left-sidebar ${leftSideStyle}`}>
                        <FilterTreeComponent />
                    </div>
                    <div className={`collection-main-right-side ${rightSideStyle}`}>
                        <ProductListComponent />
                        <PaginationComponent />
                    </div>
                </div>
                <FooterComponent />
                {quickviewData.title && renderQuickview()}
                {openAjaxCart &&<AjaxCart />}
            </div>
        </AllContext.Provider>
    )
}

export default CollectionTemplate