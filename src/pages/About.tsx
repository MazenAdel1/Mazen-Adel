import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideLink, showAllLinks } from "../RTK/slices/menuSlice";

import htmlIcon from "../imgs/icons/html.svg";
import cssIcon from "../imgs/icons/css.svg";
import jsIcon from "../imgs/icons/js.svg";
import tsIcon from "../imgs/icons/ts.svg";
import gitIcon from "../imgs/icons/git.svg";
import tailwindcssIcon from "../imgs/icons/tailwindcss.svg";
import bootstrapIcon from "../imgs/icons/bootstrap.svg";
import reactIcon from "../imgs/icons/react.svg";
import reduxIcon from "../imgs/icons/redux.svg";
import githubIcon from "../imgs/icons/github.svg";
import facebookIcon from "../imgs/icons/facebook.svg";
import linkedinIcon from "../imgs/icons/linkedin.svg";

import { Link } from "react-router-dom";
import SectionEnter from "../components/SectionEnter";

const ICONS = [
  { icon: htmlIcon, title: "HTML" },
  { icon: cssIcon, title: "CSS" },
  { icon: jsIcon, title: "JavaScript" },
  { icon: tsIcon, title: "TypeScript" },
  { icon: gitIcon, title: "Git" },
  { icon: tailwindcssIcon, title: "TailwindCSS" },
  { icon: bootstrapIcon, title: "Bootstrap" },
  { icon: reactIcon, title: "React" },
  { icon: reduxIcon, title: "Redux" },
  { icon: githubIcon, title: "Github" },
];

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

      <div className="container relative mx-auto flex flex-col gap-9 text-center text-white">
        <p className="mx-auto w-full rounded-sm bg-[#00000028] px-1 py-2 tracking-wide backdrop-blur-sm md:w-2/3">
          Welcome to my corner of the digital world! I’m{" "}
          <span className="block bg-gradient-to-br from-white to-[#6cc7ff] bg-clip-text pr-0.5 text-lg font-bold italic text-transparent first-letter:text-3xl">
            Mazen <span className="text-3xl">A</span>del
          </span>
          , a self-taught high school student with an interest in front-end
          development.
          <pre className="py-2" />
          Through this section, I invite you to explore my projects, each of
          which represents a step in my ongoing learning process. I believe that
          age is no barrier to innovation in the tech world, and I’m excited to
          contribute my unique perspective and skills to the ever-changing web
          development landscape.
        </p>
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
                  className={`relative block w-[50px] md:w-[80px]
                  ${
                    icon.title == "Redux"
                      ? "w-[40px] rounded-md bg-purple-600 p-2 md:w-[60px]"
                      : ""
                  }
                  
                  ${
                    icon.title == "TailwindCSS"
                      ? " rounded-md bg-cyan-950 p-1"
                      : ""
                  }

                  ${icon.title == "React" ? " rounded-md bg-cyan-950 p-1" : ""}
                  `}
                  alt={icon.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative my-16 flex flex-col gap-3 bg-[#ffffff41] py-2 text-white backdrop-blur before:absolute before:right-3 before:top-1/2  before:hidden before:h-max before:-translate-y-1/2 before:text-center before:text-lg before:font-medium before:tracking-widest before:content-['Social_Media'] before:[writing-mode:vertical-rl] sm:before:block">
        <div className="flex h-full items-center justify-center gap-4">
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
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center gap-3 pb-4 text-center text-white">
        <a
          href="https://drive.google.com/file/d/1yEp3ZmzcJLec9AOQMAUC_9ljos4gBAYj/view?usp=sharing"
          target="_blank"
          className="relative z-10 block w-full rounded-md bg-gradient-to-tr from-blue-400 to-blue-600 px-2 py-1 font-medium drop-shadow-md transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:rounded-md after:bg-gradient-to-tr after:from-blue-400 after:to-blue-600 after:opacity-0 after:transition-[opacity] after:duration-300 after:content-[''] hover:after:from-blue-600 hover:after:to-blue-400 hover:after:opacity-100"
        >
          Resume
        </a>
        <Link
          to={"/Mazen-Adel/contact"}
          className="relative z-10 block w-full rounded-md bg-gradient-to-tr from-blue-400 to-blue-600 px-2 py-1 font-medium drop-shadow-md transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:rounded-md after:bg-gradient-to-tr after:from-blue-400 after:to-blue-600 after:opacity-0 after:transition-[opacity] after:duration-300 after:content-[''] hover:after:from-blue-600 hover:after:to-blue-400 hover:after:opacity-100"
        >
          Let’s build something amazing together!
        </Link>
      </div>
    </>
  );
}
