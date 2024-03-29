import React,{useRef,useEffect,useState} from "react";
import Particle from "../Universal/Particle";

function Home() {
  const linkRef = useRef(null);
  const wrapperRef = useRef(null);

  const [particleArray, setParticleArray] = useState([]);

  useEffect(() => {
    function anchorSmoothScroll(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    }
    linkRef.current.addEventListener("click",anchorSmoothScroll);

    return () =>{
        linkRef.current.removeEventListener('click',anchorSmoothScroll);
    }
  }, []);

  useEffect(() => {
    let newParticleArray = [];
    for(let i = 0;i<13;i++){
      newParticleArray.push(<Particle key={i}></Particle>);
    }

    setParticleArray(newParticleArray);
  }, [])

  return (
    <section className="flex mx-auto h-[90vh] w-4/5 flex-col justify-center wrapper md:pt-[80px]" ref={wrapperRef}>

      {/* background animation spans check global css */}
      {particleArray}

      <h1 className="text-[#c3d9e3] my-3 text-md"
      data-aos="fade-up" data-aos-once='true' data-aos-duration='500' data-aos-delay='1000'>Hi I am,</h1>

      <h1 className=" text-5xl md:text-8xl my-3 text-lightest-slate"
      data-aos="fade-up" data-aos-once='true' data-aos-duration='500' data-aos-delay='1100'
      >
        Nissan Kumar
      </h1>

      <h1 className=" text-4xl md:text-6xl my-3 text-dark-slate"
      data-aos="fade-up" data-aos-once='true' data-aos-duration='500' data-aos-delay='1200'
      >
        I am a Student and a Developer
      </h1>

      <a href="#projects" ref={linkRef}
        className="bold text-sm md:text-md text-global-bg bg-lightest-slate w-[10rem] md:w-[16rem] my-6
      px-4 rounded border-2 border-navbar-blue py-1 flex justify-center
      hover:bg-light-slate cursor-pointer
      transition-all"
      data-aos="fade-up" data-aos-once='true' data-aos-duration='500' data-aos-delay='1300'
      >
        View My Projects
      </a>

    </section>
  );
}

export default Home;
