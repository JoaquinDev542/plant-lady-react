import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import { CardProduct } from "../../cardProducts/CardProducts";
import "./juices.scss"

export const Juices = () => {
    const { titleContent } = useContext(GlobalContext)
    const { juices } = titleContent
    const { h2 , p } = juices

    return(
        <div className="Juices">
            <TitleContent textH2={ h2 } textP={ p }/>  
            <div className="Juices-container">
                <CardProduct href="#" src="../../assets/products/taste-of-sunshine.webp" number="$12.00" title="Taste of Sunshine" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/green-apple-spice.webp" number="$12.00" title="Green Apple Spice" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/morning-flush.webp" number="$12.00" title="the Morning Flush" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/cucumber-lemonade.webp" number="$12.00" title="Cucumber Lemonade" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/blood-cleanse.webp" number="$12.00" title="Blood Cleansed" btn="Add to Cart"/>
            </div>
        </div> 
    )
} 