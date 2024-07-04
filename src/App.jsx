import React,{useState}from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
  
    
  let [Cart,setCart]= useState(0)
  return<>
      <NavBar Cart={Cart}/>
      <Header />
      <Section Cart={Cart} setCart={setCart}/>
      <Footer />
    </>
  
}

export default App;
