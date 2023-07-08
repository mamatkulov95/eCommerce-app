import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import i18next from "i18next";

import classNames from "classnames";
import styles from "./languageSwitcher.module.scss";

const updatePathLang = (router: NextRouter, lang: string) => {
  const { pathname, asPath, query } = router;
  router.push({ pathname, query }, asPath, { locale: lang, scroll: false });
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale);
  const languages = ["en", "tr"];

  const handleChangeLanguage = (lang: string) => {
    if (i18next) i18next.changeLanguage(lang);
    updatePathLang(router, lang);
    setLanguage(lang);
  };

  return (
    <div className={styles.languageSwitcherRoot}>
      {languages?.map((lang: string) => {
        const buttonClassNames = classNames(styles.languageSwitcherButton, {
          [styles.active]: lang === language,
        });

        return (
          <button
            key={lang}
            className={buttonClassNames}
            onClick={() => handleChangeLanguage(lang)}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
