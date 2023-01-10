import React,{useEffect,useState,useRef} from 'react'
import SectionHeading from '../Universal/SectionHeading'
import SkillTag from './SkillTag'

const skills = [{name: "DSA",progress: 90},{name: "CP",progress: 65},{name: "React.js",progress: 70}
,{name: "Next.js",progress: 30},{name: "Node.js",progress: 30},{name: "Express.js",progress: 30}
,{name: "C++",progress: 75},{name: "Tailwind CSS",progress: 70},{name: "JavaScript",progress: 70}
,{name: "Bootstrap 5",progress: 45},{name: "HTML",progress: 75},{name: "CSS",progress: 75}
,{name: "Github",progress: 30}]

let skillElements = [];

for(let i = 0;i<skills.length;i++){
  skillElements.push(<SkillTag name={skills[i].name} key={i} ID={i}></SkillTag>)
}

export const SkillContext = React.createContext();

function skillsIndex() {
  const [selectedID, setSelectedID] = useState(-1);
  const ProgressBarRef = useRef(null)
  
  return (
    <div>
      <SectionHeading heading = "Skills"></SectionHeading>
      <div className='flex flex-wrap justify-center items-center mx-[5%] mt-6 md:mt-10'>
        <SkillContext.Provider value = {[selectedID,setSelectedID]}>
          {skillElements}
        </SkillContext.Provider>
      </div>

      <div className='text-light-slate text-xl md:text-2xl  mx-auto justify-center items-center flex mt-2 mb-4'>Proficiency</div>

      <div className=' w-3/5 md:w-1/2 h-6 sm:h-7 md:h-8 bg-lightest-slate mx-auto rounded-full'>
        {selectedID === -1 ? null :
          <div ref={ProgressBarRef} className={`h-6 sm:h-7 md:h-8 bg-blue-slate rounded-full
          flex items-center justify-center text-navbar-blue
          opacity-1 transition-all duration-300`} style={{width : `${skills[selectedID].progress}%`}}>
          {skills[selectedID].progress}%</div>
        }
      </div>

      <div className='text-light-slate text-lg md:text-xl my-6 mx-[10%]'>Here is the link to my
       <a href='https://leetcode.com/abandonedthrasher/' target={'_blank'} className='text-highlight cursor-pointer'> Leetcode </a>
       profile where I practice most of my DSA questions</div>  
    </div>
  )
}

export default skillsIndex