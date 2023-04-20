import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./delivery.scss"

export const Delivery = () => {
    const { main } = useContext(GlobalContext)
    const { delivery } = main
    const { title , paragraph , btn } = delivery

    return (
        <div className="Delivery">
            <div className="Delivery-width">
                <section className="Delivery-section">
                    <h2 className="Delivery-h2"> { title } </h2>
                    <p className="Delivery-p"> { paragraph } </p>
                    <a className="Delivery-a" href="#" title={ btn }> { btn } </a>
                </section>
                <img src="./assets/delivery.webp" alt={ title } className="Delivery-img" />
            </div>
           
        </div>
    )
}