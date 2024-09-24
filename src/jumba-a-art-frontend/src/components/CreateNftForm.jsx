import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jumba_a_art_backend } from "../../../declarations/jumba-a-art-backend";

const CreateNftForm = () => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();
  const [nftPrincipal, setNftPrincipal] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    
    e.preventDefault();

    const imageDataBytes = [...new Uint8Array(await image.arrayBuffer())];
    const natPrice = BigInt(price);

    let newNFTID = await jumba_a_art_backend.mint(imageDataBytes, title, owner, identifier, natPrice);
    
    setNftPrincipal(newNFTID.toText());
  };

  if (nftPrincipal == "") {  

    return (
      <div className="container m-auto max-w-2xl min-h-screen align-middle">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h2 className="text-3xl text-center font-semibold text-[#343434] mb-6">
            Create <span className="text-[#ff8c27]">Jumba'a Art</span>
          </h2>
          <form onSubmit={submitForm}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Jumba'a Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Joconde"
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Jumba'a Owner
              </label>
              <input
                type="text"
                id="owner"
                name="owner"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Hazambeu"
                required
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Jumba'a Identifier
              </label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="A unique identifier of your art eg. isbn,isrc"
                required
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Image (N.B 400 X 400 Max size){" "}
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>
            <div>
              <button
                className="bg-[#fb9943] text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Jumba'a
              </button>
            </div>
          </form>
        </div>
      </div>
    );

  } else {
    
    toast.success("Jumba'a minted successfuly :)");
    return navigate("/myjumba");
  
  }
};

export default CreateNftForm;
