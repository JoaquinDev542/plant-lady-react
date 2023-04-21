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
        a : {
            position:"relative" , 
            display:"inline-block" , 
            width:"max-content",
            padding: "0.75rem 2rem",
            borderRadius : "1.25rem",
            textDecoration: "none",
            color: "#f2f6f2",
            backgroundColor: "#1d1d1d",
            transition: ".2s background-color",
        },
    }
    return (
        <div style={stylesInformation.div} className={ classDiv }>
            <section style={stylesInformation.section} className={ classSection }>
                <h2 style={stylesInformation.h2} className={classH2}>{textH2}</h2>
                <p className={classP}>{textP}</p>
                <a style={stylesInformation.a} href={ href } title={ textA } className={ classA }>{ textA }</a>
            </section>
            <img style={stylesInformation.img} className={ classImg } src={ src } alt={ textH2 }/>
        </div>
    )
}