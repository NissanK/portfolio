import React,{useEffect} from "react";
import SectionHeading from "../Universal/SectionHeading";
import SkillTag from "./SkillTag";
import AOS from 'aos';
import 'aos/dist/aos.css'

const skills = [
  { name: "DSA" },
  { name: "CP" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap 5" },
  { name: "CSS3" },
  { name: "HTML5" },
  { name: "Github" },
  { name: "MongoDB" }
];

let skillElements = [];

for (let i = 0; i < skills.length; i++) {
  skillElements.push(
    <SkillTag name={skills[i].name} aosdelay={100*i} key={i} ID={i}></SkillTag>
  );
}


function SkillsIndex() {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="skills" className="my-10 md:my-16 scroll-mt-[80px]" >
      <SectionHeading heading="Skills"></SectionHeading>

      <div className="flex flex-wrap justify-center items-center mx-[5%] mt-6 md:mt-10">
        {skillElements}
      </div>

      <div className="text-light-slate text-lg md:text-xl mt-2 mb-6 md:mb-10 mx-[10%]"
        data-aos="fade-up" data-aos-once='true' data-aos-duration='500' data-aos-delay='1400'
      >
        Here is the link to my{" "}
        <a
          href="https://leetcode.com/abandonedthrasher/"
          target={"_blank"} rel="noreferrer"
          className="text-highlight cursor-pointer hover-underline-animation-highlight transition-all"
        >
          Leetcode
        </a>{" "}
        profile where I practice most of my DSA questions
      </div>
    </section>
  );
}

export default SkillsIndex;
