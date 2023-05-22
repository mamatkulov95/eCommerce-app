import React from "react";
import row from "../../../../public/row.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-headerbg text-sm text-white px-14 py-2.5 flex justify-between">
      <div className="font-semibold ">FREE SHIPPING ON ALL ORDERS</div>
      <div className="flex items-center justify-center gap-1.5">
        <p className="font-medium">TR</p>
        <Image src={row} alt="language-row" width={14} height={5} />
      </div>
    </div>
  );
}
