import React from "react";
// import row from "../../../../public/row.png";
// import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  return (
    <div className="bg-headerbg text-sm text-white px-14 py-2.5 flex justify-between">
      <div className="font-semibold ">FREE SHIPPING ON ALL ORDERS</div>
      {/* <div className="flex items-center justify-center gap-1.5">
        <p className="font-medium">TR</p>
        <Image
          className="w-full h-auto"
          src={row}
          alt="language-row"
          width={14}
          height={5}
        />
      </div> */}
      <div className="border-x-white">
        <LanguageSwitcher />
        <p>Hello</p>
      </div>
    </div>
  );
}
