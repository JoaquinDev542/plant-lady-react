import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./aside.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Aside = () => {
    const { aside } = useContext( GlobalContext )

    return (
        <div className="Aside">
            { aside.map( ( { id , title , src , classNames} ) =>
                <section key={ id } className={`Aside-box Aside-box--${classNames}`}>
                    <LazyLoadImage className="Aside-img" src={ src } alt= { title } />
                    <h3 className="Aside-h3"> { title } </h3>
                </section>
            ) }
        </div>
    )
}