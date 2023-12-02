import { useEffect } from "react";

export default function SectionEnter() {
  useEffect(() => {
    document.body.classList.add(`overflow-hidden`);
    setTimeout(() => {
      document.body.classList.remove(`overflow-hidden`);
    }, 1000);
  }, []);

  return (
    <>
      <div className="fixed right-0 top-0 z-40 h-screen animate-navigate bg-[#00000021] backdrop-blur"></div>
      <div className="fixed left-0 top-0 z-40 h-screen animate-navigate bg-[#00000021] backdrop-blur"></div>
    </>
  );
}
