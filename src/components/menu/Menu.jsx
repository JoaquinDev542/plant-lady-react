import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./menu.scss"

export const Menu = () => {
    return (
        <div className="Menu">
            <div className="Menu-container">
                <span className="Menu-span">Menu</span>
                <a href="#" className="Menu-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Menu-closeImg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                </a>
            </div>
            <Nav/>
        </div>
        
    )
}


const Nav = () => {
    const { header } = useContext( GlobalContext )

    return (
        <nav className="Menu-nav">
            <ul className="Menu-ul">
                { header.map( ( { id , href , title } ) =>
                    <li className="Menu-li" key={ id }>
                        <a href={ href } className="Menu-a">{ title }</a>
                    </li>
                ) }
            </ul>
        </nav>
    )
}