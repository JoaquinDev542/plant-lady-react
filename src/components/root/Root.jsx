import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import { Information } from "../information/Information";
import "./root.scss"

export const Root = () => {
    const { main } = useContext(GlobalContext)
    const { root } = main
    const { title , paragraph } = root

    return (
        <div className="Root">
            <Information classDiv="Root-width" classSection="Root-section" classH2="Root-h2" textH2={ title } classP="Root-p" textP={ paragraph } src="./assets/root.webp" classImg="Root-img" classA="Root-a" href="/about" textA="Our Story"/>
        </div>
    )
}