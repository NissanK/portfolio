import { React ,useEffect} from "react";

function SectionHeading(props) {

  
  return (
    <div
      className="font-bold  text-[20px] sm:text-2xl md:text-3xl
       text-light-slate flex justify-start items-center w-4/5 md:w-1/2  mx-[10%]"
       data-aos="fade-up" data-aos-once='true' data-aos-duration='500'
    >
      <div className="h-px md:w-16 w-12 bg-light-slate mr-4"></div>
      <div className=" whitespace-nowrap">{props.heading}</div>
      <div className="h-px w-full bg-light-slate ml-4"></div>
    </div>
  );
}

export default SectionHeading;
