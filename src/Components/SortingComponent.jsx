import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actionSort } from '../Redux/filterReducer';


function SortingComponent() {
    const dispatch = useDispatch();
    const sortData = [
        'Alphabetical A-Z',
        'Alphabetical Z-A',
        'Highest Price',
        'Lowest Price',
    ];
    const [isSortSelected, setIsSortSelected] = useState(false);
    const [selectedSorting, setSelectedSorting] = useState(sortData[0]);

    const renderSortOption = () => {
        return sortData.map((option, index) => {
            return <li key={index} className='sort-option' onClick={() => {
                dispatch(actionSort({ value: option }))
                setSelectedSorting(option)
            }}>{option}</li>
        })
    }
    const handleSortBtn = () => {
        if (!isSortSelected) {
            setIsSortSelected(true)
        } else {
            setIsSortSelected(false)
        }
    }
    return (
        <div className='sorting-toolbar'>
            <div onClick={handleSortBtn} className='sort-btn'>{selectedSorting}</div>
            {isSortSelected && <ul className="sort-container">
                {renderSortOption()}
            </ul>}
        </div>
    )
}

export default SortingComponent