import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Information } from "../information/Information";
import "./wholistic.scss"

export const Wholistic = () => {
    const { main } = useContext(GlobalContext)
    const { wholistic } = main
    const { title , paragraph } = wholistic
    return (
        <div className="Wholistic">
            <Information classDiv="Wholistic-width" classSection="Wholistic-section" classH2="Wholistic-h2" textH2={ title } classP="Wholistic-p" textP={ paragraph } src="./assets/wholistic.webp"  classImg="Wholistic-img"  classA="Wholistic-a" href="#" textA="Book Now"/>
        </div>
    )
}