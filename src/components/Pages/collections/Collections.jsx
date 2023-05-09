import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import { CardProduct } from "../../cardProducts/CardProducts"
import "./collections.scss"

export const Collections = () => {
    const { titleContent } = useContext(GlobalContext)
    const { collections } = titleContent
    const { h2 , p } = collections
    return(
        <div className="Collections">
            <TitleContent textH2={ h2 } textP={ p }/>    
            <div className="Collections-container">
                <CardProduct href="#" src="../../assets/products/taste-of-sunshine.webp" number="$12.00" title="Taste of Sunshine" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/green-apple-spice.webp" number="$12.00" title="Green Apple Spice" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/juice-sample.webp" number="$35.00" title="Juice Kit" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/morning-flush.webp" number="$12.00" title="the Morning Flush" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/cucumber-lemonade.webp" number="$12.00" title="Cucumber Lemonade" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/blood-cleanse.webp" number="$12.00" title="Blood Cleansed" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/slim-trim.webp" number="From $60.00" title="Slim & Trim Cleanse" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/sorrel.webp" number="$7.25" title="Sorrel" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/feminine-power.webp" number="$7.25" title="Feminine Power" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/taste-of-delight.webp" number="$7.25" title="Taste of Delight" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/immunity-boost.webp" number="From $10" title="Immunity Boost" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/tea-kit.webp" number="$35.00" title="Tea Kit" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/tumeric-juice.webp" number="$7.00" title="Tumeric Juice" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/the-morning-flush.webp" number="From $60.00" title="The Morning Flush Cleanse" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/blood-cleansed.webp" number="From $60.00" title="Blood Cleansed Cleanse" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/that-time.webp" number="From $60.00" title="That Time of the month Cleanse" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/herbal-coffee.webp" number="$7.25" title="Herbal Coffee" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/five-flavor-herbal-tea.webp" number="$7.25" title="Five Flavor Herbal Tea" btn="Add to Cart"/>
                <CardProduct href="#" src="../../assets/products/super-green-tea.webp" number="$7.25" title="Super Green Tea" btn="Add to Cart"/>
            </div>
        </div>
    )
} 