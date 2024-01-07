"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [status, setStatus] = useState(false);

  function hamburgerHandler() {
    setStatus(!status);
  }

  return (
    <React.Fragment>
      <HamburgerMenu stateToggle={hamburgerHandler} enable={status} />
      <nav className="my-5 flex items-center justify-between">
        <Link href="/">
          <div className="relative w-16 pb-16">
            <Image
              src="/spark-logo.png"
              alt="spark logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <button
          onClick={hamburgerHandler}
          className="text-light400 text-2xl sm:hidden"
        >
          <GiHamburgerMenu />
        </button>
        <ul className="sm:flex hidden items-center gap-10 font-semibold">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/equipments">
            <li>Equipments</li>
          </Link>
          <Link href="/brochures">
            <li className="bg-light400 p-2 text-white rounded">
              Explore Brochures
            </li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
