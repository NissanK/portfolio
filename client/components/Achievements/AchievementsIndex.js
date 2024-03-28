import React from 'react'
import SectionHeading from '../Universal/SectionHeading'
import { CaretForwardOutline } from 'react-ionicons';
import AchievementsList from './AchievementsList';


function AchievementsIndex() {
  return (
    <section className="my-10 md:my-16 scroll-mt-[80px]" id="achievements">
        <SectionHeading heading="Achievements"/>
        <div className='flex flex-col my-6 md:my-10 mx-[10%] gap-3' data-aos="fade-up" data-aos-once='true' data-aos-duration='500'>
            {
                AchievementsList.map( (achievement,index) => (
                    <div  key={index} className='text-light-slate flex flex-row'>
                        <CaretForwardOutline
                            color={"#7cfcdf"}
                            title="pointer"
                            height="1rem"
                            width="1rem"
                            className="mr-3 mt-1"
                        />
                        {achievement}
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default AchievementsIndex