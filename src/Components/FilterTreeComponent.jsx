import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionFilter } from '../Redux/filterReducer';
import { isCurrentTemplate } from '../Helper/Utils/utils'
import { prepareOptionData } from '../Helper/Features/Filter/filter';
import { useContext } from 'react';
import { AllContext } from '../Templates/CollectionTemplate';
function FilterTreeComponent() {
    const dispatch = useDispatch();
    //Init data from redux store
    const context = useContext(AllContext);
    const navigate = useNavigate();
    const { productList, selectedOption } = useSelector((state) => state.filter);
    const searchPageData = useSelector((state) => state.filter.searchPageData);
    let data = window.location.href.includes('search') ? searchPageData : productList;
    //selected option
    const { product_type_option, collection_option } = selectedOption;
    //Prepare data 
    const productTypeData = prepareOptionData(data, 'product');
    const collectionTypeData = prepareOptionData(data, 'collection')
    //Render filter option
    const renderFilterOption = (type) => {
        switch (type) {
            case 'product_type':
                return productTypeData.map((option, index) => {
                    return <div key={index} onClick={() => { navigate({pathname:`/${isCurrentTemplate()}`, search:''}) ;dispatch(actionFilter({ eventType: 'product_type', optionValue: option }))}} className="filter-option product-type-option"><p>{option}</p></div>
                });
            case 'collection_type':
                return collectionTypeData.map((option, index) => {
                    return <div key={index} onClick={() =>{ navigate({pathname:`/${isCurrentTemplate()}`, search:''}) ; dispatch(actionFilter({ eventType: 'collection_type', optionValue: option }))}} className="filter-option collection-type-option"><p>{option}</p></div>
                });
            default:
                break;
        }
    }
    return (
        <div className='filter-wrapper'>
            <div onClick={() => {context.toggleFilter.actionToggle()}} className="filter-close-btn">X</div>
            <h3 className="mobile-filter-title">Rifined By</h3>
            <div className="filter-tree filter-tree-container">
                <div className="filter-option-wrapper product-type-option-wrapper">
                    <h5 className='filter-option-title'>{productTypeData && 'Product Type'}</h5>
                    <div className="selected-product-option selected-option">
                        {product_type_option.map((option, index) => {
                            return <span onClick={() => dispatch(actionFilter({eventType:'product_type', optionValue: option, remove: true}))} key={index}>{option}</span>
                        })}
                    </div>
                    {productTypeData && renderFilterOption('product_type')}
                </div>
                <div className="filter-option-wrapper collection-option-wrapper">
                    <h5 className='collection-option-title filter-option-title'>{collectionTypeData && 'Collection Type'}</h5>
                    <div className="selected-option selected-collection-option">
                        {collection_option.map((option, index) => {
                            return <span onClick={() => dispatch(actionFilter({eventType:'collection_type', optionValue: option, remove: true}))} key={index}>{option}</span>
                        })}
                    </div>
                    {collectionTypeData && renderFilterOption('collection_type')}
                </div>
            </div>
        </div>
    )
}

export default FilterTreeComponent