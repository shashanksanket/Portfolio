"use client"
import React, { useState } from 'react';
import { Label, Switch } from "@medusajs/ui"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full px-5 md:px-40 py-8 z-50">
      <div className="flex justify-around items-center py-5 px-10 bg-slate-800 bg-opacity-50 backdrop-blur-xl text-white rounded-lg">
        <p className="font-bold text-3xl">Logo</p>
        <div className="hidden lg:flex justify-evenly w-full">
          <p className="cursor-pointer transition-all duration-300 hover:border-b-2 hover:bg-black rounded-lg px-2">Home</p>
          <p className="cursor-pointer transition-all duration-300 hover:border-b-2 hover:bg-black rounded-lg px-2">Journey</p>
          <p className="cursor-pointer transition-all duration-300 hover:border-b-2 hover:bg-black rounded-lg px-2">Projects</p>
          <p className="cursor-pointer transition-all duration-300 hover:border-b-2 hover:bg-black rounded-lg px-2">Contact</p>
        </div>
        <div className="lg:hidden flex gap-x-10">
          <button className="cursor-pointer" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col absolute top-24 left-0 w-full bg-slate-800 bg-opacity-50 backdrop-blur-xl text-white py-4">
            <p className="cursor-pointer transition-all duration-300 hover:bg-black rounded-lg px-2 mb-2">Home</p>
            <p className="cursor-pointer transition-all duration-300 hover:bg-black rounded-lg px-2 mb-2">Journey</p>
            <p className="cursor-pointer transition-all duration-300 hover:bg-black rounded-lg px-2 mb-2">Projects</p>
            <p className="cursor-pointer transition-all duration-300 hover:bg-black rounded-lg px-2 mb-2">Contact</p>
          </div>
        )}
        {/* <div className="items-center gap-x-10 inline-block w-full">
          <Switch className='mx-2' onClick={()=>{setIsLight(!isLight)}} checked={isLight} id="manage-inventory" />
          <Label htmlFor="manage-inventory">{isLight?'Dark':'Light'}</Label>
        </div> */}
        <button className="bg-slate-700 w-fit text-nowrap text-white py-2 px-4 font-bold rounded-lg hover:bg-slate-400 transition-all duration-700 hover:text-black">Hire Me</button>
      </div>
    </nav>
  );
}
