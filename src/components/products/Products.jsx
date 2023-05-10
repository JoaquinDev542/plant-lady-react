import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Buttons } from "../buttons/Buttons";
import "./products.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                    <LazyLoadImage src={ src } alt={ title } className="Products-img" />
                    <div className="Products-padding">
                        <span className="Products-title"> { title } </span>
                        <Buttons href="#" className="Products-link" text="Shop Now" title="Shop Now"/>
                    </div>
                </div>
            ) }
        </div>
    )
}