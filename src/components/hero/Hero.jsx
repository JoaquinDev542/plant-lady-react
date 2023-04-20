import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./hero.scss"

export const Hero = () => {
    const { main } = useContext(GlobalContext)
    const { hero } = main
    const { title , paragraph , btn } = hero

    return (
        <div className="Hero">
            <div className="Hero-width">
                <section className="Hero-section">
                    <h2 className="Hero-h2"> { title } </h2>
                    <p className="Hero-p"> { paragraph } </p>
                    <a href="#" className="Hero-a" title={ btn }> { btn } </a>
                </section>
                <img src="./assets/hero.webp" alt="" className="Hero-img" />
            </div>
        </div>
    )
}