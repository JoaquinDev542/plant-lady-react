import { Aside } from "../../aside/Aside"
import { Delivery } from "../../delivery/Delivery"
import { Hero } from "../../hero/Hero"
import { Products } from "../../products/Products"
import { Root } from "../../root/Root"
import { Testimonials } from "../../testimonials/Testimonials"

export const Home = () => {
    return (
        <>
            <main className="main">
                <Hero/>
                <Root/>
                <Delivery/>
                <Products/>
                <Testimonials/>
                <Aside/>
            </main>
        </>
    )
}