import worldIcon from "../imgs/icons/world.gif";
import githubIcon from "../imgs/icons/github.svg";
import { useEffect, useRef } from "react";

export type CardProps = {
  title: string;
  liveDemo: string;
  codeLink: string;
  assetSrc: string;
  video: boolean;
  posterSrc?: string;
  techs: string[];
};

export default function ProjectCard({
  title,
  liveDemo,
  codeLink,
  assetSrc,
  video,
  posterSrc,
  techs,
}: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardRef.current?.addEventListener(`mouseenter`, () => {
      videoRef.current?.play();
    });
    cardRef.current?.addEventListener(`mouseleave`, () => {
      videoRef.current?.pause();
    });
  }, []);

  return (
    <>
      <div
        className={`group flex w-full flex-col gap-2 overflow-hidden bg-[#00000028] pb-2 backdrop-blur`}
        ref={cardRef}
      >
        <div className="relative flex-1">
          {!video ? (
            <img
              src={assetSrc}
              alt="full template"
              className="block h-full w-full"
            />
          ) : (
            <video
              loop
              src={assetSrc}
              className="h-full object-fill"
              ref={videoRef}
              poster={posterSrc}
            ></video>
          )}

          <div
            className={`absolute bottom-full flex h-full w-full items-center justify-center gap-1 bg-[#0000003f] backdrop-blur-sm transition-all delay-500 group-hover:bottom-0`}
          >
            <div className="flex flex-wrap justify-center gap-1">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-gradient-to-bl from-blue-800 to-blue-500 p-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-fit items-center justify-between px-2">
          <span className="flex-1 font-semibold">{title}</span>
          <div className="flex flex-1 flex-col items-end gap-0.5">
            <a
              href={liveDemo}
              target="_blank"
              className="flex items-center justify-center gap-1 bg-[#ffffff48] px-1 py-0.5 text-white backdrop-blur"
            >
              Live Demo
              <img src={worldIcon} className="block h-5 w-5 rounded-full" />
            </a>
            <a
              href={codeLink}
              target="_blank"
              className="flex items-center justify-center gap-1 bg-[#ffffff48] px-1 py-0.5 text-white backdrop-blur"
            >
              Code <img src={githubIcon} alt="github" className="block w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}