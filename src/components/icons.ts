import htmlIcon from "../imgs/icons/html.svg";
import cssIcon from "../imgs/icons/css.svg";
import jsIcon from "../imgs/icons/js.svg";
import tsIcon from "../imgs/icons/ts.svg";
import gitIcon from "../imgs/icons/git.svg";
import tailwindcssIcon from "../imgs/icons/tailwindcss.svg";
import bootstrapIcon from "../imgs/icons/bootstrap.svg";
import reactIcon from "../imgs/icons/react.svg";
import nextIcon from "../imgs/icons/nextjs.svg";
import reduxIcon from "../imgs/icons/redux.svg";
import githubIcon from "../imgs/icons/github.svg";

const ICONS = [
  { icon: htmlIcon, title: "HTML" },
  { icon: cssIcon, title: "CSS" },
  { icon: jsIcon, title: "JavaScript" },
  { icon: tsIcon, title: "TypeScript" },
  { icon: gitIcon, title: "Git" },
  {
    icon: tailwindcssIcon,
    title: "TailwindCSS",
    styles: "rounded-md bg-cyan-950 p-1",
  },
  { icon: bootstrapIcon, title: "Bootstrap" },
  { icon: reactIcon, title: "React", styles: "rounded-md bg-cyan-950 p-1" },
  { icon: nextIcon, title: "Next.js" },
  {
    icon: reduxIcon,
    title: "Redux",
    styles: "w-[40px] rounded-md bg-purple-600 p-2 md:w-[60px]",
  },
  { icon: githubIcon, title: "Github" },
];

export { ICONS };
