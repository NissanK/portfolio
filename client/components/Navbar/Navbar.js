import React, { useEffect, useState, useRef } from "react";
import NavbarLinkGMedium from "./NavbarLinkGMedium";
import AOS from 'aos';
import 'aos/dist/aos.css'
import NavbarIcon from "./NavbarIcon";

export default function Navbar() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <nav className="w-full py-4 bg-navbar-blue hidden md:flex md:items-center md:justify-between md:sticky z-10 top-0">

  
      <NavbarIcon></NavbarIcon>
      {/* for medium above screen devices  */}
      <ul
        className="md:flex items-center h-full px-8 md:space-x-8 lg:space-x-12
        bg-navbar-blue hidden z-0 pt-0"
        >
        
        <NavbarLinkGMedium nameID="#home" name='Home' aosdelay = '0'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#about" name='About' aosdelay = '100'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#skills" name='Skills' aosdelay = '200'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#projects" name='Projects' aosdelay = '300'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#contact" name='Contact' aosdelay = '400'></NavbarLinkGMedium>
        
        <a
          href="https://drive.google.com/drive/folders/1A8sCuddeEbW5695GYlLzUiraKhrw9_30?usp=sharing"
          target={"_blank"} rel="noreferrer"
          className=" text-global-bg bg-lightest-slate 
          px-5 rounded border-2 py-[0.2rem] bold text-md transition-all
          border-navbar-dark-green  hover:bg-light-slate"
          data-aos="fade-down" data-aos-once='true' data-aos-duration='500' data-aos-delay='500'
          >
          Resume
        </a>

      </ul>

    </nav>
  );
}
