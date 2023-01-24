import React from "react";
import  Link  from "next/link";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>Captur</h1>
        </Link>
        <ul>
          <Link href="/">
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
  );
};

export default NavBar;
