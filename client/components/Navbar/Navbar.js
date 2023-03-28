import React, { useEffect, useState, useRef } from "react";
import { MenuSharp } from "react-ionicons";
import { CloseSharp } from "react-ionicons";
import NavbarLinkGMedium from "./NavbarLinkGMedium";
import NavbarLinkBMedium from "./NavbarLinkBMedium";

export default function Navbar() {

  const [iconHover, setIconHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const iconHoverRef = useRef(null);
  const menuOpenRef = useRef(null);
  const menuCloseRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (iconHover === true) {
      iconHoverRef.current.classList.add("hover-underline-animation-hovered");
    } else {
      iconHoverRef.current.classList.remove(
        "hover-underline-animation-hovered"
      );
    }
  }, [iconHover]);

  useEffect(() => {
    if (menuOpen === true) {
      menuOpenRef.current.classList.remove("block");
      menuOpenRef.current.classList.add("hidden");

      menuCloseRef.current.classList.add("block");
      menuCloseRef.current.classList.remove("hidden");

      menuRef.current.classList.remove(
        "opacity-0",
        "pointer-events-none",
        "top-[-350px]"
      );
      menuRef.current.classList.add("opacity-100", "top-0");
    } else {
      menuOpenRef.current.classList.remove("hidden");
      menuOpenRef.current.classList.add("block");

      menuCloseRef.current.classList.add("hidden");
      menuCloseRef.current.classList.remove("block");

      menuRef.current.classList.remove("opacity-100", "top-0");
      menuRef.current.classList.add(
        "opacity-0",
        "pointer-events-none",
        "top-[-350px]"
      );
    }
  }, [menuOpen]);

  return (
    <nav className="w-full py-4 bg-navbar-blue md:flex md:items-center md:justify-between sticky z-10 top-0">

      {menuOpen &&
       <div
        onClick={()=> setMenuOpen(false)}
        onTouchMove={()=> setMenuOpen(false)}
        className='bg-slate-400 h-screen w-screen absolute top-0 left-0 opacity-0'>
       </div>
      }

      <div className="flex items-center h-full px-4 sm:px-6 md:px-8">

        <img
          className="inline w-[3rem] mr-2 sm:hoverIconAnimation z-10"
          src="/favicon/apple-touch-icon.png"
          alt="Nissan Kumar"
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
        ></img>

        <div
          ref={iconHoverRef}
          className="bold text-lg text-lightest-slate sm:hover-underline-animation z-10 opacity-0 sm:opacity-100"
        >
          {" "}
          Nissan Kumar
        </div>

        {/* burger menu for below medium screen  */}

        <span
          ref={menuOpenRef}
          onClick={() => setMenuOpen(true)}
          className="md:hidden block ml-auto cursor-pointer z-10"
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
          onClick={() => setMenuOpen(false)}
          className="md:hidden hidden ml-auto cursor-pointer z-10"
        >
          <CloseSharp
            color={"#a6d7f8"}
            title="menu"
            height="2rem"
            width="2rem"
          />
        </span>
      </div>

      {/* for medium above screen devices  */}
      <ul
        className="md:flex items-center h-full px-8 md:space-x-8 lg:space-x-12
        bg-navbar-blue hidden z-0 pt-0"
        >
        
        <NavbarLinkGMedium nameID="#home" name='Home'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#about" name='About'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#skills" name='Skills'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#projects" name='Projects'></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#contact" name='Contact'></NavbarLinkGMedium>
        
        <a
          href="https://drive.google.com/drive/folders/1A8sCuddeEbW5695GYlLzUiraKhrw9_30?usp=sharing"
          target={"_blank"} rel="noreferrer"
          className=" text-global-bg bg-lightest-slate 
          px-5 rounded border-2 py-[0.2rem] bold text-md transition-all
          border-navbar-dark-green  hover:bg-light-slate"
          >
          Resume
        </a>
      </ul>

      {/* for below medium screen devices  */}
      <div
        ref={menuRef}
        className="w-[350px] h-[350px] bg-navbar-blue absolute
             top-[-350px] right-0 pointer-events-none opacity-0 rounded-bl-full
             transition-all ease-in duration-500"
      >
        <ul className=" pt-[4.5rem]">

          <NavbarLinkBMedium nameID="#home" name="Home"></NavbarLinkBMedium>
          <NavbarLinkBMedium nameID="#about" name="About"></NavbarLinkBMedium>
          <NavbarLinkBMedium nameID="#skills" name="Skills"></NavbarLinkBMedium>
          <NavbarLinkBMedium nameID="#projects" name="Projects"></NavbarLinkBMedium>
          <NavbarLinkBMedium nameID="#contact" name="Contact"></NavbarLinkBMedium>
          
          <button
            className="bold text-md text-global-bg bg-lightest-slate 
                    px-6 rounded border-2 border-navbar-dark-green 
                    py-1 ml-[50%] mr-[22%] flex justify-center
                    hover:bg-light-slate transition-all"
          >
            Resume
          </button>

        </ul>
      </div>
    </nav>
  );
}
