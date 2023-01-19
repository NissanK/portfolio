import React from 'react'
import {FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

function Project({project}) {
    const tools = [];

    for(let i = 0;i<project.tools.length;i++){
        tools.push(<span className='mx-1' key={i}>{project.tools[i]}</span>)
    }

  return (
    <div className='flex rounded justify-center items-center md:flex-row flex-col '>
        
        <div className='relative md:hidden'>
            <img src={project.image} 
            className=' border-[1px] border-light-slate rounded w-4/5 opacity-30 mx-auto'>
            </img>
            <div className='rounded absolute top-0 left-0 w-4/5 sm:p-5 p-2 mx-[10%]'>
                
                <div className=' sm:text-2xl text-lg lg:text-3xl md:text-2xl text-highlight'>
                    {project.name}
                </div>

                <div className=' bg-navbar-blue bg-opacity-60 my-1 text-[0.6rem]
                sm:text-sm text-lightest-slate rounded-md p-2'>
                    {project.description}
                </div>

                <div className=' text-light-slate sm:text-lg text-xs flex'>
                    {tools}
                </div>

            </div>

            <div className='flex mt-2 mx-[10%] justify-end'>

                <a href={project.github} target={'_blank'}
                className='sm:w-8 sm:h-8 h-4 w-4 rounded cursor-pointer
                flex justify-center items-center transition-all mr-2'>
                <FiGithub className='text-2xl hover:text-highlight transition-all text-light-slate'></FiGithub>
                </a>

                <a href={project.link} target={'_blank'}
                className='sm:w-8 sm:h-8 h-4 w-4 rounded cursor-pointer
                flex justify-center items-center transition-all '>
                <GoLinkExternal className='text-2xl hover:text-highlight transition-all text-light-slate'></GoLinkExternal>
                </a>
            </div>
        </div>

        <img src={project.image} 
        className=' w-1/2 h-[18%] lg:w-2/5 lg:h-[14.4%] border-[1px]
        border-light-slate rounded md:flex hidden'>
        </img>
        <div className='w-[30%] h-auto py-5 items-end md:flex flex-col
        rounded hidden'>
            
            <div className=' sm:text-2xl text-lg lg:text-3xl md:text-2xl text-highlight'>{project.name}</div>
            <div className='w-[125%] bg-navbar-blue  my-4 
             md:text-sm text-lightest-slate rounded-md p-3 text-end'>
                {project.description}
            </div>

            <div className=' text-light-slate md:text-lg sm:text-lg text-xs flex'>
                {tools}
            </div>

            <div className='flex justify-end'>

                <a href={project.github} target={'_blank'}
                className='w-12 h-12 rounded cursor-pointer
                flex justify-center items-center transition-all'>
                <FiGithub className='text-2xl hover:text-highlight transition-all text-light-slate'></FiGithub>
                </a>

                <a href={project.link} target={'_blank'}
                className='md:w-12 md:h-12 rounded cursor-pointer
                flex justify-center items-center transition-all '>
                <GoLinkExternal className='text-2xl hover:text-highlight transition-all text-light-slate'></GoLinkExternal>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project