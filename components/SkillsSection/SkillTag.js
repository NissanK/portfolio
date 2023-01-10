import React,{useContext} from 'react'
import { SkillContext } from './SkillsIndex'

function SkillTag(props) {
  const setSelectedID = useContext(SkillContext)[1];
  const selectedID = useContext(SkillContext)[0];
  return (
    <div>
      {selectedID === props.ID ? 
        <div className=' w-[6.5rem] h-[2.1rem] md:w-[8.75rem] md:h-[2.6rem] bg-highlight flex justify-center items-center
          rounded-lg text-xs md:text-sm text-navbar-blue transition-all duration-300 
          cursor-pointer mx-2 md:mx-6 mb-6'
          onClick={() => setSelectedID(props.ID)}>
            {props.name}
        </div>
        :
        <div className=' w-24 h-8 md:w-32 md:h-10 bg-light-slate flex justify-center items-center
          rounded-lg text-xs md:text-sm text-navbar-blue hover:bg-highlight transition-all duration-300
          cursor-pointer mx-2 md:mx-5 mb-6'
          onClick={() => setSelectedID(props.ID)}>
            {props.name}
        </div>
      }
    </div>
  )
}

export default SkillTag