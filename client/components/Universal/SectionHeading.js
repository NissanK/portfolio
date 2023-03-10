import { React } from "react";

function SectionHeading(props) {
  return (
    <div
      className="font-bold  text-[26px] sm:text-3xl md:text-4xl
       text-light-slate flex justify-start items-center w-1/2  mx-[10%]"
    >
      <div className="h-px w-16 md:w-12 bg-light-slate mr-4"></div>
      <div className=" whitespace-nowrap">{props.heading}</div>
      <div className="h-px w-full bg-light-slate ml-4"></div>
    </div>
  );
}

export default SectionHeading;
