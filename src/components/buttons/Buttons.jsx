export const Buttons = ({className , href , text}) => {
    const stylesButtons = {
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
        }
    }
    return (
        <a style={stylesButtons.a} className={ className } title={ text } href={ href } >{ text }</a>
    )
}

//     &:hover {
//         background-color: var(--black-hover);
//     }