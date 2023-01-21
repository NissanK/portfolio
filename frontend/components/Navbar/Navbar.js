import React, { useEffect, useState, useRef } from "react";
import { MenuSharp } from "react-ionicons";
import { CloseSharp } from "react-ionicons";

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
    <nav className="w-full py-4 bg-navbar-blue md:flex md:items-center md:justify-between sticky top-0 z-10">
      <div className="flex items-center h-full px-8">
        <img
          className="inline w-[3rem] mr-2 hoverIconAnimation cursor-pointer z-10"
          src="/favicon/apple-touch-icon.png"
          alt="Nissan Kumar"
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
        ></img>
        <div
          ref={iconHoverRef}
          className="bold text-lg text-lightest-slate hover-underline-animation
            	cursor-pointer z-10"
        >
          {" "}
          Nissan Kumar
        </div>
        <span
          ref={menuOpenRef}
          onClick={() => setMenuOpen(true)}
          className="md:hidden block ml-auto cursor-pointer z-10"
        >
          <MenuSharp
            color={"#FFFFFF"}
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
            color={"#FFFFFF"}
            title="menu"
            height="2rem"
            width="2rem"
          />
        </span>
      </div>

      <ul
        className="md:flex items-center h-full px-8 md:space-x-8 lg:space-x-12
            bg-navbar-blue hidden z-0 pt-0"
      >
        <li>
          <a
            href="#"
            className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
          >
            Contact
          </a>
        </li>
        <button
          className=" text-global-bg bg-lightest-slate 
                px-6 rounded border-2 py-1 bold text-md transition-all
                border-navbar-dark-green  hover:bg-light-slate"
        >
          Resume
        </button>
      </ul>

      <div
        ref={menuRef}
        className="w-[350px] h-[350px] bg-navbar-blue absolute
             top-[-350px] right-0 pointer-events-none opacity-0 rounded-bl-full
             transition-all ease-in duration-500"
      >
        <ul className=" pt-[4.5rem]">
          <li className="my-2 ml-[50%] flex justify-center mr-[22%]">
            <a
              href="#"
              className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
            >
              Home
            </a>
          </li>
          <li className="my-2 ml-[50%] flex justify-center mr-[22%]">
            <a
              href="#"
              className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
            >
              About
            </a>
          </li>
          <li className="my-2 ml-[50%] flex justify-center mr-[22%]">
            <a
              href="#"
              className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
            >
              Projects
            </a>
          </li>
          <li className="my-2 ml-[50%] flex justify-center mr-[22%]">
            <a
              href="#"
              className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
            >
              Contact
            </a>
          </li>

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
