import React,{ useEffect, useState, useRef } from 'react'
import NavbarLinkBMedium from "./NavbarLinkBMedium";
import AOS from 'aos';
import { MenuSharp } from "react-ionicons";
import { CloseSharp } from "react-ionicons";

import 'aos/dist/aos.css'
import NavbarIcon from './NavbarIcon';

function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuOpenRef = useRef(null);
    const menuCloseRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        AOS.init();
    }, [])

    const menuOpenClick = () =>{
        setMenuOpen(true);
        menuOpenRef.current.classList.remove("block");
        menuOpenRef.current.classList.add("hidden");
    
        menuCloseRef.current.classList.add("block");
        menuCloseRef.current.classList.remove("hidden");

        menuRef.current.classList.remove(
            "opacity-0",
            "pointer-events-none",
        );
        menuRef.current.classList.add("opacity-100");

    }

    const menuCloseClick = () =>{
        setMenuOpen(false);
        menuOpenRef.current.classList.remove("hidden");
        menuOpenRef.current.classList.add("block");
    
        menuCloseRef.current.classList.add("hidden");
        menuCloseRef.current.classList.remove("block");
    
        menuRef.current.classList.remove("opacity-100");
        menuRef.current.classList.add(
            "opacity-0",
            "pointer-events-none",
        );
    }

  return (
    <nav className="w-full py-4 bg-navbar-blue md:hidden flex justify-between items-center sticky z-10 top-0">

        <NavbarIcon></NavbarIcon>

        {/* backdrop code below  */}
        {menuOpen &&
        <div
            onClick={()=> setMenuOpen(false)}
            onTouchMove={()=> setMenuOpen(false)}
            className='bg-slate-400 h-screen w-screen absolute top-0 left-0 opacity-0'>
        </div>
        }

        {/* burger menu for below medium screen  */}

        <span
          ref={menuOpenRef}
          onClick={() => menuOpenClick()}
          className="md:hidden block mr-4 cursor-pointer z-10"
          data-aos="fade" data-aos-duration='200'
        >
          <MenuSharp
            color={"#a6d7f8"}
            title="menu"
            height="2rem"
            width="2rem"
          />
        </span>
        <span
          ref={menuCloseRef}
          onClick={() => menuCloseClick()}
          className="md:hidden hidden mr-4 cursor-pointer z-10"
        >
          <CloseSharp
            color={"#a6d7f8"}
            title="menu"
            height="2rem"
            width="2rem"
          />
        </span>

        {/* for below medium screen devices  */}
        <div
            ref={menuRef}
            className="w-[350px] h-[350px] bg-navbar-blue absolute pointer-events-none opacity-0
                top-0 right-0 rounded-bl-full
                transition-all ease-in duration-500"
        >
            <ul className=" pt-[4.5rem]">

            <NavbarLinkBMedium nameID="#home" name="Home"></NavbarLinkBMedium>
            <NavbarLinkBMedium nameID="#about" name="About"></NavbarLinkBMedium>
            <NavbarLinkBMedium nameID="#skills" name="Skills"></NavbarLinkBMedium>
            <NavbarLinkBMedium nameID="#projects" name="Projects"></NavbarLinkBMedium>
            <NavbarLinkBMedium nameID="#contact" name="Contact"></NavbarLinkBMedium>
            
            <a href="https://drive.google.com/drive/folders/1A8sCuddeEbW5695GYlLzUiraKhrw9_30?usp=sharing"
            target={"_blank"} rel="noreferrer"
                className="bold text-md text-global-bg bg-lightest-slate 
                        px-6 rounded border-2 border-navbar-dark-green 
                        py-1 ml-[50%] mr-[22%] flex justify-center
                        hover:bg-light-slate transition-all"
            >
                Resume
            </a>

            </ul>
        </div>
    </nav>

  )
}

export default NavbarMobile