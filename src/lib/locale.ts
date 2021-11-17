export type ImportObject = {
  [key: string]: any | undefined;
};

const stringImports: ImportObject = {
  "en-GB": () => import("../string/en-gb"),
  "nb-NO": () => import("../string/nb-no"),
  // "en-US": () => import("../string/en-us"),
  // "sv-SE": () => import("../string/sv-se"),
};
export const defaultLanguage = Object.keys(stringImports)[0];

export const languages = Object.keys(stringImports);

//Converts EN-> en, en-us -> en-US, EN-us -> en-US
const getCased = (locale: string) => {
  if (!locale.includes("-")) return locale.toLowerCase();
  const parts = locale.split("-");
  return parts[0].toLowerCase() + "-" + parts[1].toUpperCase();
};

//Gets the current language based on url params etc.
export const getCurrent = () => {
  const currentInPath = window.location.pathname.split("/")[1];

  //Invalid format
  if (currentInPath.match(/[a-z]{2}-[a-z]{2}/) === null) return undefined;

  const current = getCased(currentInPath);

  //Unsupported locale
  if (!languages.includes(current)) return undefined;

  return current;
};

//Get url with locale
export const urlWithLocale = (uri: string, locale?: string) => {
  if (!locale) return uri;
  //Relative url
  if (uri.startsWith("/") || uri === "") {
    let newUrl = uri;

    //Remove any current lang
    languages.forEach((x) => {
      newUrl = newUrl.replace(`/${x.toLowerCase()}`, "");
    });

    //Add new lang
    return `/${locale.toLowerCase()}${newUrl}`;
  }

  const url = new URL(uri);
  let newUrl = url.toString();

  //Remove any current lang
  languages.forEach((x) => {
    newUrl = newUrl.replace(`${url.host}/${x.toLowerCase()}`, url.host);
  });

  //Add new lang
  newUrl = newUrl.replace(`${url.host}`, `${url.host}/${locale.toLowerCase()}`);

  return newUrl;
};

export const urlWithoutLocale = (uri: string, locale?: string) =>
  !locale ? uri : uri.replace("/" + locale.toLowerCase(), "");

const getClientDefault = (): string => {
  const clientLanguages = window.navigator.languages || [];
  const clientLanguagesSupported = clientLanguages
    .map((x) => {
      const exact = languages.find((l) => l === getCased(x));
      if (!!exact) return exact;

      const starts = languages.find((l) => l.startsWith(getCased(x)));
      if (starts) return starts;

      return "";
    })
    .filter((x) => !!x);

  // console.log(clientLanguages, clientLanguagesSupported);

  if (!!clientLanguagesSupported.length) return clientLanguagesSupported[0];

  return defaultLanguage;

  // const exact = window.navigator.languages.find(
  //   (x) => !!x && languages.includes(getCased(x))
  // );
  // if (!!exact) return exact;

  // const starts = window.navigator.languages.find((x) =>
  //   languages.find((x) => !!x && x.startsWith(x.toLowerCase()))
  // );
  // if (starts) {
  //   return languages.find((x) => x.startsWith(starts.toLowerCase()))!;
  // }

  // return defaultLanguage;
};

export const clientDefaultLanguage = getClientDefault();

export const loadStrings = (locale: string) => {
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

  if (!strings) strings = stringImports[defaultLanguage];

  return strings().then((m: any) => m.default);
};
