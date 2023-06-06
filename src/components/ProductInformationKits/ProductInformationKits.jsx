import { useState } from "react"
import { Buttons } from "../buttons/Buttons"
import { SocialMedia } from "../productInformation/ProductInformation"

export const ProductInformationKits = ( { img , title , price , subtitle , secondP } ) => {

    const [ count , setCount ] = useState(1)

    function decrementCount() {
        setCount(count - 1)
    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <>
            <div className="ProductInformation">
                <img src={ img } alt={ title } className="ProductInformation-img" />
                <div className="ProductInformation-container">
                    <section className="ProductInformation-basicInformation">
                    <span className="ProductInformation-span">Plant Lady Juice Co.</span>
                        <h2 className="ProductInformation-h2">{ title }</h2>
                        <span className="ProductInformation-number">{ price }</span>
                    </section>
                    <div className="ProductInformation-information">
                        <div className="ProductInformation-add">
                            <div className="ProductInformation-counter">
                            <button onClick={ decrementCount } className="ProductInformation-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ProductInformation-svg ProductInformation-svg--dash" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                </button>
                                <span className="ProductInformation-count">{ count }</span>
                                <button onClick={ incrementCount } className="ProductInformation-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ProductInformation-svg ProductInformation-svg--plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </button>
                            </div>
                            <Buttons title="Add to Cart" href="/cart" text="Add to Cart"/>
                        </div>
                        <div className="ProductInformation-content">
                            <p className="ProductInformation-p">Pay in 4 interest-free installments for orders over $50.00 with Paypal</p>
                            <strong className="ProductInformation-subtitle">{ subtitle }</strong>
                            <p className="ProductInformation-p">{ secondP }</p>
                        </div>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </>
    )
}