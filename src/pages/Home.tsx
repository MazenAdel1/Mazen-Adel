import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="relative flex h-full min-h-[100dvh] flex-col justify-center gap-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-[70px] font-bold leading-[60px] text-white md:text-[120px]">
            Mazen Adel
          </h1>
          <h2 className="text-center text-[25px] text-white md:mt-1 md:text-[55px]">
            Front-End Developer
          </h2>
        </div>
        <div className="-mb-10 flex justify-center gap-10 text-white">
          <Link
            to={"/about"}
            id="about"
            className="relative text-xl after:absolute after:right-0 after:top-full after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-4 focus-visible:after:w-4"
          >
            About
          </Link>
          <Link
            to={"/projects"}
            id="projects"
            className="relative text-xl after:absolute after:right-0 after:top-full after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-4 focus-visible:after:w-4"
          >
            Projects
          </Link>
          <Link
            to={"/contact"}
            id="contact"
            className="relative text-xl after:absolute after:right-0 after:top-full after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-4 focus-visible:after:w-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
