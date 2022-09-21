import React from 'react'
import BannerComponent from '../Components/BannerComponent'
import CarouselCoponent from '../Components/CarouselCoponent'
import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent'

function HomeTemplate() {
    return (
        <div className='section-home'>
            <HeaderComponent />
            <CarouselCoponent />
            <div className="section-about-me">
                <h3>Hi, Im Vance</h3>
                <h3>I'm a Front-end developer!</h3>
                <div className="about-me-content">
                    <p>This section below is the summary of this project</p>
                    <h4>Technologies</h4>
                    <p>Programming language: Javascript</p>
                    <p>Framework: React JS</p>
                    <p>State management: Redux</p>
                    <h3>Main Features:</h3>
                    <div>
                        <ul>
                            <li><p className="em-text">Filter: </p> <p>Allowing customer filter products through product's attributes.</p></li>
                            <li><p className="em-text">Search: </p> <p>Including instant search pop up and search template: allowing customers search by their search term then they will be received those products which match with the search term on the instant search or direct to the search template to see full result.</p></li>
                            <li><p className="em-text">Sorting:</p> <p> Alphabetically order A-Z, Alphabetically Z-A, Highest price, Lowest Price</p></li>
                            <li><p className="em-text">Product Quickview: </p> <p>Showing product on the collection page without direct to the product template</p> </li>
                            <li><p className="em-text">Add to cart button</p> <p>Adding product to the cart on the collection page without being directed to the cart template</p></li>
                            <li><p className="em-text">Cart Drawer: </p> <p>Show the cart list on the collection template</p> </li>
                            <li><p className="em-text">Add/Remove</p> <p>product on the cart list</p> </li>
                            <li><p className="em-text">Login/Logout</p> <p>Integrated with google account</p> </li>
                        </ul>
                    </div>

                </div>
            </div>
            <BannerComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeTemplate