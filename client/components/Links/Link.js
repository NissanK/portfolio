import React,{useEffect,useState} from "react";
import { LogoGithub, LogoInstagram, LogoLinkedin } from "react-ionicons";

function Link() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [mouseNavbar, setMouseNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const mouseEnterHandler = () =>{
    if(isNavbarOpen === false){
      setIsNavbarOpen(true);
    }
    setMouseNavbar(true);
  }
  const mouseLeaveHandler = () =>{
    if(isNavbarOpen === true && scrollY !== 0){
      setIsNavbarOpen(false);
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
      setIsNavbarOpen(false);
    }
    else if(scrollY === 0){
      setIsNavbarOpen(true);
    }
  }, [scrollY,mouseNavbar])

  return (
    <div className=" top-[50%] -translate-y-[50%] float-left hidden md:sticky md:block">
    <div
      className={isNavbarOpen? "transition-all w-14 top-[50%] -translate-y-[50%]  float-left  bg-navbar-blue p-1 rounded-tr rounded-br hidden md:absolute md:block" :
       "w-4 h-[9.5rem] top-[50%] transition-all -translate-y-[50%] cursor-pointer  float-left bg-navbar-blue rounded-tr rounded-br hidden md:absolute md:block opacity-30"}
      // data-aos="fade-right" data-aos-once='true' data-aos-duration='500' data-aos-delay='1800' 
      onClick={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
    >
      {isNavbarOpen? 
      <a
        href="https://www.linkedin.com/in/nissan-kumar-554a7a224/"
        target={"_blank"} rel="noreferrer"
        className="w-12 h-12 rounded bg-navbar-blue hover:bg-navbar-dark-green 
        cursor-pointer flex justify-center items-center transition-all"
      >
        <LogoLinkedin
          color={"#bad8e6"}
          title="logoGithub"
          height="2rem"
          width="2rem"
        />
      </a> : null}
      {isNavbarOpen? <a
        href="https://github.com/NissanK"
        target={"_blank"} rel="noreferrer"
        className="w-12 h-12 rounded bg-navbar-blue hover:bg-navbar-dark-green
        cursor-pointer flex justify-center items-center transition-all"
      >
        <LogoGithub
          color={"#bad8e6"}
          title="logoGithub"
          height="2rem"
          width="2rem"
        />
      </a>: null}
      {isNavbarOpen ?<a
        href="https://www.instagram.com/nissan_kumar72/"
        target={"_blank"} rel="noreferrer"
        className="w-12 h-12 rounded bg-navbar-blue hover:bg-navbar-dark-green
        cursor-pointer flex justify-center items-center transition-all"
      >
        <LogoInstagram
          color={"#bad8e6"}
          title="logoGithub"
          height="2rem"
          width="2rem"
        />
      </a> : null}
    </div>
    </div>
  );
}

export default Link;
