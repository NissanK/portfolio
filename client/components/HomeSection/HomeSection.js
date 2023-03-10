import React,{useRef,useEffect} from "react";

function Home() {
  const linkRef = useRef(null);
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

  return (
    <section className="flex mx-auto h-[90vh] w-4/5 flex-col justify-center wrapper">
      {/* background animation spans check global css */}
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
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <h1 className="text-[#c3d9e3] my-3 text-md">Hi I am,</h1>
      <h1 className=" text-5xl md:text-8xl my-3 text-lightest-slate">
        Nissan Kumar
      </h1>
      <h1 className=" text-4xl md:text-6xl my-3 text-dark-slate">
        I am a Student and a Developer
      </h1>
      <a href="#projects" ref={linkRef}
        className="bold text-sm md:text-md text-global-bg bg-lightest-slate w-[10rem] md:w-[16rem] my-6
      px-4 rounded border-2 border-navbar-blue py-1 flex justify-center
      hover:bg-light-slate cursor-pointer
      transition-all"
      >
        View My Projects
      </a>
    </section>
  );
}

export default Home;
