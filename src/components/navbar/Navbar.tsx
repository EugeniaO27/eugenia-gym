"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../button/Button";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const itemStyles = "hover:text-primary-500 transition-all duration-300";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, title: "Home", path: "#home" },
    { id: 2, title: "About", path: "#about" },
    { id: 3, title: "Facilities", path: "#facilities" },
    { id: 4, title: "Services", path: "#services" },
  ];
  links.map((link) => {
    console.log(link);
  });
  return (
    <header  className="w-full h-[60px] py-8 flex items-center fixed z-50 bg-gray-100">
      <div className="container flex justify-between items-center">
        <div>
          <Image width={200} height={50} src="/logo.webp" alt="logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10">
          {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <nav
          className={`md:block ${open ? "right-0" : "right-[-100%]"} 
           w-[70%] md:w-auto px-5 md:px-0 pt-20 md:pt-0 h-screen md:h-auto absolute md:static top-0 duration-500
           ease-in-out uppercase font-semibold text-primary-200 bg-primary-500 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row gap-7">
            {links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.id}>
                <Link href={link.path} className={`${itemStyles}`}> 
                {link.title}
                </Link>
              </li>
            ))}
            <div className="flex flex-col md:flex-row gap-5 normal-case">
              <Link className="cursor-default" href="#">
                More
              </Link>
              <Link
                className="px-5 text-primary-400 bg-primary-500 hover:bg-primary-200"
                href="#">
                Own Franchise
              </Link>
            </div>
          </ul>
        </nav>
        <div className="hidden md:flex items-center">
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
