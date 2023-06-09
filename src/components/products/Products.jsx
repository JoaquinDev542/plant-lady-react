import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Buttons } from "../buttons/Buttons";
import "./products.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Products = () => {
    return (
        <section className="Products">
            <div className="Products-title">
                <h2 className="Products-h2">Sample our products</h2>
                <p className="Products-p">Shop our Kits</p>
            </div>
            <Cards/>
        </section>
    )
}

const Cards = () => {
    const { products } = useContext( GlobalContext )

    return (
        <div className="Products-cards">
            { products.map ( ( { id , title , btn , src } ) => 
                <div key={ id } className="Products-card">
                    <LazyLoadImage effect="blur" src={ src } alt={ title } className="Products-img" />
                    <div className="Products-padding">
                        <span className="Products-title"> { title } </span>
                        <Buttons href="/plant-lady-react/Kits" className="Products-link" text="Shop Now" title="Shop Now"/>
                    </div>
                </div>
            ) }
        </div>
    )
}