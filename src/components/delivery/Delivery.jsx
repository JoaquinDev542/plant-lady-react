import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Information } from "../information/Information";
import "./delivery.scss"

export const Delivery = () => {
    const { main } = useContext(GlobalContext)
    const { delivery } = main
    const { title , paragraph } = delivery

    return (
        <div className="Delivery">
            <Information classDiv="Delivery-width" classSection="Delivery-section" classH2="Delivery-h2" textH2={ title } classP="Delivery-p" textP={ paragraph } src="./assets/delivery.webp" classImg="Delivery-img" classA="Delivery-a" href="#" textA="How we Delivery"/>
        </div>
    )
}

