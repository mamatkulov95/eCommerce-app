import Image from "next/image";

import companyLogo from "@@/public/photos/company-icon.svg";
import instagramIcon from "@@/public/photos/instagram-icon-circle.svg";
import fcIcon from "@@/public/photos/fc-icon.svg";

export default function Footer() {
  const footerData = [
    {
      title: "Hakkımızda",
      submenu1: "Satış Noktaları",
      submenu2: "Basın",
      submenu3: "İletişim",
      submenu4: "Ürün Bakımı"
    },
    {
      title: "KVKK",
      submenu1: "İade & İptal",
      submenu2: "Çerez Politikası",
      submenu3: "Mesafeli Satış Sözleşmesi",
      submenu4: ""
    }
  ];
  return (
    <div className="sm:grid grid-cols-1  w-screen m-auto text-white bg-headerbg  gap-5 px-[210px] py-24  md:grid-cols-2  lg:grid-cols-3 ">
      <div className="flex flex-col gap-5  text-xs">
        <Image src={companyLogo} width={85} height={85} alt="comp-logo" />

        <p>El Yapımı Deri Ürünler</p>

        <p>
          El Çantalarımızın yapımında gösterdiğimiz sabır ve sevginin size de
          ulaşacağı ve her kullanımda daha da büyüyeceği motivasyonuyla
          tasarlamaya ve üretmeye devam ediyoruz.
        </p>

        <p>akgumusdesign@gmail.com</p>

        <div className="flex gap-3">
          <Image
            src={instagramIcon}
            width={30}
            height={30}
            alt="instagram-icon"
          />
          <Image src={fcIcon} width={30} height={30} alt="fc-icon" />
        </div>
      </div>

      <div className="flex gap-14">
        {footerData.map(
          ({ title, submenu1, submenu2, submenu3, submenu4 }, index) => (
            <div key={index}>
              <p>{title}</p>
              <p>{submenu1}</p>
              <p>{submenu2}</p>
              <p>{submenu3}</p>
              <p>{submenu4}</p>
            </div>
          )
        )}
      </div>

      <div>
        <p>E-Bülten</p>
        <div className="flex justify-between pb-24">
          <p>E posta adresiniz</p>
          <p>Kayıt Ol</p>
        </div>
        <p className="text-right">designed by Archi’s Academy</p>
      </div>
    </div>
  );
}
