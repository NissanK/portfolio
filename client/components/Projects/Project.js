import React, { useEffect, useState, useRef } from "react";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
// import AOS from 'aos';
// import 'aos/dist/aos.css'

function Project({ project , aosAnim }) {
  const [hover, setHover] = useState(false);
  const pImageRef = useRef(null);

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  useEffect(() => {
    if (hover) {
      pImageRef.current.classList.remove("opacity-50");
      pImageRef.current.classList.add("opacity-80");
    } else {
      pImageRef.current.classList.add("opacity-50");
      pImageRef.current.classList.remove("opacity-80");
    }
  }, [hover]);

  const tools = [];

  for (let i = 0; i < project.tools.length; i++) {
    tools.push(
      <span className="mx-1 whitespace-nowrap" key={i}>
        {project.tools[i]}
      </span>
    );
  }

  return (
    <div className="flex rounded justify-center items-center md:flex-row flex-col"
    data-aos={aosAnim} data-aos-once='true' data-aos-duration='500'>
      {/* on less than medium screens this div will be visible  */}

      <div className="relative md:hidden">
        <img
          src={project.image}
          alt={project.name}
          className=" border-[1px] border-light-slate rounded w-4/5 opacity-30 mx-auto"
        ></img>
        <div className="rounded absolute top-0 left-0 w-4/5 sm:p-5 p-2 mx-[10%]">
          <div className=" sm:text-2xl text-lg lg:text-3xl md:text-2xl text-highlight">
            {project.name}
          </div>

          <div
            className=" bg-navbar-blue bg-opacity-60 my-1 text-[0.6rem]
                sm:text-sm text-lightest-slate rounded-md p-2"
          >
            {project.description}
          </div>

          <div className=" text-light-slate sm:text-lg text-xs flex flex-wrap">
            {tools}
          </div>
        </div>

        <div className="flex mt-2 mx-[10%] justify-end">
          <a
            href={project.github}
            target={"_blank"} rel="noreferrer"
            className="sm:w-8 sm:h-8 h-4 w-4 rounded cursor-pointer
                flex justify-center items-center transition-all mr-2"
          >
            <FiGithub className="text-2xl hover:text-highlight transition-all text-light-slate"></FiGithub>
          </a>

          <a
            href={project.link}
            target={"_blank"} rel="noreferrer"
            className="sm:w-8 sm:h-8 h-4 w-4 rounded cursor-pointer
                flex justify-center items-center transition-all "
          >
            <GoLinkExternal className="text-2xl hover:text-highlight transition-all text-light-slate"></GoLinkExternal>
          </a>
        </div>
      </div>

      {/* on greater than medium screens this section will be visible  */}

      <img
        src={project.image}
        alt={project.name}
        ref={pImageRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" w-1/2 h-[18%] lg:w-2/5 lg:h-[14.4%] border-[1px]
        opacity-50 transition-all duration-300
        border-light-slate rounded md:flex hidden ring-1 ring-light-slate"
      ></img>
      <div
        className="w-[30%] h-auto py-5 items-end  rounded
        md:flex flex-col hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className=" sm:text-2xl text-lg lg:text-3xl md:text-2xl text-highlight">
          {project.name}
        </div>
        <div
          className="w-[125%] bg-navbar-blue  my-4 
             md:text-sm text-lightest-slate rounded-md p-3 text-end z-[1]"
        >
          {project.description}
        </div>

        <div className=" text-light-slate md:text-lg sm:text-lg text-xs flex justify-end flex-wrap">
          {tools}
        </div>

        <div className="flex justify-end">
          <a
            href={project.github}
            target={"_blank"} rel="noreferrer"
            className="w-12 h-12 rounded cursor-pointer
                flex justify-center items-center transition-all"
          >
            <FiGithub className="text-2xl hover:text-highlight transition-all text-light-slate"></FiGithub>
          </a>

          <a
            href={project.link}
            target={"_blank"} rel="noreferrer"
            className="md:w-12 md:h-12 rounded cursor-pointer
                flex justify-center items-center transition-all "
          >
            <GoLinkExternal className="text-2xl hover:text-highlight transition-all text-light-slate"></GoLinkExternal>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
