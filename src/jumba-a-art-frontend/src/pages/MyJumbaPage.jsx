import {React,useState,useEffect} from "react";
import NftListings from "../components/NftListings";
import { Principal } from "@dfinity/principal";
import { jumba_a_art_backend } from "../../../declarations/jumba-a-art-backend";



const MyJumbaPage = () => {
  const title = "My Jumba'a Collection";
  const [listnfts, setListNfts] = useState([]);

  return <NftListings title={title} nfts={listnfts}/>;
};

export default MyJumbaPage;
