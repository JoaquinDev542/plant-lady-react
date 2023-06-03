import "./cardProducts.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import 'react-lazy-load-image-component/src/effects/blur.css';

export const CardProduct = ( {  href , src  , title , number , btn }  ) => {
    return (
        <div className="cardProducts">
            <Link to={ href } className="CardProducts-link">
                <LazyLoadImage src={ src } alt={ title } effect="blur" className="CardProducts-img" />
            </Link>
            <div className="CardProducts-content">
                <span className="CardProducts-price">{ number }</span>
                <strong className="CardProducts-name">{ title }</strong>
                <Link to="/plant-lady-react/cart" className="CardProducts-btn">{ btn }</Link>
            </div>
        </div>
    )
}