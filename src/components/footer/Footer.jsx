import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./footer.scss"

export const Footer = () => {
    return (
        <footer className="Footer">
            <Information/>
            <SignUp/>
            <Links/>
        </footer>
    )
}

const Information = () => {
    return (
        <section className="Footer-information">
            <div className="Footer-title">
                <h4 className="Footer-h4 Footer-h4--information">Plant Lady Juice Co.</h4>
                <p className="Footer-p">Deeply Rooted</p>
            </div>
        </section>
    )
}

const SignUp = () => {
    return (
        <section className="Footer-signUp">
            <h4 className="Footer-h4 Footer-h4--signUp">Sign up for juicy news!</h4>
            <form className="Footer-form">
                <div className="Footer-inputContainer">
                    <input placeholder="Enter your email" type="mail" className="Footer-input" />
                    <button title="Send Img" className="Footer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="Footer-sendImg" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    )
}

const Links = () => {
    const { footer } = useContext(GlobalContext)

    return (
        <section className="Footer-links">
            <h4 className="Footer-h4 Footer-h4--links">Quick links</h4>
            <nav className="Footer-nav">
                <ul className="Footer-ul"> 
                    { footer.map( ( { id , title , href } ) =>
                        <li key={ id } className="Footer-li">
                            <a href={ href } title={ title } className="Footer-a"> { title } </a>
                        </li> 
                    ) }
                </ul>
            </nav>
        </section>
    )
}


                    
                      
               