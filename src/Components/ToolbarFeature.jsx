import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux'
import { AllContext } from '../Templates/CollectionTemplate';
import SortingComponent from './SortingComponent';


function ToolbarFeature() {
    const data = useSelector((state) => state.filter.productList);
    const context = useContext(AllContext);
    const actionFilter = context.toggleFilter.actionToggle;
    const totalProduct = data.length;
    return (
        <div className='section-toolbar alignment'>
            <div className="toolbar-left-side">
                <span onClick={actionFilter} className="toggle-filter-btn">
                    Filter <i className="fa fa-filter"></i>
                </span>
            </div>
            <div className="toolbar-mid-side">Total Product: {totalProduct}</div>
            <div className="toolbar-right-side">
                <SortingComponent />
            </div>
        </div>
    )
}

export default ToolbarFeature