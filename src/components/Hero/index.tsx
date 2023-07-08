import Image from "next/image";
import data from "../../../public/data/data.json";
import { NavMenuItem } from "../../types/interfaces";
import companyLogo from "../../../public/photos/company-logo.png";
import basketLogo from "../../../public/photos/basket-icon.svg";

export default function index() {
  const { navMenu, navIcons } = data;

  return (
    <div
      className="bg-hero w-auto h-[800px] bg-no-repeat bg-cover bg-center text-white px-14 
  ')"
    >
      <ul
        className="flex justify-between
       gap-4 py-5  items-center"
      >
        <Image src={companyLogo} width={80} height={80} alt="Company-Logo" />
        <div className="flex gap-4">
          {navMenu.map((item: NavMenuItem, index: number) => (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </div>

        <div className="flex gap-4">
          {navIcons.map((icon: any, index: number) => (
            <li key={index}>
              <Image src={icon.src} width={20} height={20} alt={icon.alt} />
            </li>
          ))}

          <div className="flex gap-1">
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
