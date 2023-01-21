import React from 'react'
import { useRef ,useEffect} from "react";

// BMedium in name stands for above medium screens 


function NavbarLinkBMedium(props) {
    const linkRef = useRef(null);

    useEffect(() => {
        function anchorSmoothScroll(e){
            e.preventDefault();
            console.log(linkRef.current);
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"
            });
        }
        linkRef.current.addEventListener("click",anchorSmoothScroll);

        return () =>{
            linkRef.current.removeEventListener('click',anchorSmoothScroll);
        }
    }, [])

  return (
    <li className="my-2 ml-[50%] flex justify-center mr-[22%]">
        <a  ref={linkRef}
            href={props.nameID}
            className="cursor-pointer bold text-md hover-underline-animation text-lightest-slate"
        >
            {props.name}
        </a>
    </li>
  )
}

export default NavbarLinkBMedium