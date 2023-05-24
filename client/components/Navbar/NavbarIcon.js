import React,{useEffect,useState,useRef} from 'react'

function NavbarIcon() {
    const [iconHover, setIconHover] = useState(false);
    const iconHoverRef = useRef(null);

    useEffect(() => {
        if (iconHover === true) {
            iconHoverRef.current.classList.add("hover-underline-animation-hovered");
        } else {
            iconHoverRef.current.classList.remove(
            "hover-underline-animation-hovered"
            );
        }
    }, [iconHover]);

  return (
    <div className="flex items-center h-full px-4 sm:px-6 md:px-8" >

        <img
          className="inline w-[3rem] mr-2 sm:hoverIconAnimation z-10"
          src="/favicon/apple-touch-icon.png"
          alt="Nissan Kumar"
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
          data-aos="fade" data-aos-once='true' data-aos-duration='200'
        ></img>

        <div
          ref={iconHoverRef}
          className="bold text-lg text-lightest-slate sm:hover-underline-animation z-10 opacity-0 sm:opacity-100"
          data-aos="fade" data-aos-once='true' data-aos-duration='200'
        >
          {" "}
          Nissan Kumar
        </div>

      </div>
  )
}

export default NavbarIcon