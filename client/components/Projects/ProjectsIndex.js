import React from "react";
import SectionHeading from "../Universal/SectionHeading";
import Project from "./Project";

const projects = [
  {
    name: "TEDxDTU",
    image: "/images/TedXDTU.png",
    description:
      "TEDxDTU is a self-organized branch of the humongous non-profit organization TEDx. A team of developers consisting of DTU students designed the website.",
    tools: ["Next.js", "Node.js", "Tailwind CSS", "Express.js"],
    github: "https://github.com/TEDxDTU/Web",
    link: "https://tedxdtu.in/",
  },
  {
    name: "Rat in a Maze",
    image: "/images/RatInAMaze.png",
    description:
      "This is a visualization of the GFG problem Rat In A Maze. It will display all the possible solutions to the matrix",
    tools: ["React.js", "CSS", "DSA"],
    github: "https://github.com/NissanK/Rat_In_A_Maze_Visualization",
    link: "https://funny-malabi-8c3e4e.netlify.app/",
  },
];

const projectsDOM = [];

for (let i = 0; i < projects.length; i++) {
  projectsDOM.push(<Project project={projects[i]} key={i}></Project>);
}

// The weird margins and padding in the section tag is for the anchor tag from Navbar
// in such a way, such that the navbar doesnt cover the section headings.

// To avoid this error a -mt-20 and pt-20 has been applied and hence the calculations
// have been done in such a way so that the previous margins effects are also applicable

function ProjectsIndex() {
  return (
    <section id="projects" className="my-10 md:my-16 scroll-mt-[80px]">
      <SectionHeading heading="Projects" nav="projects"></SectionHeading>
      <div className="flex items-center my-6 md:my-10 flex-col space-y-12 ">
        {projectsDOM}
      </div>
    </section>
  );
}

export default ProjectsIndex;
