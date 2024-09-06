import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CreateNftForm from "./components/CreateNftForm";
import NftListing from "./components/NftListing";
import NftListings from "./components/NftListings";

const App = () => {
  return (
    // <div className=''>App</div>
    <>
      <div className="bg-[#F6F7F8]">
        <Navbar />
        {/* <Hero /> */}
        {/* <CreateNftForm /> */}
        {/* <NftListing /> */}
        <NftListings />
        <Footer/>
      </div>
    </>
  );
};

export default App;
