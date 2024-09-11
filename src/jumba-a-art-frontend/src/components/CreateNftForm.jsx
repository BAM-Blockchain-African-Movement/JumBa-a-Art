import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import { jumba_a_art_backend } from "../../../declarations/jumba-a-art-backend";

const CreateNftForm = () => {
  const [title, setTitle] = useState("");
  const [publickey, setPublickey] = useState("");
  const [privatekey, setPrivatekey] = useState("");
  const [owner, setOwner] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createSecretKeys = () => {
    setPublickey("QRUIIIDROVUWG2ZAMJZG653OEBTG66BANJ2W24DTEBXXMZLSEB2GQZJANRQXU6JAMRXWOLQ0");
    setPrivatekey("KRUGKIDROVUWG2ZAMJZG653OEBTG66BANJ2W24DTEBXXMZLSEB2GQZJANRQXU6JAMRXWOLQ=");
  };

  const navigate = useNavigate();
  

  const submitForm = (e) => {
    e.preventDefault();

    const newNFT = {
      title: title,
      owner: owner,
      identifier: identifier,
      price: price,
      image: image,
      publickey: publickey,
    };

    useEffect(() => {
      const fetchNfts = () => {
        try {
          // const data = jumba_a_art_backend.getAllTokens();
        } catch (error) {
          console.log("Error fetching jobs data : " + error);
        } finally {
          console.log("end fetching jobs data : " + error);
        }
      };
  
      fetchNfts();
    }, []);

    toast.success("Jumba'a minted successfuly :)");

    return navigate("/myjumba");
  };

  return (
    <div className="container m-auto max-w-2xl mb-11">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <h2 className="text-3xl text-center font-semibold text-[#343434] mb-6">
          Create <span className="text-[#ff8c27]">Jumba'a Art</span>
        </h2>
        <h3 className="text-2xl mb-5 text-[#343434]">Generate keys</h3>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-gray-700 font-bold mb-2"
          >
            Public key
          </label>
          <input
            type="text"
            id="publickey"
            name="publickey"
            className="border rounded w-full py-2 px-3"
            value={publickey}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company_description"
            className="block text-gray-700 font-bold mb-2"
          >
            Private key (N.B Copy and save your secret key)
          </label>
          <input
            type="text"
            id="privatekey"
            name="privatekey"
            className="border rounded w-full py-2 px-3"
            value={privatekey}
          />
        </div>
        <div>
          <button
            onClick={createSecretKeys}
            className="bg-[#fb9943] text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
          >
            Generate your keys
          </button>
        </div>
        <br /> <br />
        <form onSubmit={submitForm}>
          <h3 className="text-2xl mb-5 text-[#343434]">
            Jumba'a art informations
          </h3>
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
              placeholder="eg. 150 ICP"
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
              placeholder="select your jumba'a image"
              required
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
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
};

export default CreateNftForm;
