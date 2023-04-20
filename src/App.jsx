import { Header } from "./components/header/Header"
import { Menu } from "./components/menu/Menu"
import { Hero } from "./components/hero/Hero"
import { Root } from "./components/root/Root"
import { Delivery } from "./components/delivery/Delivery"
import { Products } from "./components/products/Products"
import { Testimonials } from "./components/testimonials/Testimonials"
import { Aside } from "./components/aside/Aside"
import { Footer } from "./components/footer/Footer"

function App() {

  return (
    <div className="App">
      <Menu/>
      <Header/>
      <main className="main">
        <Hero/>
        <Root/>
        <Delivery/>
        <Products/>
        <Testimonials/>
        <Aside/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
