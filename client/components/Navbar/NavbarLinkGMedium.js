import React,{useRef,useEffect} from 'react'

// GMedium in name stands for above medium screens 

function NavbarLinkGMedium(props) {
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
            if (linkRef.current !== null) {
                linkRef.current.removeEventListener('click',anchorSmoothScroll);
            }
        }
    }, []);

    return (
        <li>
            <a
            href={props.nameID} ref={linkRef}
            className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
            data-aos="fade-down" data-aos-once='true' data-aos-duration='500' data-aos-delay={props.aosdelay}
            >
            {props.name}
            </a>
        </li>
    )
}

export default NavbarLinkGMedium