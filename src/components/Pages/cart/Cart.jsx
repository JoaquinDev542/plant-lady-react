import { Link } from "react-router-dom"
import { Title } from "../../title/Title"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./cart.scss"

export const CartPage= () => {
    return(
        <div className="CartPage">
            <div className="CartPage-content">
                <Title textH2="Shopping Cart"/>
                <EmptyContent/>
                <ZipCode/>
                <ShoppingCartProducts/>
            </div>
            <div className="CartPage-second">
                <TotalSpendCart/>
            </div>
        </div>    
    )
} 

const EmptyContent = () => {
    return (
        <div className="EmptyContent">
            <p className="EmptyContent-p">Your cart is currently empty.</p>
            <Link to="/collections" className="EmptyContent-link">Continue browsing</Link>
        </div>
    )
} 

const ZipCode = () => {
    return (
        <div className="ZipCode">
            <form className="ZipCode-form">
                <input placeholder="What`s your zip code?" type="text" className="ZipCode-input" />
                <button className="ZipCode-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ZipCode-svg" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
        </div>
       
    )
}

const ShoppingCartProducts = () => {
    return (
        <div className="ShoppingCartProducts">
            <ShoppingCartMobileProduct/>
            <ShoppingCartPortatilProduct/>
        </div>
    )
}

const ShoppingCartMobileProduct = () => {
    return (
        <div className="ShoppingCartMobileProduct">
            <LazyLoadImage effect="blur" src="./assets/products/blood-cleanse.webp" alt="" className="ShoppingCartMobileProduct-img" />
            <div className="ShoppingCartMobileProduct-container">
                <span className="ShoppingCartMobileProduct-price">$12.00</span>
                <strong className="ShoppingCartMobileProduct-title">Blood Cleansed</strong>
                <ShoppingCartCounter/>
            </div>
        </div>
    )
}

const ShoppingCartPortatilProduct = () => {
    return (
        <div className="ShoppingCartPortatilProduct">
            <div className="ShoppingCartPortatilProduct-titles">
                <span className="ShoppingCartPortatilProduct-product">Product</span>
                <span className="ShoppingCartPortatilProduct-quantity">Quantity</span>
                <span className="ShoppingCartPortatilProduct-total">Total</span>
            </div>
            <div className="ShoppingCartPortatilProduct-info">
                <div className="ShoppingCartPortatilProduct-contentProduct">
                    <LazyLoadImage effect="blur" src="./assets/products/blood-cleanse.webp" alt="" className="ShoppingCartPortatilProduct-img" />
                    <div className="ShoppingCartPortatilProduct-container">
                        <span className="ShoppingCartPortatilProduct-price">$12.00</span>
                        <div className="ShoppingCartPortatilProduct-title">Blood Cleansed</div>
                    </div>
                </div>
                <div className="ShoppingCartPortatilProduct-contentQuantity">
                    <ShoppingCartCounter/>
                </div>
                <div className="ShoppingCartPortatilProduct-contentTotal">$12.00</div>
            </div>
        </div>
    )
}

const ShoppingCartCounter = () => {
    return (
        <div className="ShoppingCartCounter">
            <div className="ShoppingCartCounter-container">
                <button className="ShoppingCartCounter-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ShoppingCartCounter-icon ShoppingCartCounter-icon--dash" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                    </svg>
                </button>
                <input type="number" value="1" min="1" className="ShoppingCartCounter-input" />
                <button className="ShoppingCartCounter-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ShoppingCartCounter-icon ShoppingCartCounter-icon--plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </button>
            </div>
            <a href="#" className="ShoppingCartCounter-remove">Remove</a>
        </div>
    )
}

const TotalSpendCart = () => {
    return (
        <div className="TotalSpendCart">
            <div className="TotalSpendCart-container">
                <p className="TotalSpendCart-total">Total</p>
                <span className="TotalSpendCart-number">$12.00</span>
                <form className="TotalSpendCart-form">
                    <span className="TotalSpendCart-instruction">Delivery instructions</span>
                    <textarea className="TotalSpendCart-textarea"></textarea>
                    <p className="TotalSpendCart-taxText">Tax included and shipping calculated at checkout</p>
                    <button className="TotalSpendCart-btn">Buy It</button>
                </form>
            </div>
        </div>
    )
}