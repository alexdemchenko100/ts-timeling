import { Fragment, useEffect, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import { clientDefaultLanguage, getCurrent, loadStrings } from "../lib/locale";

const LocaleApp = ({ children }: any) => {
  // const deviceDebug = useAppSelector(state => state.device.isDebug);

  const [strings, setStrings] = useState<object | undefined>(undefined);

  const localeIso = useMemo(() => {
    const value = getCurrent() || clientDefaultLanguage;

    document.documentElement.lang = value;

    return value;
  }, []);

  useEffect(() => {
    if (!localeIso) return;

    loadStrings(localeIso)
      .then(setStrings)
      .catch((err: any) => console.error("Strings error: " + err));
  }, [localeIso]);

  if (!strings || !localeIso) return null; // return <AppLoader withIntl={false}></AppLoader>;

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
