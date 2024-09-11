import {React,useState} from "react";
import nftImage from "../assets/NFT-jumba.png";
import {HttpAgent,Actor} from "@dfinity/agent";
import {idlFactory, jumba_a_art_backend} from "../../../declarations/jumba-a-art-backend";

const NftListing = ({nft}) => {

  // const [nftName,setnftName]=useState();
  // const [nftAsset,setnftAsset]=useState();
  // const [nftOwner,setnftOwner]=useState();
  // const [nftPrice,setnftPrice]=useState();

  // console.log(nft);
  
  // const localhost="http://localhost:3000/";
  // //create new agent
  // const agent=new HttpAgent({host:localhost});


  // //create new actor from idlFactory
  // NFTActor= await Actor.createActor(idlFactory,{
  //   agent,
  //   canisterId:nft,
  // });

  // const name= await NFTActor.getName();
  // const owner=await NFTActor.getOwner();
  // const imageData= await NFTActor.getAsset();
  //const listingPrice= await jumba_a_art_backend.getListingPrice(nft);
  //to store image in binary
  // const imageContent =new Uint8Array(imageData);
  // const image= URL.createObjectURL(new Blob([imageContent.buffer],{type:"image/png"}));

  // //definition
  // setnftName(name);
  // setnftOwner(owner.toText());
  // setnftAsset(image);
  //setnftPrice(listingPrice);

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
