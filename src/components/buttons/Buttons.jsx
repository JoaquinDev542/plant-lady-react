import "./buttons.scss"

export const Buttons = ({ href , text}) => {
    return (
        <a className="Buttons-btn" title={ text } href={ href } >{ text }</a>
    )
}

//     &:hover {
//         background-color: var(--black-hover);
//     }