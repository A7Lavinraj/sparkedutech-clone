import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="my-5 flex items-center justify-between">
      <div className="relative w-16 pb-16">
        <Image
          src="/spark-logo.png"
          alt="spark logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ul className="flex items-center gap-10 font-semibold">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/instruments">
          <li>Instruments</li>
        </Link>
        <Link href="#">
          <li>Services</li>
        </Link>
        <Link href="/brochure.pdf" download="brochure.pdf">
          <li className="bg-light400 p-2 text-white rounded">
            Download Brochure
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
