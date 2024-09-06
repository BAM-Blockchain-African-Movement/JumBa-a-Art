import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CreateNftForm from "./components/CreateNftForm";
import NftListing from "./components/NftListing";

const App = () => {
  return (
    // <div className=''>App</div>
    <>
      <div className="bg-[#F6F7F8]">
        <Navbar />
        {/* <Hero /> */}
        {/* <CreateNftForm /> */}
        <NftListing />
        <Footer/>
      </div>
    </>
  );
};

export default App;
