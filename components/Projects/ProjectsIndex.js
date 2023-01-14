import React from 'react'
import SectionHeading from '../Universal/SectionHeading'

import Project from './Project';

const projects = [{
  name: 'TEDxDTU',
  image : '/images/TedXDTU.png',
  description : 'TEDxDTU is a self-organized branch of the humongous non-profit organization TEDx. A team of developers consisting of DTU students designed the website.',
  tools : ['Next.js','Node.js','Tailwind CSS','Express.js'],
  github : 'https://github.com/TEDxDTU/Web',
  link : 'https://tedxdtu.in/'
},
{
  name: 'Rat in a Maze',
  image : '/images/RatInAMaze.png',
  description : 'This is a visualization of the GFG problem Rat In A Maze. It will display all the possible solutions to the matrix',
  tools : ['React.js','CSS','DSA'],
  github : 'https://github.com/NissanK/Rat_In_A_Maze_Visualization',
  link : 'https://funny-malabi-8c3e4e.netlify.app/'
},

]

const projectsDOM = [];

for(let i = 0;i<projects.length;i++){
  projectsDOM.push(<Project project={projects[i]} key={i}></Project>)
}

function ProjectsIndex() {
  return (
    <div>
      <SectionHeading heading="Projects"></SectionHeading>
      <div className='flex items-center my-6 md:my-10 flex-col space-y-12 '>
        {projectsDOM}
      </div>
    </div>
  )
}

export default ProjectsIndex