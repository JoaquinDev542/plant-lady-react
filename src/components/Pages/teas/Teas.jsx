import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import "./teas.scss"
import { CardProduct } from "../../cardProducts/CardProducts";

export const Teas = () => {
    const { titleContent } = useContext(GlobalContext)
    const { teas } = titleContent
    const { h2 , p } = teas

    return(
        <div className="Juices">
            <TitleContent textH2={ h2 } textP={ p }/>    
            <div className="Juices-container">
                <CardProduct href="/Collections/Feminine-Power" src="./assets/products/feminine-power.webp" number="$7.25" title="Feminine Power" btn="Add to Cart"/>
                <CardProduct href="/Collections/Sorrel" src="./assets/products/sorrel.webp" number="$7.25" title="Sorrel" btn="Add to Cart"/>
                <CardProduct href="/Collections/Taste-Of-Delight" src="./assets/products/taste-of-delight.webp" number="$7.25" title="Taste of Delight" btn="Add to Cart"/>
                <CardProduct href="/Collections/Herbal-Coffee" src="./assets/products/herbal-coffee.webp" number="$7.25" title="Herbal Coffee" btn="Add to Cart"/>
                <CardProduct href="/Collections/Five-Flavor-Herbal-Tea" src="./assets/products/five-flavor-herbal-tea.webp" number="$7.25" title="Five Flavor Herbal Tea" btn="Add to Cart"/>
                <CardProduct href="/Collections/Super-Green-Tea" src="./assets/products/super-green-tea.webp" number="$7.25" title="Super Green Tea" btn="Add to Cart"/>
            </div>
        </div>
    )
} 