import {React,useState,useEffect} from "react";
import NftListings from "../components/NftListings";
import { Principal } from "@dfinity/principal";
import { jumba_a_art_backend } from "../../../declarations/jumba-a-art-backend";



const MyJumbaPage = () => {
  const title = "My Jumba'a Collection";
  const CURRENT_USER_ID = Principal.fromText("cddzk-rcxqz-gc5vl-nvz3d-ybybq-ylm66-ibjdu-lpkoy-2k5nr-3xjj4-tae");
  const [listnfts, setListNfts] = useState([]);
  
  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const data = await jumba_a_art_backend.getOwnedNFTs(CURRENT_USER_ID);
        console.log ("me voici pour moi: " + data);
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

export default MyJumbaPage;
