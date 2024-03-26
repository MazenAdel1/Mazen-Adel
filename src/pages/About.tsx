import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideLink, showAllLinks } from "../RTK/slices/menuSlice";

import facebookIcon from "../imgs/icons/facebook.svg";
import linkedinIcon from "../imgs/icons/linkedin.svg";
import githubIcon from "../imgs/icons/github.svg";

import resume1 from "../imgs/resume-1.png";
import resume2 from "../imgs/resume-2.png";

import { Link } from "react-router-dom";
import SectionEnter from "../components/SectionEnter";

import { ICONS } from "../components/icons";

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllLinks());
    dispatch(hideLink({ about: false }));
  }, []);

  return (
    <>
      <SectionEnter />

      <Header title="About" />

      <section className="relative mb-16 w-full bg-[#00000028] text-center text-white backdrop-blur">
        <p className="mx-auto w-full rounded-sm  px-1 py-2 tracking-wide md:w-1/2">
          Welcome to my corner of the digital world! I’m{" "}
          <span className="block bg-gradient-to-br from-white to-[#6cc7ff] bg-clip-text pr-0.5 text-lg font-bold italic text-transparent first-letter:text-3xl">
            Mazen <span className="text-3xl">A</span>del
          </span>
          , a self-taught high school student with an interest in front-end
          development.
          <br className="my-2 block" />
          Through this section, I invite you to explore my projects. I’m excited
          to contribute my unique perspective and skills to the ever-changing
          web development landscape.
        </p>
      </section>
      <section className="container relative mx-auto flex flex-col gap-9 text-center text-white">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl">Skills</h2>
          <div className="grid grid-cols-3 grid-rows-1 place-items-center gap-2 sm:grid-cols-5 lg:px-40">
            {ICONS.map((icon, index) => (
              <div
                key={index}
                id={icon.title}
                className={`relative after:absolute after:bottom-0 after:left-1/2 after:min-w-[70px] after:-translate-x-1/2 after:rounded-sm after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:p-1 after:text-white after:opacity-0 after:transition-all after:delay-300 after:content-[attr(id)] hover:after:bottom-[105%] hover:after:opacity-100`}
              >
                <img
                  src={icon.icon}
                  className={`relative block w-[50px] md:w-[80px] ${
                    icon.styles && icon.styles
                  }`}
                  alt={icon.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative my-24 flex flex-col gap-3 bg-[#ffffff41] py-2 text-white backdrop-blur before:absolute before:right-3 before:top-1/2  before:hidden before:h-max before:-translate-y-1/2 before:text-center before:text-lg before:font-medium before:tracking-widest before:content-['Social_Media'] before:[writing-mode:vertical-rl] sm:before:block">
        <div className="flex h-full flex-wrap items-center justify-center gap-2 sm:gap-4">
          <a
            href="https://www.facebook.com/mazen.adelii"
            target="_blank"
            className="flex items-center"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="block w-8 sm:w-12"
            />
            <span className="relative block overflow-hidden px-1 text-xs font-medium after:absolute after:left-full after:-z-10 after:h-full after:w-full after:bg-[#1877F2] after:transition-all hover:after:left-0 sm:text-base">
              Mazen Adel II
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/mazen-adel-bab141258/"
            target="_blank"
            className="flex items-center"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="block w-8 sm:w-12"
            />
            <span className="relative block overflow-hidden px-1 text-xs font-medium after:absolute after:left-full after:-z-10 after:h-full after:w-full after:bg-[#0a66c2] after:transition-all hover:after:left-0 sm:text-base">
              Mazen Adel
            </span>
          </a>
          <a
            href="https://github.com/MazenAdel1/"
            target="_blank"
            className="flex items-center"
          >
            <img src={githubIcon} alt="GitHub" className="block w-8 sm:w-12" />
            <span className="relative block overflow-hidden px-1 text-xs font-medium after:absolute after:left-full after:-z-10 after:h-full after:w-full after:bg-[#000] after:transition-all hover:after:left-0 sm:text-base">
              MazenAdel1
            </span>
          </a>
        </div>
      </section>
      <section className="relative mx-auto flex flex-col items-center justify-center gap-3 pb-4 text-center text-white">
        <div className="relative flex w-full flex-col gap-5">
          <a
            href="https://drive.google.com/file/d/1bNHmAKVCJGFnmWHdrM3m82vBwmAYNCIi/view?usp=sharing"
            target="_blank"
            className="absolute top-1/2 z-10 block w-full -translate-y-1/2 rounded-md bg-gradient-to-tr from-blue-400 to-blue-600 px-2 py-1 font-medium drop-shadow-xl transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:rounded-md after:bg-gradient-to-tr after:from-blue-400 after:to-blue-600 after:opacity-0 after:transition-[opacity] after:duration-300 after:content-[''] hover:after:from-blue-600 hover:after:to-blue-400 hover:after:opacity-100"
          >
            Resume
          </a>
          <div className="group relative h-[300px]">
            <div className=" absolute -right-5 h-full rotate-[15deg] drop-shadow-2xl transition-all duration-300 group-hover:right-0 group-hover:rotate-0">
              <img src={resume2} alt="resume" className="h-full" />
            </div>
            <div className="absolute -left-10 h-full -rotate-[20deg] drop-shadow-2xl transition-all duration-300 group-hover:left-0 group-hover:rotate-0">
              <img src={resume1} alt="resume" className="h-full" />
            </div>
          </div>
        </div>

        <Link
          to={"/Mazen-Adel/contact"}
          className="relative z-10 mt-16 block w-full rounded-md bg-gradient-to-tr from-blue-400 to-blue-600 px-2 py-1 font-medium drop-shadow-md transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:rounded-md after:bg-gradient-to-tr after:from-blue-400 after:to-blue-600 after:opacity-0 after:transition-[opacity] after:duration-300 after:content-[''] hover:after:from-blue-600 hover:after:to-blue-400 hover:after:opacity-100 sm:mt-10"
        >
          Let’s build something amazing together!
        </Link>
      </section>
    </>
  );
}
