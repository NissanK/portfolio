import React,{useState,useRef} from "react";
import SectionHeading from "../Universal/SectionHeading";
import emailjs from "@emailjs/browser";

function ContactIndex() {
  const formRef = useRef(null);
  const [userForm, setUserForm] = useState({
    name : "",
    email : "",
    message : ""
  });

  let name,value;
  const handleInputs = e => {
    name = e.target.name;
    value = e.target.value;

    setUserForm({...userForm, [name] : value});
  }

  const postData = async (e) => {
    e.preventDefault();
    const {name,email,message} = userForm;
    const res = await fetch("https://nissanportfolio2.onrender.com/submit",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name : name, email:email,message:message
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Data");
    }
    else{
      emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current,process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        window.alert("Your Form has been sent!");
        console.log(result.text);
      }, (error) => {
        window.alert("Your form wasn't sent!");
        console.log(error.text);
      });

      setUserForm({...userForm, message : ""});
    }
  }

  return (
    <section id="contact" className="my-10 md:my-16 scroll-mt-[80px]">
      <SectionHeading heading="Contact"></SectionHeading>

      <div className=" text-center mx-[10%] text-lg md:text-xl text-lightest-slate my-5">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </div>

      <div className="flex justify-center mt-9">
        <form method="POST" className="w-[70%] md:w-3/5 bg-light-slate rounded p-6 md:p-8 drop-shadow-xl"
        onSubmit={postData} ref={formRef}
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
              className="block bg-white rounded p-2 w-full my-1 text-blue-slate
            focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg
            invalid:border-error invalid:text-error focus:invalid:border-error focus:invalid:ring-error
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
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleInputs}
              className="block bg-white rounded p-2 w-full my-1 text-blue-slate
            focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg
            invalid:border-error invalid:text-error focus:invalid:border-error focus:invalid:ring-error
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
              className="block bg-white rounded p-2  my-1 text-blue-slate w-full !h-[100px] md:!h-[150px]
            focus:outline-none  focus:border-global-bg focus:ring-1 focus:ring-global-bg resize-none
            invalid:border-error invalid:text-error focus:invalid:border-error focus:invalid:ring-error
            text-sm placeholder-lightest-slate"
            ></textarea>
          </label>

          <button type="submit" value="Submit"
            className="bold text-sm md:text-md text-navbar-dark-green bg-[#c8e6fa] w-[9rem] md:w-[12rem] mt-6
            px-4 rounded border-[0.5px] ring-[0.5px] ring-navbar-dark-green border-navbar-dark-green py-1 flex justify-center
            transition-all hover:bg-highlight mx-auto"
          >Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactIndex;
