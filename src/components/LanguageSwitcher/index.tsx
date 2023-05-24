import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";
import { i18n as i18next } from "next-i18next.config";
import i18n from "i18n";
import styles from "./languageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale);
  const languages = i18next.locales;

  const handleChangeLanguage = (lang: string) => {
    i18n.reloadResources(lang);
    i18n.changeLanguage(lang);
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang, scroll: false });
    setLanguage(lang);
  };

  return (
    <div className={styles.languageSwitcherRoot}>
      {languages.map((lang: string) => {
        const isLanguageActive = language === lang;
        const buttonClassNames = classNames(styles.languageSwitcherButton, {
          [styles.active]: isLanguageActive,
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