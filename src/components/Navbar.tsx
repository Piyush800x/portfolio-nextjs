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
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center sticky z-10">
      <div className="text-2xl invert-on-hover">PIYUSH PAUL</div>
      <div className="hidden md:flex space-x-6">
          <Link href="/" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Home</Link>
          <Link href="/projects" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Projects</Link>
          {/* <Link href="/about" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>About</Link> */}
          <Link href="/contact" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Contact</Link>
      </div>
      <button className="cursor-none hidden md:block border-2 hover:border-white hover:bg-black hover:text-white bg-white text-black py-2 px-4 rounded-full text-lg font-medium transition ease-in-out duration-300">
        <Link className='cursor-none' href="/hireme">HIRE ME</Link>
      </button>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="cursor-none focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}  md:hidden absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4`}>
        <Link onClick={() => setIsOpen(false)} href="/" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Home</Link>
        <Link onClick={() => setIsOpen(false)} href="/projects" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Projects</Link>
        {/* <Link onClick={() => setIsOpen(false)} href="/about" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>About</Link> */}
        <Link onClick={() => setIsOpen(false)} href="/contact" className='cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110'>Contact</Link>
        <button className="cursor-none border-2 hover:border-white hover:bg-black hover:text-white bg-white text-black py-2 px-4 rounded-full transition duration-300">
          <Link className='cursor-none' href="/hireme">HIRE ME</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
