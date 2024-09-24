import { React, useState, useEffect } from "react";
import NftListings from "../components/NftListings";
import { Principal } from "@dfinity/principal";
import { jumba_a_art_backend } from "../../../declarations/jumba-a-art-backend";

const MyJumbaPage = ({ user_id }) => {
  const title = "My Jumba'a Collection";
  const [listnfts, setListNfts] = useState();

  async function getNFTs() {
    const userNFTIds = await jumba_a_art_backend.getOwnedNFTs(user_id);
    setListNfts(userNFTIds);
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return <NftListings title={title} nfts={listnfts} />;
};

export default MyJumbaPage;
