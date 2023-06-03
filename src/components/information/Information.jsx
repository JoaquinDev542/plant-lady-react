import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./information.scss"
import { Link } from "react-router-dom";

export const Information = ({classDiv ,classSection , classH2 , textH2 , classP , textP , src , classImg , classA , textA , href}) => {
    const stylesInformation = {
        div : {
            display: "grid",
            gridTemplateRows: "repeat(2 , auto)",
            maxWidth: "1300px",
            margin: "0 auto",
        },
        section : {
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
        },
        h2 : {
            fontSize:"clamp(2.3125rem , 5vw , 3.125rem)" ,
        },
        img : {
            width: "400px",
        },
    }
    return (
        <div style={stylesInformation.div} className={ classDiv }>
            <section style={stylesInformation.section} className={ classSection }>
                <h2 style={stylesInformation.h2} className={classH2}>{textH2}</h2>
                <p className={classP}>{textP}</p>
                <Link to={ href } title={ textA } className="Information-btn">{ textA }</Link>
            </section>
            <LazyLoadImage effect="blur" style={stylesInformation.img} className={ classImg } src={ src } alt={ textH2 }/>
        </div>
    )
}