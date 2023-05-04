import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Pages/home/Home"
import { AboutUs } from "./components/Pages/aboutUs/AboutUs"
import { AllProducts } from "./components/Pages/allProducts/AllProducts"
import { Cleanses } from "./components/Pages/cleanses/Cleanses"
import { Collections } from "./components/Pages/collections/Collections"
import { DeliveryPage } from "./components/Pages/deliveryPage/DeliveryPage"
import { Exilirs } from "./components/Pages/exilirs/Exilirs"
import { Juices } from "./components/Pages/juices/Juices"
import { Kits } from "./components/Pages/kits/Kits"
import { Services } from "./components/Pages/services/Services"
import { Teas } from "./components/Pages/teas/Teas"
import { Header } from "./components/header/Header"
import { Menu } from "./components/menu/Menu"
import { Footer } from "./components/footer/Footer"
import { NotFound } from "./components/Pages/notFound/NotFound"
import { CartPage } from "./components/Pages/cart/Cart"


function App() {

  return (
    <div className="App">
      <Menu/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <AboutUs/> }/>
          <Route path="/products" element={ <AllProducts/> }/>
          <Route path="/cleanses" element={ <Cleanses/> }/>
          <Route path="/collections" element={ <Collections/> }/>
          <Route path="/delivery" element={ <DeliveryPage/> }/>
          <Route path="/exilirs" element={ <Exilirs/> }/>
          <Route path="/juices" element={ <Juices/> }/>
          <Route path="/kits" element={ <Kits/> }/>
          <Route path="/services" element={ <Services/> }/>
          <Route path="/teas" element={ <Teas/> }/>
          <Route path="/cart" element={ <CartPage/> }/>
          <Route path="*" element={ <NotFound/> }/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
