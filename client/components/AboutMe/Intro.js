import { React } from "react";
import IntroImage from "./IntroImage";
import { LogoGithub, LogoInstagram, LogoLinkedin } from "react-ionicons";
import SectionHeading from "../Universal/SectionHeading";

function Intro() {
  return (
    <section className="my-10 md:my-16 scroll-mt-[80px]" id="about">
      <SectionHeading heading="About Me"></SectionHeading>

      <div className="flex flex-col md:flex-row justify-center items-center my-6 md:my-10">
        <IntroImage></IntroImage>

        <div className="md:w-1/2 mx-10">
          <h1 className="text-light-slate text-2xl md:text-3xl my-1">I&apos;m 19 years old and I&apos;m a developer from <span className="text-[#7cfcdf]">India</span>.</h1>

          <h1 className="text-light-slate text-lg md:text-xl my-3">I&apos;m Currently pursuing my <span className="text-highlight">B.Tech</span> in <span className="text-highlight">Mathematics and Computing</span> from <span className="text-highlight"> Delhi Technological University</span></h1>

          <h1 className="text-light-slate text-lg md:text-xl my-1">
            I am majorly a <span className="text-highlight"> Frontend Web Developer/ Competitive Programmer</span>, trying to explore different domains and enjoy college life. Feel free to connect with me using my social links.
          </h1>

          <div className="flex justify-center md:justify-start items-center space-x-4 mt-3 md:my-3">
            <a
              href="https://github.com/NissanK"
              target={"_blank"} rel="noreferrer"
              className="w-12 h-12 rounded hover:bg-navbar-blue
            cursor-pointer flex justify-center items-center transition-all"
            >
              <LogoGithub
                color={"#a6d7f8"}
                title="logoGithub"
                height="2rem"
                width="2rem"
              />
            </a>
            <a
              href="https://github.com/NissanK"
              target={"_blank"} rel="noreferrer"
              className="w-12 h-12 rounded hover:bg-navbar-blue
            cursor-pointer flex justify-center items-center transition-all"
            >
              <LogoInstagram
                color={"#a6d7f8"}
                title="logoGithub"
                height="2rem"
                width="2rem"
              />
            </a>
            <a
              href="https://github.com/NissanK"
              target={"_blank"} rel="noreferrer"
              className="w-12 h-12 rounded hover:bg-navbar-blue
            cursor-pointer flex justify-center items-center transition-all"
            >
              <LogoLinkedin
                color={"#a6d7f8"}
                title="logoGithub"
                height="2rem"
                width="2rem"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
