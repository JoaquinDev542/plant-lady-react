import "./cardProducts.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
// import { Link } from "react-router-dom"
import 'react-lazy-load-image-component/src/effects/blur.css';

export const CardProduct = ( {  href , src  , title , number , btn }  ) => {
    return (
        <div className="cardProducts">
            <a href={ href } className="CardProducts-link">
                <LazyLoadImage src={ src } alt={ title } effect="blur" className="CardProducts-img" />
            </a>
            <div className="CardProducts-content">
                <span className="CardProducts-price">{ number }</span>
                <strong className="CardProducts-name">{ title }</strong>
                <a href="/cart" className="CardProducts-btn">{ btn }</a>
            </div>
        </div>
    )
}