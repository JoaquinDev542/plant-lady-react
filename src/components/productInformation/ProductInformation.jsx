import { Buttons } from "../buttons/Buttons"
import "./productInformation.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ProductInformation = ( { img , title , price , oz , subtitle , secondP , thirdP , fourthP , fifthP} ) => {
    return (
        <>
            <div className="ProductInformation">
                <LazyLoadImage effect="blur" src={ img } alt={ title } className="ProductInformation-img" />
                <div className="ProductInformation-container">
                    <section className="ProductInformation-basicInformation">
                        <span className="ProductInformation-span">Plant Lady Juice Co.</span>
                        <h2 className="ProductInformation-h2">{ title }</h2>
                        <span className="ProductInformation-number">{ price }</span>
                        <span className="ProductInformation-oz">{ oz }</span>
                    </section>
                    <div className="ProductInformation-information">
                        <div className="ProductInformation-add">
                            <div className="ProductInformation-counter">
                                <button className="ProductInformation-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ProductInformation-svg ProductInformation-svg--dash" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                </button>
                                <form className="ProductInformation-form">
                                    <input min="1" value="1" type="number" className="ProductInformation-input" />
                                </form>
                                <button className="ProductInformation-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ProductInformation-svg ProductInformation-svg--plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </button>
                            </div>
                            <Buttons title="Add to Cart" href="/plant-lady-react/cart" text="Add to Cart"/>
                        </div>
                        <div className="ProductInformation-content">
                            <p className="ProductInformation-p">Pay in 4 interest-free installments for orders over $50.00 with Paypal</p>
                            <strong className="ProductInformation-subtitle">{ subtitle }</strong>
                            <p className="ProductInformation-p">{ secondP }</p>
                            <h3 className="ProductInformation-h3">Health Benefits</h3>
                            <p className="ProductInformation-p">{ thirdP }</p>
                            <p className="ProductInformation-p">{ fourthP }</p>
                            <h3 className="ProductInformation-h3">Ingredients</h3>
                            <p className="ProductInformation-p">{ fifthP }</p>
                        </div>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </>
    )
}

export const SocialMedia = () => {
    return (
        <div className="SocialMedia">
            <h3 className="SocialMedia-h3">Share</h3>
            <div className="SocialMedia-container">
                <a href="#" className="SocialMedia-a">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="SocialMedia-svg" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    <span className="SocialMedia-socialMediaName">Facebook</span>
                </a>
                <a href="#" className="SocialMedia-a">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="SocialMedia-svg" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                    </svg>
                    <span className="SocialMedia-socialMediaName">Pinterest</span>
                </a>
                <a href="#" className="SocialMedia-a">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="SocialMedia-svg" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    <span className="SocialMedia-socialMediaName">Twitter</span>
                </a>
            </div>
        </div>
    )
}