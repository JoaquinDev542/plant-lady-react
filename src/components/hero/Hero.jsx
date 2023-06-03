import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Information } from "../information/Information";
import "./hero.scss"

export const Hero = () => {
    const { main } = useContext(GlobalContext)
    const { hero } = main
    const { title , paragraph } = hero

    return (
        <div className="Hero">
            <Information classDiv="Hero-width" classSection="Hero-section" classH2="Hero-h2" textH2={ title } classP="Hero-p" textP={ paragraph } src="./assets/hero.webp" classImg="Hero-img" classA="Hero-a" href="/collections" textA="Shop Now" />
        </div>
    )
}