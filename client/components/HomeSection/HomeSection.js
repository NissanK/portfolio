import React from "react";

function Home() {
  return (
    <section className="flex mx-auto my-10 md:my-20 w-4/5 flex-col">
      <h1 className="text-[#c3d9e3] my-3 text-sm md:text-md">Hi I am,</h1>
      <h1 className=" text-5xl md:text-8xl my-3 text-lightest-slate">
        Nissan Kumar
      </h1>
      <h1 className=" text-3xl md:text-6xl my-3 text-dark-slate">
        I am a Student and a Developer
      </h1>
      <button
        className="bold text-sm md:text-md text-global-bg bg-lightest-slate w-[10rem] md:w-[16rem] my-6
      px-4 rounded border-2 border-navbar-blue py-1 flex justify-center
      hover:bg-light-slate
      transition-all"
      >
        View My Projects
      </button>
    </section>
  );
}

export default Home;
