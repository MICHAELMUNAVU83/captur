import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

 

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl ">
            Captur
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
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
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black/90 text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-white duration-300 ease-in-out"
          }
        >
          <ul>
            <Link href="/" className="p-4 text-4xl hover:text-gray-500">
              <li>Home</li>
            </Link>
            <Link href="/#gallery" className="p-4 text-4xl hover:text-gray-500">
              <li>Gallery</li>
            </Link>
            <Link
              href="/portfolio"
              className="p-4 text-4xl hover:text-gray-500"
            >
              <li>Work</li>
            </Link>
            <Link href="/contact" className="p-4 text-4xl hover:text-gray-500">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
