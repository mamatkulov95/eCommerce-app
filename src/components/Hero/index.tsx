import { useState } from "react";
import Image from "next/image";
import data from "../../../public/data/data.json";
import { NavMenuItem } from "../../types/interfaces";
import companyLogo from "../../../public/photos/company-logo.png";
import basketLogo from "../../../public/photos/basket-icon.svg";
import burgerIcon from "../../../public/photos/burger-icon.png";
import closeBurger from "../../../public/photos/exit-icon.png";

export default function Hero() {
  const { navMenu, navIcons } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="sm:px-4 bg-hero w-auto h-screen bg-no-repeat bg-cover bg-center text-white px-14 
  ')"
    >
      <ul
        className="flex justify-between
       gap-4 py-5  items-center"
      >
        <button
          onClick={toggleMenu}
          className={`sm:block relative  transition-opacity ease-in delay-250 cursor-pointer md:hidden
          }`}
        >
          <Image
            src={isMenuOpen ? closeBurger : burgerIcon}
            width={40}
            height={40}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="relative z-20"
          />
          {isMenuOpen && (
            <div
              className="absolute cursor-pointer rounded-md  top-0 left-0
             bg-slate-800 py-10 px-8 shadow-md text-white"
            >
              <ul>
                {navMenu.map((item: NavMenuItem, index: number) => (
                  <li key={index} className="hover:text-cyan-400">
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </button>

        <Image
          className="sm:hidden md:block cursor-pointer"
          src={companyLogo}
          width={80}
          height={80}
          alt="Company-Logo"
        />
        <div className="flex gap-4 justify-center items-center  sm:hidden md:flex">
          {navMenu.map((item: NavMenuItem, index: number) => (
            <li key={index} className="hover:text-cyan-400">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </div>

        <div className="flex gap-4 sm:py-5 cursor-pointer ">
          {navIcons.map((icon: any, index: number) => (
            <li key={index} className="hover:scale-125">
              <Image src={icon.src} width={20} height={20} alt={icon.alt} />
            </li>
          ))}

          <div className="flex gap-1 hover:scale-125">
            <Image src={basketLogo} width={25} height={25} alt="Basket-Logo" />
            <div className="w-5 h-5 rounded-full  bg-white p-1 text-[#0D0D0D] flex justify-center items-center ">
              0
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
