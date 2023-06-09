import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import "./exilirs.scss"
import { CardProduct } from "../../cardProducts/CardProducts";

export const Exilirs = () => {
    const { titleContent } = useContext(GlobalContext)
    const { exilirs } = titleContent
    const { h2 , p } = exilirs

    return(
        <div className="Exilirs">
            <TitleContent textH2={ h2 } textP={ p }/>    
            <div className="Exilirs-container">
                <CardProduct href="/plant-lady-react/Collections/Immnunity-Boost" src="./assets/products/immunity-boost.webp" number="From $10" title="Immunity Boost" btn="Add to Cart"/>
                <CardProduct href="/plant-lady-react/Collections/Tumeric-Juice" src="./assets/products/tumeric-juice.webp" number="$7.00" title="Tumeric Juice" btn="Add to Cart"/>
            </div>
        </div>
    )
} 