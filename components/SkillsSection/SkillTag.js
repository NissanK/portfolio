import React,{useContext} from 'react'
import { SkillContext } from './SkillsIndex'

function SkillTag(props) {
  return (
    <div>
      <div className=' w-24 h-8 md:w-32 md:h-10 bg-light-slate flex justify-center items-center
        rounded-lg text-xs md:text-sm text-navbar-blue hover:bg-highlight
        transition-all duration-300 mx-2 md:mx-5 mb-6'>
          {props.name}
      </div>
    </div>
  )
}

export default SkillTag