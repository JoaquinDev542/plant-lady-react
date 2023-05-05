import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Information } from "../information/Information";
import "./orders.scss"

export const Orders = () => {
    const { main } = useContext(GlobalContext)
    const { orders } = main
    const { title , paragraph } = orders
    return (
        <div className="Orders">
            <Information classDiv="Orders-width" classSection="Orders-section" classH2="Orders-h2" textH2={ title } classP="Orders-p" textP={ paragraph } src="./assets/orders.webp"  classImg="Orders-img"  classA="Orders-a" href="#" textA="Let´s talk"/>
        </div>
    )
}