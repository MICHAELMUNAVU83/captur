import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl ">Captur</h1>
        </Link>
        <ul className="hidden sm:flex">
          <Link href="/">
            <li className="p-4">Home</li>
          </Link>
          <Link href="/#gallery">
            <li className="p-4">Gallery</li>
          </Link>
          <Link href="/portfolio">
            <li className="p-4">Work</li>
          </Link>
          <Link href="/contact">
            <li className="p-4">Contact</li>
          </Link>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose className="text-4xl" onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="text-4xl" onClick={toggleNav} />
          )}
        </div>
        {/*Mobile menu /> */}
        <div className={nav? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-white" :
        "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-white" }>
          <ul>
            <Link href="/" className="p-4 text-4xl">
              <li>Home</li>
            </Link>
            <Link href="/#gallery">
              <li>Gallery</li>
            </Link>
            <Link href="/portfolio">
              <li>Work</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
