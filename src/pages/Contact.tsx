import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { hideLink, showAllLinks } from "../RTK/slices/menuSlice";
import emailjs from "@emailjs/browser";

import githubIcon from "../imgs/icons/github.svg";
import facebookIcon from "../imgs/icons/facebook.svg";
import linkedinIcon from "../imgs/icons/linkedin.svg";
import SectionEnter from "../components/SectionEnter";

type UserData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const successRef = useRef<HTMLSpanElement>(null);

  const warningRef = useRef<HTMLSpanElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllLinks());
    dispatch(hideLink({ contact: false }));
  }, []);

  const changeInput = (e: React.FormEvent) => {
    warningRef.current?.classList.add(`hidden`);
    warningRef.current?.classList.remove(`block`);
    setUserData((prev) => {
      return {
        ...prev,
        [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement)
          .value,
      };
    });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.name == "" || userData.email == "" || userData.message == "") {
      warningRef.current?.classList.add(`block`);
      warningRef.current?.classList.remove(`hidden`);
    } else {
      emailjs
        .sendForm(
          "service_hx6a418",
          "template_7brma5n",
          form.current as HTMLFormElement,
          "HsOGuXnB1v7NxsYzW",
        )
        .then(() => {
          setUserData({
            name: "",
            email: "",
            message: "",
          });
          successRef.current?.classList.remove(`hidden`);
          setTimeout(() => {
            successRef.current?.classList.add(`hidden`);
          }, 4000);
        });
    }
  };

  return (
    <>
      <SectionEnter />

      <Header title="Contact" />

      <form
        className="relative mx-auto mb-20 flex w-full flex-col gap-7 px-10 pb-5 sm:w-2/3 lg:w-[600px]"
        ref={form}
        onSubmit={submitForm}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="h-10 rounded-md bg-[#ffffff59] px-2 font-medium text-[#2e2e2e] outline-none backdrop-blur"
            onChange={changeInput}
            value={userData.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className=" h-10 rounded-md bg-[#ffffff59] px-2 font-medium text-[#2e2e2e] outline-none backdrop-blur"
            onChange={changeInput}
            value={userData.email}
          />
        </div>
        <div className="z-10 flex flex-col gap-2">
          <label htmlFor="message" className="text-white">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="h-[200px] min-h-[50px] rounded-md bg-[#ffffff59] p-2 font-medium text-[#2e2e2e] outline-none backdrop-blur"
            onChange={changeInput}
            value={userData.message}
          />
        </div>

        <span
          className="hidden w-fit p-1 tracking-wide text-red-800"
          ref={warningRef}
        >
          All Input Fields Are Required
        </span>
        <button
          type="submit"
          className="relative z-10 rounded-md bg-gradient-to-tr from-sky-400 to-sky-600 py-1 font-bold text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:rounded-md after:bg-gradient-to-tr after:from-sky-400 after:to-sky-600 after:opacity-0 after:transition-[opacity] after:duration-300 after:content-[''] hover:after:from-sky-600 hover:after:to-sky-400 hover:after:opacity-100"
        >
          Send
        </button>

        <span
          className="after:animate-timeout relative bottom-[540px] hidden rounded-md bg-gradient-to-br from-green-600 to-green-400 px-2 py-3 text-lg text-white after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-b-lg after:bg-[#00000060]"
          ref={successRef}
        >
          Message Is Successfully Sent!
        </span>

        <span className="absolute -bottom-7 z-0 text-center text-4xl font-semibold leading-[60px] tracking-[25px] text-white sm:bottom-auto sm:left-[106%] sm:top-auto sm:h-full sm:text-xl sm:[writing-mode:vertical-lr]">
          GET IN TOUCH
        </span>
      </form>

      <div className="absolute bottom-3 right-3 flex w-full justify-center gap-3 ">
        <a
          href="https://www.facebook.com/mazen.adelii"
          target="_blank"
          className="block w-8"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/mazen-adel-bab141258/"
          target="_blank"
          className="block w-8"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/MazenAdel1/"
          target="_blank"
          className="block w-8"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </>
  );
}
