import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { hideLink, showAllLinks } from "../RTK/slices/menuSlice";

import quranAppVideo from "../videos/quran-app-video.mp4";
import recipeAppVideo from "../videos/recipe-app-video.mp4";
import fullTemplateImg from "../imgs/thumbnails/full-template.png";
import eCommerceProductImg from "../imgs/thumbnails/e-commerce-product.png";
import multiStepFormImg from "../imgs/thumbnails/multi-step-form.png";
import ipAddressTrackerImg from "../imgs/thumbnails/ip-address-tracker.png";
import hadithGeneratorImg from "../imgs/thumbnails/hadith-generator.png";
import countrySearcherImg from "../imgs/thumbnails/country-searcher.png";

import reactIcon from "../imgs/icons/react.svg";
import jsIcon from "../imgs/icons/js.svg";
import tailwindIcon from "../imgs/icons/tailwindcss.svg";

import ProjectCard, { CardProps } from "../components/ProjectCard";
import SectionEnter from "../components/SectionEnter";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import * as projects from "../../public/projects.json";

export default function Projects() {
  const [categories, setCategories] = useState([
    { title: "All", active: true },
    { title: "React", active: false, icon: reactIcon },
    { title: "Vanilla JavaScript", active: false, icon: jsIcon },
    { title: "TailwindCSS", active: false, icon: tailwindIcon },
  ]);

  const currentCategory = useMemo(
    () => categories.filter((el) => el.active),
    [categories],
  );

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const [projectsData, setProjectsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllLinks());
    dispatch(hideLink({ projects: false }));

    setProjectsData(projects.default);
  }, []);

  const filteringCategory = (
    e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>,
  ) => {
    setCategories((currCategories) => {
      return currCategories.map((category) => {
        if (
          category.title == (e.target as HTMLButtonElement).id ||
          category.title == (e.target as HTMLImageElement).parentElement?.id
        ) {
          return { ...category, active: true };
        } else {
          return { ...category, active: false };
        }
      });
    });
  };

  const ASSETS = [
    quranAppVideo,
    multiStepFormImg,
    countrySearcherImg,
    eCommerceProductImg,
    fullTemplateImg,
    recipeAppVideo,
    hadithGeneratorImg,
    ipAddressTrackerImg,
  ];

  return (
    <>
      <SectionEnter />

      <Header title="Projects" />

      <div className="relative flex w-full flex-col items-center gap-5 pb-10">
        <span className="relative text-xl font-medium tracking-widest text-white after:absolute after:right-0 after:top-full after:h-0.5 after:w-1/3 after:bg-white after:content-['']">
          Filter
        </span>
        <div className="flex w-full justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.title}
              id={category.title}
              onClick={filteringCategory}
              className={`flex items-center gap-1 rounded-sm ${
                category.active
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              } px-2 py-1 transition`}
            >
              {category.title}
              {category.icon && (
                <img
                  src={category.icon}
                  alt={category.title}
                  className="block w-5"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 640: 2, 768: 3, 1024: 4 }}
        className="container relative mx-auto px-5 pb-5 text-white"
      >
        <Masonry gutter="20px">
          {projectsData.length
            ? projectsData.map((project: CardProps, index: number) =>
                project.techs.includes(currentCategory[0].title) ||
                currentCategory[0].title == `All` ? (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    liveDemo={project.liveDemo}
                    codeLink={project.codeLink}
                    assetSrc={ASSETS[index]}
                    video={project.video}
                    posterSrc={project.posterSrc}
                    techs={project.techs}
                  />
                ) : null,
              )
            : arr.map(() => (
                <div
                  className={`flex h-40 w-full bg-[#00000052] backdrop-blur`}
                ></div>
              ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
