import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import { CardProduct } from "../../cardProducts/CardProducts";
import "./kits.scss"
export const Kits = () => {
    const { titleContent } = useContext(GlobalContext)
    const { kits } = titleContent
    const { h2 , p } = kits

    return(
        <div className="Kits">
            <TitleContent textH2={ h2 } textP={ p }/>   
            <div className="Kits-container">
                <CardProduct href="/plant-lady-react/Collections/Juice-Kit" src="./assets/products/juice-sample.webp" number="$35.00" title="Juice Kit" btn="Add to Cart"/> 
                <CardProduct href="/plant-lady-react/Collections/Tea-Kit" src="./assets/products/tea-kit.webp" number="$35.00" title="Tea Kit" btn="Add to Cart"/>
            </div>
        </div>
    )
} 