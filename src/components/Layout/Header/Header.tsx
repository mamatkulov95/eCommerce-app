import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-headerbg text-sm text-white px-14 py-2.5 flex justify-between items-center">
      <div className="font-semibold ">{t("free.shipping")}</div>
      <div className="border-x-white">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
