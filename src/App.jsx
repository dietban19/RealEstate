import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import "./App.css";
import Companies from "./components/Companies/companies";
import Value from "./components/Value/value";
import Contact from "./components/Contact/contact";
import Residencies from "./components/Residencies/residencies";
import GetStarted from "./components/GetStarted/getStarted";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div className="white-gradient">e</div>
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
