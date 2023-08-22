import Image from "next/image";

import data from "../../../public/data/data.json";
import rightArrow from "../../../public/photos/RightArrow.svg";
import leftArrow from "../../../public/photos/LeftArrow.svg";
import stars from "../../../public/photos/stars.svg";

export default function Feedback() {
  const { feedbacks } = data;

  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <h1>MÜŞTERİ YORUMLARI</h1>

      <div className="flex gap-10">
        {feedbacks.map(
          ({ img, alt, userName, company, feedbackContent }, index) => (
            <div className="px-8 py-6  rounded-2xl shadow-custom" key={index}>
              <div className=" flex flex-col gap-8">
                <div className="flex gap-4">
                  <Image src={img} width={56} height={56} alt={alt} />

                  <p className="font-light">
                    <span className="font-semibold"> {userName} </span> <br />
                    {company}
                  </p>
                </div>

                <Image src={stars} width={150} height={24} alt="stars" />

                <p className="max-w-[250px] font-light">{feedbackContent}</p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex gap-5">
        <Image src={leftArrow} width={29} height={20} alt="left-arrow" />
        <Image src={rightArrow} width={29} height={20} alt="right-arrow" />
      </div>
    </div>
  );
}
