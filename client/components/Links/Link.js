import React,{useEffect} from "react";
import { LogoGithub, LogoInstagram, LogoLinkedin } from "react-ionicons";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Link() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      className="w-14 top-[40%] -translate-y-[40%]  float-left
      bg-navbar-blue p-1 rounded-tr rounded-br
      hidden md:sticky md:block"
      data-aos="fade-right" data-aos-once='true' data-aos-duration='500' data-aos-delay='1800' 
    >
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
      </a>
      <a
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
      </a>
      <a
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
      </a>
    </div>
  );
}

export default Link;
