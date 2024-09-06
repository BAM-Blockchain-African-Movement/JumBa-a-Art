import React from "react";
import nftImage from "../assets/NFT-jumba.png";

const NftListing = ({nft}) => {
  return (
    <div className="rounded-xl shadow-lg">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden">
          <img src={nft.image} alt="" />
        </div>
        <h5 className="text-2xl md:text-3xl font-medium mt-3">{nft.title}</h5>
        <div className="flex justify-between mt-3">
          <span className="text-[#343434]">{nft.owner}</span>
          <span className="text-[#ff8c27]">{nft.price + "ICP"}</span>
        </div>
      </div>
    </div>
  );
};

export default NftListing;
