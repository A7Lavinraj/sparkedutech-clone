import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { RxCross1 } from "react-icons/rx";

interface HamburgerMenuProps {
  enable: boolean;
  stateToggle: () => void;
}

const HamburgerMenu = ({ enable, stateToggle }: HamburgerMenuProps) => {
  return (
    <div
      className={twMerge(
        "bg-light200 w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center transform transition-all",
        enable ? "" : "w-0 invisible",
      )}
    >
      <button
        onClick={stateToggle}
        className="text-light400 text-3xl absolute top-10 right-10 font-bold"
      >
        <RxCross1 />
      </button>
      <ul
        className={twMerge(
          "flex flex-col gap-5 items-center justify-center font-bold text-xl text-light400",
          enable ? "" : "hidden",
        )}
      >
        <Link href="/">
          <li onClick={stateToggle}>Home</li>
        </Link>
        <Link href="/equipments">
          <li onClick={stateToggle}>Equipments</li>
        </Link>
        <Link href="/services">
          <li onClick={stateToggle}>Services</li>
        </Link>
        <Link href="/brochure.pdf" download="brochure.pdf">
          <li
            onClick={stateToggle}
            className="bg-light400 p-2 text-white rounded"
          >
            Download Brochure
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
