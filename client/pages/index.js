import React,{useEffect,useRef} from 'react';
import Navbar from "../components/Navbar/Navbar"; 
import Intro from '../components/AboutMe/Intro';
import HomeSection from '../components/HomeSection/HomeSection';
import Link from '../components/Links/Link';
import SkillsIndex from '../components/SkillsSection/SkillsIndex';
import ProjectsIndex from '../components/Projects/ProjectsIndex';
import ContactIndex from '../components/Contact/ContactIndex';
import Footer from '../components/Footer/Footer';
import NavbarMobile from '../components/Navbar/NavbarMobile';

import AOS from 'aos';
import 'aos/dist/aos.css'
import CodingProfilesIndex from '../components/CodingProfiles/CodingProfilesIndex';
import ExperienceIndex from '../components/Experience/ExperienceIndex';
import AchievementsIndex from '../components/Achievements/AchievementsIndex';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='bg-gradient-to-r from-light-global-bg to-global-bg' id='home'>
      <Navbar></Navbar>
      <NavbarMobile></NavbarMobile>
      <Link></Link>
      <HomeSection></HomeSection>
      <Intro></Intro>
      <ExperienceIndex></ExperienceIndex>
      <SkillsIndex></SkillsIndex>
      <AchievementsIndex></AchievementsIndex>
      <CodingProfilesIndex></CodingProfilesIndex>
      <ProjectsIndex></ProjectsIndex>
      <ContactIndex></ContactIndex>
      <Footer></Footer>
    </div>
  )
}