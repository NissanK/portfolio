import React,{useState,useRef,useEffect} from "react";
import NavbarLinkGMedium from "./NavbarLinkGMedium";
import NavbarIcon from "./NavbarIcon";

export default function Navbar() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [mouseNavbar, setMouseNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [firstTimeOpened,setFirstTimeOpened] = useState(true);

  const navbarRef = useRef(null);

  const mouseEnterHandler = () =>{
    if(isNavbarOpen === false){
      setIsNavbarOpen(true);
    }
    setMouseNavbar(true);
  }
  
  const mouseLeaveHandler = () =>{
    if(isNavbarOpen === true && scrollY !== 0){
      setIsNavbarOpen(false);
      setFirstTimeOpened(false);
    }
    setMouseNavbar(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if(mouseNavbar === false && scrollY !== 0){
      setFirstTimeOpened(false);
      setIsNavbarOpen(false);
    }
    else if(scrollY === 0){
      setIsNavbarOpen(true);
    }
  }, [scrollY,mouseNavbar])
  
  return (
    <div className="w-full  md:sticky z-10 top-0">
    <nav className={isNavbarOpen? "transition-all duration-300 w-full py-4 bg-navbar-blue hidden md:flex md:items-center md:justify-between md:absolute z-10 top-0"
      : " transition-all duration-300 w-full bg-light-slate/20 hidden md:flex md:absolute z-10 top-0 h-4 cursor-pointer"}
     ref={navbarRef} onClick={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
    >
      {isNavbarOpen?<NavbarIcon></NavbarIcon> : null}
      
      {/* for medium above screen devices  */}
      {isNavbarOpen ? <ul
        className="md:flex items-center h-full px-8 md:space-x-6 lg:space-x-10
        bg-navbar-blue hidden z-0 pt-0"
        >
        
        <NavbarLinkGMedium nameID="#home" name='Home' aosdelay = {firstTimeOpened ? `0` : '0'}></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#about" name='About' aosdelay = {firstTimeOpened ? `100` : '0'}></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#experience" name='Experience' aosdelay = {firstTimeOpened ? `200` : '0'}></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#skills" name='Skills' aosdelay = {firstTimeOpened ? `300` : '0'}></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#achievements" name='Achievements' aosdelay = {firstTimeOpened ? `400` : '0'}></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#projects" name='Projects' aosdelay = {firstTimeOpened ? `500` : '0'}></NavbarLinkGMedium>
        <NavbarLinkGMedium nameID="#contact" name='Contact' aosdelay = {firstTimeOpened ? `600` : '0'}></NavbarLinkGMedium>
        
      </ul> : null}

    </nav>
    </div>
  );
}
