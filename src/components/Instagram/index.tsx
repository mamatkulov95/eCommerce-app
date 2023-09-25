import Image from "next/image";

import instagramIcon from "@@/public/photos/instagram-icon.svg";
import smallInstagram from "@@/public/photos/small-instagram.svg";
import mainGridImg from "@@/public/photos/main-grid-img.svg";
import smallGridImg from "@@/public/photos/small-grid-img.svg";

export default function Instagram() {
  const smallGridImages = [
    smallGridImg,
    smallGridImg,
    smallGridImg,
    smallGridImg,
    smallGridImg,
    smallGridImg
  ];

  return (
    <div className="sm:py-4 px-10 flex flex-col gap-5 justify-center items-start md:px-[210px] py-24">
      <div className="flex gap-3">
        <Image
          src={instagramIcon}
          width={50}
          height={50}
          alt="instagram-icon"
        />

        <div className="flex flex-col gap-1">
          <p>akgumusdesign</p>
          <div className="flex gap-1">
            <Image
              src={smallInstagram}
              width={15}
              height={11}
              alt="small-instagram"
            />
            <p>1.619</p>
          </div>
        </div>
      </div>

      <div>
        <div className="sm:grid grid-cols-1 grid-rows-1 gap-1  md:grid-cols-3 py-8 lg:grid-cols-5">
          <div className="col-span-2 row-span-2 bg-gray-200">
            <Image
              src={mainGridImg}
              width={571}
              height={571}
              alt="main-grid-img"
            />
          </div>
          {smallGridImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                width={284}
                height={284}
                alt={`small-grid-img-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
