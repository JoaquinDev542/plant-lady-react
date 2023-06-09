import { Link } from "react-router-dom"
import "./buttons.scss"

export const Buttons = ({ href , text }) => {
    return (
        <Link className="Buttons-btn" title={ text } to={ href } >{ text }</Link>
    )
}

//     &:hover {
//         background-color: var(--black-hover);
//     }