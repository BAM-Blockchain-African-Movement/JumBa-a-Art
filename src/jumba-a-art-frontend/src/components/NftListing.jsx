import React from "react";
import nftImage from "../assets/NFT-jumba.png";

const NftListing = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen container mx-auto mb-11">
      {/* grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* cards */}
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={nftImage} alt="" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Nzout</h5>
            <div className="flex justify-between mt-3">
                <span className="text-[#343434]">The hunters</span>
                <span className="text-[#ff8c27]">100 ICP</span>
            </div>
          </div>
        </div>
      </div>
      {/* grid end */}
    </div>
  );
};

export default NftListing;
