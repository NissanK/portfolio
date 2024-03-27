import {React,useState,useEffect,useRef} from 'react'
import SectionHeading from '../Universal/SectionHeading'

import ExperienceList from './ExperienceList'
import { CaretForwardOutline } from 'react-ionicons';
import { GoLinkExternal } from "react-icons/go";

function ExperienceIndex() {

    const [currentRole, setCurrentRole] = useState(0);
    const [translationValueY, setTranslationValueY] = useState('0rem');
    const [translationValueX, setTranslationValueX] = useState('0rem');

    useEffect(() => {
        setTranslationValueY(`${((2.25)*currentRole)}rem`);
        setTranslationValueX(`${((8)*currentRole)}rem`);
    }, [currentRole])
    
  return (
    <section className="my-10 md:my-16 scroll-mt-[80px]" id='experience'>
        <SectionHeading heading='Experience'/>
        <div className="flex md:flex-row flex-col my-6 md:my-10 mx-[5%] md:mx-[10%] items-center md:items-baseline justify-center">

            <div className='md:w-36 w-fit h-fit flex md:flex-col flex-row md:ml-0 md:mr-10 md:mb-0 mb-4 items-end md:items-stretch'>

                <div style={{ transform : `translateY(${translationValueY})`}} // this is for above medium screens
                className={`w-1 h-[36px] absolute bg-highlight transition-transform delay-100 duration-200 hidden md:block`}></div>

                <div style={{ transform : `translateX(${translationValueX})`}} // for below medium screens
                className={`w-[8rem] h-1 absolute bg-highlight transition-transform delay-100 duration-200 md:hidden`}></div>

                {
                    ExperienceList.map(exp =>(

                        <div className={`flex md:flex-row flex-col-reverse cursor-pointer active:bg-light-slate/40
                        ${exp.expId === currentRole ? 'text-highlight bg-light-slate/[0.05]' :
                         'bg-light-slate/[0.05] text-light-slate'} transition-all delay-100 duration-200`} 
                        onClick={() => setCurrentRole(exp.expId)}>

                            <div className='md:w-1 md:h-auto w-32 h-1 justify-self-end bg-lightest-slate/20'></div>
                            <div className='p-2 text-sm text-center w-32 md:w-full'>{exp.company}</div>

                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col bg-light-slate/[0.05] w-[90%] md:w-2/3 p-4 rounded-lg text-light-slate'>

                <div className='text-lg' >

                    {ExperienceList[currentRole].role} {' '}
                    <span className=' text-highlight'> @ {ExperienceList[currentRole].company}</span>

                    {ExperienceList[currentRole].link !== null ? 
                        <a
                        href={ExperienceList[currentRole].link}
                        target={"_blank"} rel="noreferrer">
                            <GoLinkExternal className="text-lg hover:text-highlight transition-all text-light-slate inline ml-2 mb-1 cursor-pointer"></GoLinkExternal>
                        </a>
                        : null
                    }

                </div>

                <div className='text-sm mt-1 mb-4'>
                    {ExperienceList[currentRole].timeline.start} - {ExperienceList[currentRole].timeline.end}
                </div>
                
                <div>

                </div>
                {/* <a
                    href="#"
                    target={"_blank"} rel="noreferrer"
                    className="sm:w-8 sm:h-8 h-4 w-4 rounded cursor-pointer
                        flex justify-center items-center transition-all "
                >
                </a> */}

                {
                    ExperienceList[currentRole].keypoints.map((point) => (
                        <div className='flex'>
                            <CaretForwardOutline
                                color={"#7cfcdf"}
                                title="pointer"
                                height="1rem"
                                width="1rem"
                                className='mr-3 mt-1'
                            />
                            {point}
                        </div>
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default ExperienceIndex