import React from "react";
import SectionHeading from "../Universal/SectionHeading";

function ContactIndex() {
  return (
    <section id="contact" className="my-10 md:my-16 scroll-mt-[80px]">
      <SectionHeading heading="Contact"></SectionHeading>

      <div className=" text-center mx-[10%] text-lg md:text-xl text-lightest-slate my-5">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </div>

      <div className="flex justify-center mt-9">
        <form className=" w-[70%] md:w-3/5 bg-light-slate rounded p-6 md:p-8 drop-shadow-xl">
          <label className="block py-2">
            <span className='block after:content-["*"] after:ml-0.5 after:text-red-500 md:text-lg'>
              Name
            </span>
            <input
              type="text"
              placeholder="David"
              className="block bg-white rounded p-2 w-full my-1 text-blue-slate
            focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg
            text-sm placeholder-lightest-slate"
            ></input>
          </label>

          <label className="block py-2">
            <span className='block after:content-["*"] after:ml-0.5 after:text-red-500 md:text-lg'>
              Email
            </span>
            <input
              type="email"
              placeholder="david@example.com"
              className="block bg-white rounded p-2 w-full my-1 text-blue-slate
            focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg peer
            invalid:border-error invalid:text-error focus:invalid:border-error focus:invalid:ring-error
            text-sm placeholder-lightest-slate"
            ></input>
            <p class="mt-2 hidden peer-invalid:block text-error text-xs md:text-sm">
              Please provide a valid email address
            </p>
          </label>

          <label className="block py-2">
            <span className='block after:content-["*"] after:ml-0.5 after:text-red-500 md:text-lg'>
              Message
            </span>
            <textarea
              placeholder="Type your message here"
              className="block bg-white rounded p-2  my-1 text-blue-slate w-full !h-[100px] md:!h-[150px]
            focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg resize-none
            text-sm placeholder-lightest-slate"
            ></textarea>
          </label>

          <button
            className="bold text-sm md:text-md text-navbar-dark-green bg-[#c8e6fa] w-[9rem] md:w-[12rem] mt-6
            px-4 rounded border-[0.5px] ring-[0.5px] ring-navbar-dark-green border-navbar-dark-green py-1 flex justify-center
            transition-all hover:bg-highlight mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactIndex;
