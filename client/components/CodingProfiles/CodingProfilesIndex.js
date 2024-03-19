import React from 'react'
import Leetcode from './Leetcode';
import SectionHeading from '../Universal/SectionHeading';
import LeetcodeRating from './LeetcodeRating';
import { GoLinkExternal } from "react-icons/go";
import Codeforces from './Codeforces';

function CodingProfilesIndex() {
    return (
      <section id="codingProfiles" className="my-10 md:my-16 scroll-mt-[80px]">

        <SectionHeading heading="Coding Profiles" nav="projects"></SectionHeading>

        <div className="flex my-6 md:my-10 mx-[10%] flex-col" data-aos="fade-up" data-aos-once='true' data-aos-duration='500'>
            <div className="flex justify-start items-center mb-4 lg:text-2xl text-xl text-light-slate">
              LeetCode
              <a href="https://leetcode.com/nissankumar/" target={"_blank"} rel="noreferrer">
                <GoLinkExternal className="lg:text-2xl text-xl hover:text-highlight transition-all text-light-slate ml-2"></GoLinkExternal>
              </a>
            </div>
            
            <div className='flex justify-between md:flex-row flex-col'>
              <Leetcode></Leetcode>
              <LeetcodeRating></LeetcodeRating>
            </div>
        </div>

        <div className="flex my-6 md:my-10 mx-[10%] flex-col" data-aos="fade-up" data-aos-once='true' data-aos-duration='500'>
            <div className="flex justify-start items-center mb-4 lg:text-2xl text-xl text-light-slate">
              Codeforces
              <a href="https://codeforces.com/profile/NissanK" target={"_blank"} rel="noreferrer">
                <GoLinkExternal className="lg:text-2xl text-xl hover:text-highlight transition-all text-light-slate ml-2"></GoLinkExternal>
              </a>
            </div>
            
            <div className='flex justify-between'>
              <Codeforces></Codeforces>
            </div>
        </div>
        
      </section>
    );
  }

export default CodingProfilesIndex