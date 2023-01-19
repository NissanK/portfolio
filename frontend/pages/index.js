import React from 'react';
import Navbar from "../components/Navbar/Navbar"; 
import Intro from '../components/AboutMe/Intro';
import HomeSection from '../components/HomeSection/HomeSection';
import Link from '../components/Links/Link';
import SkillsIndex from '../components/SkillsSection/SkillsIndex';
import ProjectsIndex from '../components/Projects/ProjectsIndex';
import ContactIndex from '../components/Contact/ContactIndex';

export default function Home() {
  return (
    <div className='bg-[#0a3c5e]'>
      <Navbar></Navbar>
      <Link></Link>
      <HomeSection></HomeSection>
      <Intro></Intro>
      <SkillsIndex></SkillsIndex>
      <ProjectsIndex></ProjectsIndex>
      <ContactIndex></ContactIndex>
    </div>
  )
}