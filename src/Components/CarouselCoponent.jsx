import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class CarouselCoponent extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: "linear",
            autoplaySpeed: 2000,
        };
        return (
            <div className="section-carousel alignment text-center">
                <div className="carousel-info">
                    <h1 className="carousel-title">Lorem ipsum dolor sit amet. Distinctio, laborum!</h1>
                    <div className="shop-all-btn">
                        <Link to={'/collection'}>SHOP ALL</Link>
                    </div>
                </div>

                <Slider {...settings}>
                    <div className="carousel-image">
                        <img src="https://www.hm.com/nt-north/uploads/2022/08/FNP-1026A-a-change-in-the-air-3x2-1-1920x1280.jpg" alt="" />
                    </div>
                    <div className="carousel-image">
                        <img src="https://www.hm.com/nt-north/uploads/2022/09/7446A-3x2-FNP--1920x1280.jpg" alt="" />
                    </div>
                    <div className="carousel-image">
                        <img src="https://www.hm.com/nt-north/uploads/2022/08/FN-4046A-3x2-destination-denim-1920x1280.jpg" alt="" />
                    </div>
                    <div className="carousel-image">
                        <img src="https://www.hm.com/nt-north/uploads/2022/09/7066A-3x2-classic-fall-1920x1280.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}
