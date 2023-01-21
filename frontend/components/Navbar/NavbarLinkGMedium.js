import React,{useRef,useEffect} from 'react'

// GMedium in name stands for above medium screens 

function NavbarLinkGMedium(props) {
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
        <li>
            <a
            href={props.nameID} ref={linkRef}
            className="cursor-pointer bold text-lg hover-underline-animation text-lightest-slate"
            >
            {props.name}
            </a>
        </li>
    )
}

export default NavbarLinkGMedium