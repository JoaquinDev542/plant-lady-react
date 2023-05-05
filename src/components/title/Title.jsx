import "./title.scss"

export const Title = ({ textH2 }) => {
    return (
        <div className="Title">
            <div className="Title-text">
                <h2 className="Title-h2">{ textH2 }</h2>
            </div>
        </div>
    )
}
