import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./testimonials.scss"

export const Testimonials = () => {
    return (
        <section className="Testimonials">
            <div className="Testimonials-title">
                <h2 className="Testimonials-h2">Testimonials</h2>
                <p className="Testimonials-p">Here`s what our Plant People have to say</p>
            </div>
            <Testimonial/>
        </section>
    )
}

const Testimonial = () => {
    const { testimonials } = useContext( GlobalContext )

    return(
        <div className="Testimonials-container">
            <div className="Testimonials-cards">
                { testimonials.map( ( { id , typeOfProduct , name , quote , classNames } ) =>
                    <div key={ id } className={`Testimonials-card Testimonials-card--${classNames}`}>
                        <h3 className="Testimonials-h3"> { typeOfProduct } </h3>
                        <span className="Testimonials-span"> { name } </span>
                        <p className="Testimonials-quote"> { quote } </p>
                    </div>
                ) }
            </div>
            <Arrows/>
        </div>
        
    )
}

const Arrows = () => {
    return (
        <div className="Testimonials-arrows">
            <a href="#" className="Testimonials-arrow Testimonials-arrow--left">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="Testimonials-arrowImg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>      
            </a>
            <Dots/>
            <a href="#" className="Testimonials-arrow Testimonials-arrow--right">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="Testimonial-arrowImg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
            </a>
        </div>
    )
}

const Dots = () => {
    return (
        <div className="Testimonials-dots">
            <div className="Testimonials-dot"></div>
            <div className="Testimonials-dot"></div>
            <div className="Testimonials-dot"></div>
            <div className="Testimonials-dot"></div>
            <div className="Testimonials-dot"></div>
        </div>
    )
}