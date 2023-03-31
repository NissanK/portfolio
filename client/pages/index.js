import React,{useEffect} from 'react';
import Navbar from "../components/Navbar/Navbar"; 
import Intro from '../components/AboutMe/Intro';
import HomeSection from '../components/HomeSection/HomeSection';
import Link from '../components/Links/Link';
import SkillsIndex from '../components/SkillsSection/SkillsIndex';
import ProjectsIndex from '../components/Projects/ProjectsIndex';
import ContactIndex from '../components/Contact/ContactIndex';
import Footer from '../components/Footer/Footer';
import NavbarMobile from '../components/Navbar/NavbarMobile';

export default function Home() {

  return (
    <div className='bg-gradient-to-r from-[#0e5b8f] to-global-bg' id='home'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Navbar></Navbar>
      <NavbarMobile></NavbarMobile>
      <Link></Link>
      <HomeSection></HomeSection>
      <Intro></Intro>
      <SkillsIndex></SkillsIndex>
      <ProjectsIndex></ProjectsIndex>
      <ContactIndex></ContactIndex>
      <Footer></Footer>
    </div>
  )
}