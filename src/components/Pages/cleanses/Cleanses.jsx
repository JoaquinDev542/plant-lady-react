import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import { CardProduct } from "../../cardProducts/CardProducts";
import "./cleanses.scss"

export const Cleanses = () => {
    const { titleContent } = useContext(GlobalContext)
    const { cleanses } = titleContent
    const { h2 , p } = cleanses

    return(
        <div className="Cleanses">
            <TitleContent textH2={ h2 } textP={ p }/>    
            <div className="Cleanses-container">
                <CardProduct href="/Collections/Slim-And-Trim-Cleanse" src="./assets/products/slim-trim.webp" number="From $60.00" title="Slim & Trim Cleanse" btn="Add to Cart"/>
                <CardProduct href="/Collections/The-Morning-Flush-Cleanse" src="./assets/products/the-morning-flush.webp" number="From $60.00" title="The Morning Flush Cleanse" btn="Add to Cart"/>
                <CardProduct href="/Collections/Blood-Cleansed-Cleanse" src="./assets/products/blood-cleansed.webp" number="From $60.00" title="Blood Cleansed Cleanse" btn="Add to Cart"/>
                <CardProduct href="/Collections/That-Time-Of-The-Month-Cleanse" src="./assets/products/that-time.webp" number="From $60.00" title="That Time of the month Cleanse" btn="Add to Cart"/>
            </div>
        </div>
    )
} 