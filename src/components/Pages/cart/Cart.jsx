import { Link } from "react-router-dom"
import { Title } from "../../title/Title"
import "./cart.scss"

export const CartPage= () => {
    return(
        <div className="DeliveryPage">
            <Title textH2="Shopping Cart"/>
            <EmptyContent/>
        </div>    
    )
} 

const EmptyContent = () => {
    return (
        <div className="EmptyContent">
            <p className="EmptyContent-p">Your cart is currently empty.</p>
            <Link to="/products" className="EmptyContent-link">Continue browsing</Link>
        </div>
    )
} 