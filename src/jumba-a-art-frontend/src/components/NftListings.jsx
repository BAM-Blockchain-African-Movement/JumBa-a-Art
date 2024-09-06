import {React, useState} from "react";
import NftListing from "./NftListing";

const NftListings = () => {
  const [listnfts, setListNfts] = useState([]);

  return (
    <div className="bg-white flex justify-center min-h-screen container mx-auto mb-11">
      <h1 className="mt-5 font-bold text-3xl text-[#343434]">My Jumba'a Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {listnfts.map((nft) => (
          <NftListing key={nft.id} nft={nft}></NftListing>
        ))}
      </div>
    </div>
  );
};

export default NftListings;
