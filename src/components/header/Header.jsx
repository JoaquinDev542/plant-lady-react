import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./header.scss"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="Header" id="Header">
            <a href="#" title="Start a cleanse today!" className="Header-sub">Start a cleanse today!</a>
            <div className="Header-container">
                <div className="Header-width">
                    <div className="Header-middle">
                        <Hamburger/>
                        <Logo/>
                        <Cart/>
                    </div>
                    <div className="Header-bottom">
                        <Nav/>
                        <Delivery/>
                    </div>
                </div>
            </div>
        </header>
    )
}

const Hamburger = () => {
    return (
        <a href="#" title="Hamburger" className="Header-hamburger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Header-hamburgerImg" viewBox="0 0 16 16">
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </a>
    )
}

const Logo = () => {
    return (
        <h1 className="Header-h1"><Link to="/" className="Header-link"><img src="./assets/brand/logo.webp" alt="PLANT LADY JUICE CO." className="Header-logo" /></Link></h1>
    )
}

const Cart = () => {
    return (
        <Link to="/cart" title="cart" className="Header-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Header-cartImg" viewBox="0 0 16 16">
        <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
        </Link>
    )
}

const Nav = () => {
    const { header } = useContext( GlobalContext )

    return (
        <nav className="Header-nav">
            <ul className="Header-ul">
                { header.map( ( { id , title } ) =>
                    <li key={ id } className="Header-li">
                        <Link to={ title }className="Header-link"> { title } </Link>
                    </li>
                ) }
            </ul>
        </nav>
    )
}

const Delivery = () =>  { 
   return (
    <Link to="/delivery" title="Delivery Car" className="Header-navContainerLink">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Header-navContainerLinkImg" viewBox="0 0 16 16">
    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
    <span className="Header-navContainerLinkSpan">Delivery Guidelines</span>
    </Link>
   )
}