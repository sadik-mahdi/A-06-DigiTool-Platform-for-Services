import './App.css'
import Bar from './Components/Bar'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Steps from './Components/Steps'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import Tools from './Components/Tools/Tools'
import FooterEnd from './Components/Footer/Footerend'
import { useState } from 'react'
import Cart from './Components/Cart'


const getModels = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

const toolsPromise = getModels();

function App() {

  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCart] = useState([]);


  return (
    <>
      <Navbar />

      <Hero />

      <Bar />

      <div className="tabs justify-center bg-transparent tabs-box mx-auto bg-blue">
        <input type="radio" 
            name="my_tabs_1" 
            className="tab rounded-full" 
            aria-label="Products" 
            defaultChecked
            onClick={() => setActiveTab("Products")} 
          />
        <input type="radio" 
          name="my_tabs_1" 
          className="tab rounded-full" 
          aria-label="Cart" 
          onClick={() => setActiveTab("Cart")} 
        />
      </div>

      {activeTab === "Products" && <Tools toolsPromise = {toolsPromise} carts = {carts} setCart = {setCart} />}

      {activeTab === "Cart" && <Cart carts = {carts} />}

      <Steps />

      <Pricing />

      <Footer />
      
      <FooterEnd />
    </>
  )
}

export default App
