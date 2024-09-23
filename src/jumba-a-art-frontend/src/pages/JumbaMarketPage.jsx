import {React,useEffect, useState} from "react";
import NftListings from "../components/NftListings";
import {jumba_a_art_backend} from "../../../declarations/jumba-a-art-backend";

const JumbaMarketPage = () => {
  const title = "Browse Jumba'a Marketplace";
  const [listnfts, setListNfts] = useState([]);

  return <NftListings title={title} nfts={listnfts}/>;
};

export default JumbaMarketPage;
