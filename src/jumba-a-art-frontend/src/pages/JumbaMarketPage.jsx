import {React,useEffect, useState} from "react";
import NftListings from "../components/NftListings";
import {jumba_a_art_backend} from "../../../declarations/jumba-a-art-backend";

const JumbaMarketPage = () => {
  const title = "Browse Jumba'a Marketplace";
  const [listnfts, setListNfts] = useState([]);
  
  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const data = await jumba_a_art_backend.getListedNFTs();
        console.log ("me voici: " + data);
        setListNfts(data);
      } catch (error) {
        console.log("Error fetching jobs data : " + error);
      } finally {
        console.log("end fetching jobs data : " + error);
      }
    };

    fetchNfts();
  }, []);

  return <NftListings title={title} nfts={listnfts}/>;
};

export default JumbaMarketPage;
