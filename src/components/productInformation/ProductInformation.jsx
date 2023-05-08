export const ProductInformation = () => {
    return (
        <div className="ProductInformation">
            <img src="" alt="" className="ProductInformation-img" />
            <div className="ProductInformation-container">
                <section className="ProductInformation-basicInformation">
                    <span className="ProductInformation-span">Plant Lady Juice Co.</span>
                    <h2 className="ProductInformation-h2"></h2>
                    <span className="ProductInformation-number"></span>
                    <span className="ProductInformation-oz"></span>
                </section>
                <div className="ProductInformation-information">
                    <div className="ProductInformation-add">
                        {/* COMPLETAR */}
                    </div>
                    <div className="ProductInformation-content">
                        <p className="ProductInformation-p"></p>
                        <strong className="ProductInformation-subtitle"></strong>
                        <p className="ProductInformation-p"></p>
                        <h3 className="ProductInformation-h3"></h3>
                        <p className="ProductInformation-p"></p>
                        <p className="ProductInformation-p"></p>
                        <h3 className="ProductInformation-h3"></h3>
                        <p className="ProductInformation-p"></p>
                    </div>
                    <SocialMedia/>
                </div>
            </div>
        </div>
        
    )
}

const SocialMedia = () => {
    return (
        <div className="SocialMedia">
            <h3 className="SocialMedia-h3"></h3>
            <div className="SocialMedia-container">
                <a href="" className="SocialMedia-a">
                    {/* SVG */}
                    <span className="SocialMedia-socialMediaName"></span>
                </a>
                <a href="" className="SocialMedia-a">
                    {/* SVG */}
                    <span className="SocialMedia-socialMediaName"></span>
                </a>
                <a href="" className="SocialMedia-a">
                    {/* SVG */}
                    <span className="SocialMedia-socialMediaName"></span>
                </a>
            </div>
        </div>
    )
}