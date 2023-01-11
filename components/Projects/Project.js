import React from 'react'
import {FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

function Project({project}) {
    const tools = [];

    for(let i = 0;i<project.tools.length;i++){
        tools.push(<span className='mx-1' key={i}>{project.tools[i]}</span>)
    }

  return (
    <div className='flex rounded'>

        <img src={project.image} 
        className='w-[34rem] border-[1px] border-light-slate rounded'>
        </img>

        <div className=' w-[24rem] py-5 items-end flex flex-col rounded'>
            <div className=' text-2xl md:text-3xl text-highlight'>{project.name}</div>

            <div className='w-[125%] bg-navbar-blue my-4 
            text-xs md:text-sm text-lightest-slate rounded-md p-3 text-end'>
                {project.description}
            </div>

            <div className=' text-light-slate md:text-lg text-sm flex'>
                {tools}
            </div>

            <div className='flex justify-end'>

                <a href={project.github} target={'_blank'}
                className='w-12 h-12 rounded cursor-pointer
                flex justify-center items-center transition-all '>
                <FiGithub className='text-2xl hover:text-highlight transition-all text-light-slate'></FiGithub>
                </a>

                <a href={project.link} target={'_blank'}
                className='w-12 h-12 rounded cursor-pointer
                flex justify-center items-center transition-all '>
                <GoLinkExternal className='text-2xl hover:text-highlight transition-all text-light-slate'></GoLinkExternal>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project