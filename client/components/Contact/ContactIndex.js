import React,{useState,useRef} from "react";
import SectionHeading from "../Universal/SectionHeading";
import emailjs from "@emailjs/browser";
import { useReCaptcha } from "next-recaptcha-v3";


function ContactIndex() {
  const formRef = useRef(null);
  const submitRef = useRef(null);
  const timerRef = useRef(null);
  const [timerTime, setTimerTime] = useState(60);
  const [timerOn, setTimerOn] = useState(false);
  const [userForm, setUserForm] = useState({
    name : "",
    email : "",
    message : ""
  });

  const { executeRecaptcha } = useReCaptcha();

  let name,value;
  const handleInputs = e => {
    name = e.target.name;
    value = e.target.value;

    setUserForm({...userForm, [name] : value});
  }
  
  const clickedSubmit = () =>{

    submitRef.current.disabled = true;
    setTimerOn(true);
    const setTimer = setInterval(() => {
      setTimerTime(timerTime => timerTime- 1);
    }, 1000);
    setTimeout(() => {
      submitRef.current.disabled = false;
      setTimerOn(false);
      clearInterval(setTimer);
      setTimerTime(60);
    }, 60000);

  }

  const postData = async (e) => {
    e.preventDefault();
    const token = await executeRecaptcha("LOGIN"); // captcha token
    console.log(token);

    clickedSubmit();

    const {name,email,message} = userForm;
    const res = await fetch("https://nissanportfolio2.onrender.com/submit",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(
        {
          data : {
            name : name, email:email,message:message
          },
          token : token
        }
      )
    });

    if(res.status === 422 || !data){
      window.alert("Invalid Data");
    }
    else if(res.status === 400 || res.status === 408){
      window.alert(data.error);
    }
    else{
      emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current,process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        window.alert("Your Form has been sent!");
      }, (error) => {
        window.alert("Your form wasn't sent!");
      });

      setUserForm({...userForm, message : ""});
    }
  }


  return (
    <section id="contact" className="my-10 md:my-16 scroll-mt-[80px]">
      <SectionHeading heading="Contact"></SectionHeading>

      <div className=" text-center mx-[10%] text-lg md:text-xl text-lightest-slate my-5"
      data-aos="fade-up" data-aos-once='true' data-aos-duration='5000'>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </div>

      <div className="flex justify-center mt-9">
        <form method="POST" className="w-4/5 sm:w-[70%] md:w-3/5 bg-blue-slate/50 rounded p-6 md:p-8 drop-shadow-xl"
        onSubmit={postData} ref={formRef}
        data-aos="fade-up" data-aos-once='true' data-aos-duration='500'
        >
          <label className="block py-2">
            <span className='block after:content-["*"] after:ml-0.5 after:text-red-500 md:text-lg'>
              Name
            </span>
            <input
              type="text"
              placeholder="Nissan Kumar" name="name"
              value={userForm.name}
              required
              onChange={handleInputs}
              className="block bg-white/40 rounded p-2 w-full my-1 text-navbar-blue/80
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
              placeholder="nissan@example.com" name="email"
              value={userForm.email}
              required
              pattern="[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
              onChange={handleInputs}
              className="block bg-white/40 rounded p-2 w-full my-1 text-navbar-blue/80
              focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg
              text-sm placeholder-lightest-slate"
            ></input>
          </label>

          <label className="block py-2">
            <span className='block after:content-["*"] after:ml-0.5 after:text-red-500 md:text-lg'>
              Message
            </span>
            <textarea
              placeholder="Type your message here" name="message"
              value={userForm.message} required
              onChange={handleInputs}
              className="block bg-white/40 rounded p-2  my-1 text-navbar-blue/80 w-full !h-[100px] md:!h-[150px]
              focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg resize-none
              text-sm placeholder-lightest-slate"
            ></textarea>
          </label> 

          <button type="submit" value="Submit" ref={submitRef}
            className="text-sm md:text-md text-navbar-dark-green bg-[#c8e6fa]/50 w-[9rem] md:w-[12rem] mt-6
            px-4 rounded border-[0.5px] ring-[0.5px] ring-navbar-dark-green border-navbar-dark-green py-1 flex justify-center
            transition-all hover:bg-highlight mx-auto disabled:bg-zinc-300 disabled:text-zinc-500 disabled:border-zinc-500"
          >Submit
          </button>

          {timerOn &&
            <div ref={timerRef} value={timerTime} className="text-global-bg font-[550]
            text-sm md:text-md flex items-center justify-center">
              {timerTime}
            </div>
          }

        </form>
      </div>

    </section>
  );
}

export default ContactIndex;
