import { useDispatch } from "react-redux";
import { toggleStatus } from "../RTK/slices/menuSlice";

export default function Header({ title }: { title: string }) {
  const dispatch = useDispatch();

  return (
    <header className="relative mb-4 flex justify-between pl-3 pr-8 sm:pr-14">
      <h1 className="relative text-[50px] text-white after:absolute after:bottom-2 after:right-0 after:h-0.5 after:w-1/3 after:bg-white after:content-[''] md:mt-[-20px] md:text-[90px] md:after:bottom-4 md:after:h-1">
        {title}
      </h1>
      <button
        className="flex flex-col justify-center gap-2"
        onClick={() => dispatch(toggleStatus(true))}
      >
        <span className="block h-1 w-10 bg-black"></span>
        <span className="block h-1 w-10 bg-black"></span>
        <span className="block h-1 w-10 bg-black"></span>
      </button>
    </header>
  );
}
