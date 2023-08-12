import React, { useState } from "react";
import Image from "next/image";

import data from "../../../public/data/data.json";
import eyeIcon from "../../../public/photos/yeni-section/eye.svg";

export default function NewProducts() {
  const { newWallets, tcartlik, suzdek } = data;
  const [hoverStates, setHoverStates] = useState(
    Array(newWallets.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    setHoverStates((prevStates) => {
      const newHoverStates = [...prevStates];
      newHoverStates[index] = true;
      return newHoverStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates((prevStates) => {
      const newHoverStates = [...prevStates];
      newHoverStates[index] = false;
      return newHoverStates;
    });
  };

  return (
    <div className="w-full h-full flex justify-center flex-col items-center py-12">
      <div className="flex gap-4">
        <div className="sm:flex flex-col gap-12 md:flex-row cursor-pointer p-16 hover:transition-all">
          {newWallets.map((wallet: any, index: number) => (
            <div
              key={index}
              className={`text-[#151515] relative p-4  ${
                hoverStates[index] ? "shadow-green" : ""
              } `}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                src={wallet.src}
                width={255}
                height={255}
                alt={wallet.alt}
                className={`transition-all ${
                  hoverStates[index] ? "h-200" : ""
                }`}
              />
              <div>
                <p className="py-4">{wallet.title}</p>
                <p>{wallet.price}</p>
                <div
                  className={` flex justify-between py-6 ${
                    hoverStates[index] ? "block" : "hidden"
                  }`}
                >
                  <p>SEPETE EKLE</p>
                  <Image src={eyeIcon} height={11} width={17} alt="eye-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:flex flex-col justify-center gap-0.5 p-10 w-screen cursor-pointer items-center md:flex-row">
        <div className="flex flex-col gap-0.5">
          {tcartlik.map(({ src, width, height, alt }, index) => (
            <Image
              key={index}
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
          ))}
        </div>

        <div className="flex flex-col gap-0.5">
          {suzdek.map(({ src, width, height, alt }, index) => (
            <Image
              key={index}
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
