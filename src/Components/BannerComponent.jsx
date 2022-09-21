import React, { useEffect, useState } from 'react';
import bannerJsonData from '../Data/bannerData.json'

function BannerComponent() {
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
        setBannerData(bannerJsonData)
    }, [])
    const renderBanner = () => {
        return bannerData.map(banner => {
            return <div key={banner.id} className="banner-item">
                <div className="banner-image">
                    <img src={banner.img} alt="" />
                </div>
                <div className="banner-info">
                    <div className="banner-info-title">
                        <h3>{banner.title}</h3>
                    </div>
                    <div className="banner-info-text">
                        <p>{banner.text}</p>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className='section-banner'>
            <div className="banner-wrapper">
                {renderBanner()}
            </div>
        </div>
    )
}

export default BannerComponent