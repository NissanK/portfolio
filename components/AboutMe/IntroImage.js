import {React,useState,useEffect,useRef} from 'react'

function IntroImage() {
  const [hovered, setHovered] = useState(false);
  const hoverImageFrame = useRef(null);

  useEffect(() => {
    if(hovered){
      hoverImageFrame.current.firstElementChild.classList.add("w-[17.5rem]");
      hoverImageFrame.current.firstElementChild.classList.add("h-[17.5rem]");
      hoverImageFrame.current.classList.add("bg-highlight");
      
      hoverImageFrame.current.firstElementChild.classList.remove("w-[17.75rem]");
      hoverImageFrame.current.firstElementChild.classList.remove("h-[17.75rem]");
      hoverImageFrame.current.classList.remove("bg-navbar-blue");
    }
    else{
      hoverImageFrame.current.firstElementChild.classList.add("w-[17.75rem]");
      hoverImageFrame.current.firstElementChild.classList.add("h-[17.75rem]");
      hoverImageFrame.current.classList.add("bg-navbar-blue");

      hoverImageFrame.current.firstElementChild.classList.remove("w-[17.5rem]");
      hoverImageFrame.current.firstElementChild.classList.remove("h-[17.5rem]");
      hoverImageFrame.current.classList.remove("bg-highlight");
    }
  }, [hovered])
  

  return (
    <div className='md:mb-0 mb-5'>
        <div ref={hoverImageFrame} className='w-[18rem] h-[18rem] bg-navbar-blue
         flex items-center justify-center rounded-lg transition-all duration-500'>
          <div className='w-[17.75rem] h-[17.5rem] bg-global-bg flex
           items-center justify-center rounded-lg transition-all duration-500'>
            <img src='/images/sample-picture.png'
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            className='rounded-lg w-[16.5rem] h-[16.5rem]'></img>
          </div>
        </div>
    </div>
  )
}


export default IntroImage