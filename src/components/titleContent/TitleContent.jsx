import "./titleContent.scss"

export const TitleContent = ({ textH2 , textP }) => {
    return (
        <div className="TitleContent">
            <div className="TitleContent-text">
                <h2 className="TitleContent-h2">{ textH2 }</h2>
                <p className="TitleContent-p">{ textP }</p>
            </div>
        </div>
       
    )
}