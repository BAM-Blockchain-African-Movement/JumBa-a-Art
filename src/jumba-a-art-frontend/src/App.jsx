import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <div className=''>App</div>
    <>
      <div className="bg-[#F6F7F8] py-4 px-4">
        <Navbar />
        <Hero />
        <Footer/>
      </div>
    </>
  );
};

export default App;
