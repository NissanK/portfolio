import React from "react";
import SectionHeading from "../Universal/SectionHeading";
import SkillTag from "./SkillTag";

const skills = [
  { name: "DSA" },
  { name: "CP" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "Java" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap 5" },
  { name: "CSS3" },
  { name: "HTML5" },
  { name: "Git/Github" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Firebase"},
  { name: "Docker" },
  { name: "JUnit" },
  { name: "Mockito" },
  { name: "Smithy" },
  { name: "AWS"},
];

let skillElements = [];

for (let i = 0; i < skills.length; i++) {
  skillElements.push(
    <SkillTag name={skills[i].name} aosdelay={100*i} key={i} ID={i}></SkillTag>
  );
}

function SkillsIndex() {
  
  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
    <section id="skills" className="my-10 md:my-16 scroll-mt-[80px]" >
      <SectionHeading heading="Skills"></SectionHeading>

      <div className="flex flex-wrap justify-center items-center mx-[5%] mt-6 md:mt-10">
        {skillElements}
      </div>

    </section>
  );
}

export default SkillsIndex;
