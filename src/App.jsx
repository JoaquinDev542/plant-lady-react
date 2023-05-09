import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Pages/home/Home"
import { AboutUs } from "./components/Pages/aboutUs/AboutUs"
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
          <Route path="plant-lady-react/" element={ <Home/> }/>
          <Route path="plant-lady-react/about" element={ <AboutUs/> }/>
          <Route path="plant-lady-react/cleanses" element={ <Cleanses/> }/>
          <Route path="plant-lady-react/collections" element={ <Collections/> }/>
          <Route path="plant-lady-react/delivery" element={ <DeliveryPage/> }/>
          <Route path="plant-lady-react/exilirs" element={ <Exilirs/> }/>
          <Route path="plant-lady-react/juices" element={ <Juices/> }/>
          <Route path="plant-lady-react/kits" element={ <Kits/> }/>
          <Route path="plant-lady-react/services" element={ <Services/> }/>
          <Route path="plant-lady-react/teas" element={ <Teas/> }/>
          <Route path="plant-lady-react/cart" element={ <CartPage/> }/>
          <Route path="*" element={ <NotFound/> }/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
