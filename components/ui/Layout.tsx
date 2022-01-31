import { useRouter } from "next/router";
import { FC, Fragment, useLayoutEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import Consent from "../consent/Consent";
import Footer from "./Footer";

export type ImportObject = {
  [key: string]: any | undefined;
};

const stringImports: ImportObject = {
  en: () => import("../../strings/en"),
  nb: () => import("../../strings/nb"),
  // "en-US": () => import("../string/en-us"),
  // "sv-SE": () => import("../string/sv-se"),
};

const loadStrings = (locale: string) => {
  let strings = null;
  if (!strings) strings = stringImports[locale];

  if (!strings) {
    const language = locale.split("-")[0];
    for (let key in stringImports) {
      let x = stringImports[key];

      if (!x || !stringImports.hasOwnProperty(key)) continue;

      if (!!key && key.startsWith(language)) strings = x;
    }
  }

  if (!strings) strings = stringImports["en"];

  return strings().then((m: any) => m.default);
};

const Layout: FC = ({ children }) => {
  const { locale, defaultLocale } = useRouter();

  const [strings, setStrings] = useState<object | undefined>(undefined);

  useLayoutEffect(() => {
    if (!locale) return;

    loadStrings(locale)
      .then(setStrings)
      .catch((err: any) => console.error("Strings error: " + err));
  }, [locale]);

  if (!locale || !strings) return null;

  return (
    <IntlProvider
      locale={locale}
      messages={strings as any}
      textComponent={Fragment}
      defaultLocale={defaultLocale}
    >
      <Consent />
      {children}
      <Footer />
    </IntlProvider>
  );
};

export default Layout;
