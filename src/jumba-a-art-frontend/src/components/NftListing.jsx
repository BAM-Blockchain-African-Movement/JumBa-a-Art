import {React,useState} from "react";
import nftImage from "../assets/NFT-jumba.png";
import {HttpAgent,Actor} from "@dfinity/agent";
import {idlFactory, jumba_a_art_backend} from "../../../declarations/jumba-a-art-backend";

const NftListing = () => {  

  return (
    <div className="rounded-xl shadow-lg">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden">
          <img src={nftImage} alt="" />
        </div>
        <h5 className="text-2xl md:text-3xl font-medium mt-3">{"rien"}</h5>
        <div className="flex justify-between mt-3">
          <span className="text-[#343434]">{"rien"}</span>
          <span className="text-[#ff8c27]">{"4" + " ICP"}</span>
        </div>
      </div>
    </div>
  );
};

export default NftListing;
