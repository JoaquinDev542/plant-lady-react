import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./root.scss"

export const Root = () => {
    const { main } = useContext(GlobalContext)
    const { root } = main
    const { title , paragraph , btn } = root

    return (
        <div className="Root">
            <div className="Root-width">
                <section className="Root-section">
                    <h2 className="Root-h2"> { title } </h2>
                    <p className="Root-p"> { paragraph } </p>
                    <a href="#" className="Root-a" title={ btn }> { btn } </a>
                </section>
                <img src="./assets/root.webp" alt="" className="Root-img" />
            </div>
        </div>
    )
}