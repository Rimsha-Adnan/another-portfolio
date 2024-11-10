import "./globals.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Qualification from "./components/Qualification";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Work from "./components/Work";

export default function page() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}
