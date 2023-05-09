import { Title } from "../../title/Title"
import "./deliveryPage.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
export const DeliveryPage = () => {
    return(
        <div className="DeliveryPage">
            <Title textH2="Order and Delivery Guidelines"/>
            <FirstInformation/>
            <LocalDelivery/>
        </div>    
    )
} 

const FirstInformation = () => {
    return (
        <div className="FirstInformation">
            <div className="FirstInformation-container">
                <section className="FirstInformation-text">
                    <h2 className="FirstInformation-h2">We produce in small batches...</h2>
                    <p className="FirstInformation-p">For the time being, Plant Lady Juice Co. will accept a maximum of 50 orders per week. The minimum order amount is $30. As you support our growing business, we will be able to fulfill more orders!</p>
                </section>
                <LazyLoadImage effect="blur" src="../../assets/juice.webp" alt="Img juice" className="FirstInformation-img" />
            </div>
        </div>
    )
}


const LocalDelivery = () => {
    return (
        <section className="LocalDelivery">
            <h3 className="LocalDelivery-h3">Local Delivery</h3>
            <p className="LocalDelivery-p">Here's an overview of our local delivery locations and weekly schedule:</p>
            <h4 className="LocalDelivery-h4">Delivery Areas</h4>
            <p className="LocalDelivery-p">Delivery costs $5 and is available for the following zip codes every Sunday:</p>
            <p className="LocalDelivery-numbers">30002, 30004, 30008, 30009, 30013, 30021, 30022, 30024, 30030, 30032, 30033, 30034, 30038, 30044, 30045, 30047, 30060, 30062, 30066, 30067, 30068, 30075, 30076, 30078, 30079, 30080, 30084, 30092, 30093, 30094, 30106, 30122, 30126, 30127, 30134, 30135, 30141, 30144, 30152, 30168, 30213, 30214, 30215, 30260, 30269, 30274, 30281, 30288, 30290, 30291, 30294, 30296, 30297, 30303, 30305, 30306, 30307, 30308, 30309, 30310, 30311, 30312, 30313, 30314, 30315, 30316, 30317, 30318, 30319, 30324, 30326, 30327, 30328, 30329, 30331, 30334, 30336, 30337, 30338, 30339, 30340, 30342, 30344, 30345, 30346, 30349, 30350, 30354, 30360, 30361, 30363, 30369, 30519</p>
            <h4 className="LocalDelivery-h4">Delivery Windows</h4>
            <p className="LocalDelivery-p">We offer two delivery windows on Sunday: 9 a.m. to  4 p.m. ET and 4 p.m. to 8 p.m. ET. You can select your window when you check out. If you`re not home when we get there, we`ll leave your order outside. Some people leave a cooler outside for us to put their order in, but that`s not necessary. When you place your order, note any details &#40;i.e gatecodes, where we should drop it if you`re not home etc...&#41; You can also note if you`d like us to give you a heads up 30 minutes before delivery.</p>
            <h4 className="LocalDelivery-h4">Shipping</h4>
            <p className="LocalDelivery-p">Right now, we can only ship orders of $500 or more. To place an order that big, fill out our contact form and we`ll get back to you.</p>
            <h4 className="LocalDelivery-h4">Weekly Schedule</h4>
            <p className="LocalDelivery-p">All orders placed BEFORE 6 p.m. ET on Wednesday will be delivered to you on the upcoming Sunday.</p>
            <p className="LocalDelivery-p">This schedule ensures you get the freshest of juices, teas and elixirs. Here`s a peak behind the scenes: </p>
            <ul className="LocalDelivery-ul">
                <li className="LocalDelivery-li">On Thursday, we make sure we have the bottles and labels we need to fill your orders and order more if we need to.</li>
                <li className="LocalDelivery-li">On Friday, we harvest and shop for fresh ingredients.</li>
                <li className="LocalDelivery-li">On Saturday, we juice! &#40;Read: make your juices, teas and elixirs&#41;</li>
                <li className="LocalDelivery-li">On Sunday, we pack everything up and start delivering your orders at 9 a.m.</li>
            </ul>
            <strong className="LocalDelivery-strong">You might want to set a reminder to order just after 6 p.m. ET on Wednesdays or first thing Thursday morning to make sure you`re one of the 50 orders for the following week.</strong>
        </section>
    )
}