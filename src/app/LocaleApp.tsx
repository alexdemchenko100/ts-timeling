import { Fragment, useEffect, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import AppLoader from "./AppLoader";
import {
  clientDefaultLanguage,
  getCurrent,
  loadStrings,
  urlWithLocale,
} from "../lib/locale";

const LocaleApp = ({ children }: any) => {
  // const deviceDebug = useAppSelector(state => state.device.isDebug);

  const [strings, setStrings] = useState<object | undefined>(undefined);

  const localeIso = useMemo(() => {
    const current = getCurrent();

    console.log(current);

    if (!current) {
      window.location.href = urlWithLocale(
        window.location.href,
        clientDefaultLanguage
      );

      return null;
    }

    return current!;
  }, []);

  useEffect(() => {
    if (!localeIso) return;

    loadStrings(localeIso)
      .then(setStrings)
      .catch((err: any) => console.error("Strings error: " + err));
  }, [localeIso]);

  if (!strings || !localeIso) return <AppLoader withIntl={false}></AppLoader>;

  return (
    <IntlProvider
      locale={localeIso}
      messages={strings as any}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleApp;
