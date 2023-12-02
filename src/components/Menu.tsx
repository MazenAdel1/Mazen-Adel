import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../RTK/store";
import { hideLink, showAllLinks, toggleStatus } from "../RTK/slices/menuSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Menu() {
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  function linkClick(e: React.MouseEvent<HTMLElement>) {
    dispatch(toggleStatus(false));
    dispatch(showAllLinks());
    if ((e.target as HTMLElement).id.length) {
      dispatch(hideLink({ [(e.target as HTMLElement).id]: false }));
    }
  }

  useEffect(() => {
    if (menu.status) {
      document.body.classList.add(`overflow-hidden`);
    } else {
      document.body.classList.remove(`overflow-hidden`);
    }
  }, [menu.status]);

  return (
    <div
      className={`fixed ${
        menu.status ? "left-0" : "left-full"
      } top-0 z-50 h-[100dvh] w-full bg-[#0000002a] backdrop-blur-[5px] transition-all duration-300`}
    >
      <div className="flex h-full flex-col justify-center gap-10 pl-20 text-[50px] sm:text-[80px]">
        <Link
          to={"/"}
          className="relative block w-fit font-bold text-white after:absolute after:right-0 after:top-full after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-1/3 focus-visible:after:w-4"
          onClick={linkClick}
        >
          Home
        </Link>
        {menu.about && (
          <Link
            to={"/about"}
            className="relative block w-fit font-bold text-white after:absolute after:right-0 after:top-full after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-1/3 focus-visible:after:w-4"
            id="about"
            onClick={linkClick}
          >
            About
          </Link>
        )}
        {menu.projects && (
          <Link
            to={"/projects"}
            className="relative block w-fit font-bold text-white after:absolute after:right-0 after:top-full after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-1/3 focus-visible:after:w-4"
            id="projects"
            onClick={linkClick}
          >
            Projects
          </Link>
        )}
        {menu.contact && (
          <Link
            to={"/contact"}
            className="relative block w-fit font-bold text-white after:absolute after:right-0 after:top-full after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:after:w-1/3 focus-visible:after:w-4"
            id="contact"
            onClick={linkClick}
          >
            Contact
          </Link>
        )}
      </div>
      <button
        onClick={() => dispatch(toggleStatus(false))}
        className="absolute right-14 top-6 text-[50px]"
      >
        X
      </button>
    </div>
  );
}
