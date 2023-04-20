import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./aside.scss"

export const Aside = () => {
    const { aside } = useContext( GlobalContext )

    return (
        <div className="Aside">
            { aside.map( ( { id , title , src , classNames} ) =>
                <section key={ id } className={`Aside-box Aside-box--${classNames}`}>
                    <img className="Aside-img" src={ src } alt= { title } />
                    <h3 className="Aside-h3"> { title } </h3>
                </section>
            ) }
        </div>
    )
}