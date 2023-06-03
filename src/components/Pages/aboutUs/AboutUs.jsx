import { useContext } from "react"
import { GlobalContext } from "../../../provider/Provider"
import { Title } from "../../title/Title"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./aboutUs.scss"

export const AboutUs = () => {
    return(
        <div className="DeliveryPage">
            <Title textH2="Our Story"/>
            <div className="DeliveryPage-container">
                <Story/>
                <PersonInformation/>
                <WhyWeExist/>
            </div>
           
        </div>    
    )
} 

const Story = () => {
    return (
        <div className="Story">
            <LazyLoadImage effect="blur" src="./assets/story.webp" alt="Img Plant Lady Juice Co" className="Story-img" />
            <section className="Story-text">
                <h3 className="Story-h3">Plant Lady Juice Co.</h3>
                <p className="Story-p">Plant Lady Juice Co. sprouted from an aligned meeting at a local organic store between it`s founders Akilah Cherri and Jennifer Kanyange. Jennifer told Akilah about her aspirations to start a thriving urban food garden in her West Atlanta home, and the friendship bloomed from there.</p>
                <p className="Story-p">Under Akilah`s guidance and mentorship, Jennifer planted and nurtured a garden that nourishes her family and her community (and you through our products). That partnership led to Jennifer commissioning Akilah to provide custom juices and teas for her company`s conference in Atlanta. </p>
                <p className="Story-p">… and that event inspired Akilah to offer a variety of juices, teas and elixirs to Atlanta Public School teachers.</p>
                <p className="Story-p">… and that led Akilah to inviting Jennifer to co-found Plant Lady Juice Co.</p>
            </section>
           
        </div>
    )
}

const PersonInformation = () => {
    const { aboutUs } = useContext(GlobalContext)
    return (
        <div className="PersonInformation">
            { aboutUs.map( ( { id , name , work , paragraph , src , classDiv} ) =>
                <div className={ classDiv }>
                    <section key={ id } className="PersonInformationContainer-text">
                        <h3 className="PersonInformationContainer-name">{ name }</h3>
                        <strong className="PersonInformationContainer-work">{ work }</strong>
                        <p className="PersonInformationContainer-p"><strong className="PersonInformationContainer-strong">{ name }</strong>{ paragraph }</p>
                    </section>
                    <LazyLoadImage effect="blur" src={ src } alt={ name } className="PersonInformationContainer-img" />
                </div> 
            ) }
        </div>
    )
}

const WhyWeExist = () => {
    return (
        <div className="WhyWeExist">
            <section className="WhyWeExist-text">
                <h3 className="WhyWeExist-h3">Why We Exist</h3>
                <p className="WhyWeExist-p">We started Plant Lady Juice Co. because our juices, teas, and elixirs have the power to nourish peoples`` minds, bodies, and spirits. Beyond what we sell, we have wisdom to share… wisdom passed down from our ancestors that can inspire Plant People (our customers) on their journey towards self actualization.</p>
                <p className="WhyWeExist-p">We know that:</p>
                <ul className="WhyWeExist-ul">
                    <li className="WhyWeExist-li">Consuming mindfully cultivates inner and outer peace</li>
                    <li className="WhyWeExist-li">Plant People who connect with their roots absorb life's most beautiful gifts</li>
                    <li className="WhyWeExist-li">Self-love is a form of harmonic alignment</li>
                    <li className="WhyWeExist-li">Creativity cultivates community</li>
                </ul>
            </section>
            <LazyLoadImage effect="blur" src="./assets/whyWeExist.webp" alt="Why We Exist img" className="WhyWeExist-img" />
        </div>
    )
}