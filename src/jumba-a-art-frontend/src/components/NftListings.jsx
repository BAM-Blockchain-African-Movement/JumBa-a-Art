import { React,useState } from "react";
import NftListing from "./NftListing";
import Spinner from "./Spinner";

const NftListings = ({ title, nfts }) => {
  const [loading, setLoading] = useState(true);

  if (nfts) {
    setLoading(false);
  }

  return (
    <div className="bg-white min-h-screen container mx-auto mb-11 px-1 pt-4">
      <h1 className="font-bold text-center text-3xl text-[#343434] mb-5">
        {title}
      </h1>
      {loading ? (
        <Spinner loading={loading}></Spinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {nfts.map((nft) => (
            <NftListing key={nft} nft={nft}></NftListing>
          ))}
        </div>
      )}
    </div>
  );
};

export default NftListings;
