'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl invert-on-hover">PIYUSH PAUL</div>
      <div className="hidden md:flex space-x-6">
          <Link href="/" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Home</Link>
          <Link href="/projects" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Projects</Link>
          <Link href="/about" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>About</Link>
          <Link href="/resume" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Resume</Link>
      </div>
      <button className="hidden md:block bg-white text-black py-2 px-4 rounded-xl text-lg font-medium transition ease-in-out delay-50 hover:bg-gray-200 hover:drop-shadow-lg hover:shadow-gray-500/50 hover:-translate-y-1 hover:scale-110">
        HIRE ME
      </button>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4`}>
        <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
        <Link onClick={() => setIsOpen(false)} href="/projects">Projects</Link>
        <Link onClick={() => setIsOpen(false)} href="/about">About</Link>
        <Link onClick={() => setIsOpen(false)}href="/resume">Resume</Link>
        <button className="bg-white text-black py-2 px-4 rounded-full transition ease-in-out delay-50 hover:bg-gray-200 hover:drop-shadow-lg hover:shadow-gray-500/50 hover:-translate-y-1 hover:scale-110">HIRE ME</button>
      </div>
    </nav>
  );
};

export default Navbar;
