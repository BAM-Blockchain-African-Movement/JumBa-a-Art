import React from 'react';
import heroImage from '../assets/Highlighted NFT.png';
import { IoIosJet } from "react-icons/io";

const Hero = () => {
  return (
    <section className='bg-white rounded-lg py-11 flex justify-around align-middle'>
        <div>
            <h1 className='text-start text-5xl font-bold text-[#343434] mb-11 leading-1'>Discover <br/> African Digital Art & <br/> Collect 
                <span className='text-[#ff8c27]'> Jumba'a Art</span>
            </h1>
            <p className='text-start text-lg text-[#343434] font-extralight mb-6'>With Jumba'a marketplace. More than 20k artists and Collectors,<br/> Create, sell and buy NFT art.</p>
            <a className='bg-[#ff8c27] text-white font-bold text-center py-4 px-6 rounded-md' href="/">
                <IoIosJet className="inline text-xl mb-1"/>
                Create Jumba'a Art
            </a>
            <div className='mt-11 flex justify-between'>
                <div className='text-start'>
                    <p className='font-bold text-4xl text-[#343434]'>240k+</p>
                    <p className='text-lg font-thin text-[#ff8c27]'>Total sale</p>
                </div>
                <div className='text-start'>
                    <p className='font-bold text-4xl text-[#343434]'>30k+</p>
                    <p className='text-lg font-thin text-[#ff8c27]'>Artists</p>
                </div>
                <div className='text-start'>
                    <p className='font-bold text-4xl text-[#343434]'>200k+</p>
                    <p className='text-lg font-thin text-[#ff8c27]'>collectors</p>
                </div>
            </div>
        </div>

        <div>
            <img src={heroImage} alt="hero image"/>
        </div>
    </section>
  )
}

export default Hero