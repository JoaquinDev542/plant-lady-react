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
import { BloodCleansed } from "./components/Pages/product/BloodCleansed"
import { GreenAppleSpice } from "./components/Pages/product/GreenAppleSpice"
import { JuiceKit } from "./components/Pages/product/JuiceKit"
import { TheMorningFlush } from "./components/Pages/product/TheMorningFlush"
import { CucumberLemonade } from "./components/Pages/product/CucumberLemonade"
import { SlimAndTrimCleanse } from "./components/Pages/product/SlimAndTrimCleanse"
import { Sorrel } from "./components/Pages/product/Sorrel"
import { FemininePower } from "./components/Pages/product/FemininePower"
import { TasteOfDelight } from "./components/Pages/product/TasteOfDelight"
import { ImmunityBoost } from "./components/Pages/product/ImmunityBoost"
import { TeaKit } from "./components/Pages/product/TeaKit"
import { TumericJuice } from "./components/Pages/product/TumericJuice"
import { TheMorningFlushCleanse } from "./components/Pages/product/TheMorningFlushCleanse"
import { BloodCleansedCleanse } from "./components/Pages/product/BloodCleansedCleanse"
import { ThatTimeOfTheMonthCleanse } from "./components/Pages/product/ThatTimeOfTheMonthCleanse"
import { HerbalCoffee } from "./components/Pages/product/HerbalCoffee"
import { FiveFlavorHerbalTea } from "./components/Pages/product/FiveFlavorHerbalTea"
import { TasteOfSunshine } from "./components/Pages/product/TasteOfSunshine"
import { SuperGreenTea } from "./components/Pages/product/SuperGreenTea"
function App() {

  return (
    <div className="App">
      <Menu/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <AboutUs/> }/>
          <Route path="/cleanses" element={ <Cleanses/> }/>
          <Route path="/collections" element={ <Collections/> }/>
          <Route path="/collections/Blood-Cleansed" element={<BloodCleansed/>}/>
          <Route path="/collections/Green-Apple-Spice" element={<GreenAppleSpice/>}/>
          <Route path="/collections/Juice-Kit" element={<JuiceKit/>}/>
          <Route path="/collections/The-Morning-Flush" element={<TheMorningFlush/>}/>
          <Route path="/collections/Cucumber-Lemonade" element={<CucumberLemonade/>}/>
          <Route path="/collections/Slim-And-Trim-Cleanse" element={<SlimAndTrimCleanse/>}/>
          <Route path="/collections/Sorrel" element={<Sorrel/>}/>
          <Route path="/collections/Feminine-Power" element={<FemininePower/>}/>
          <Route path="/collections/Taste-Of-Delight" element={<TasteOfDelight/>}/>
          <Route path="/collections/Taste-Of-Sunshine" element={<TasteOfSunshine/>}/>
          <Route path="/collections/Immnunity-Boost" element={<ImmunityBoost/>}/>
          <Route path="/collections/Tea-Kit" element={<TeaKit/>}/>
          <Route path="/collections/Tumeric-Juice" element={<TumericJuice/>}/>
          <Route path="/collections/The-Morning-Flush-Cleanse" element={<TheMorningFlushCleanse/>}/>
          <Route path="/collections/Blood-Cleansed-Cleanse" element={<BloodCleansedCleanse/>}/>
          <Route path="/collections/That-Time-Of-The-Month-Cleanse" element={<ThatTimeOfTheMonthCleanse/>}/>
          <Route path="/collections/Herbal-Coffee" element={<HerbalCoffee/>}/>
          <Route path="/collections/Five-Flavor-Herbal-Tea" element={<FiveFlavorHerbalTea/>}/>
          <Route path="/collections/Super-Green-Tea" element={<SuperGreenTea/>}/>
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
