export type Consent = {
  ads: boolean;
  expires: Date;
};

export const names = {
  // required: ["idsrv.session"],
  ads: [
    "_gcl_au",
    " _fbp",
    "_ga_VD1GBHLVR8",
    " _ga",
    " _gid",
    " _gat_gtag_UA_209671318_1",
  ],
};

const storageName = "consent";

export const getDefaultConsent = (): Consent => {
  const date = new Date();
  date.setDate(date.getDate() + 90);
  return {
    ads: false,
    expires: date,
  };
};
export const getAllConsent = (): Consent => {
  const date = new Date();
  date.setDate(date.getDate() + 90);
  return {
    ads: true,
    expires: date,
  };
};

export const getStoredConsent = () => {
  try {
    const string = localStorage.getItem(storageName);
    if (string) {
      const parsed = JSON.parse(string) as Consent;
      if (new Date(parsed.expires) < new Date()) {
        return undefined;
      }
      return parsed;
    }
  } catch (e) {
    //format error;
    return undefined;
  }
  return undefined;
};

export const getConsent = () => {
  const defaultState = getDefaultConsent();
  const currentConsent = getStoredConsent();

  if (!currentConsent) return defaultState;

  return {
    ...defaultState,
    ...currentConsent,
    expires: new Date(currentConsent.expires),
  };
};

export const setConsent = (consent: Consent) => {
  localStorage.setItem(storageName, JSON.stringify(consent));
  if (consent.ads) {
    if (typeof window !== "undefined") (window as any).fbq("consent", "grant");
  }
};
export const hasConsent = (type?: "ads") => {
  if (!type) return !!getStoredConsent();

  const consent = getConsent();
  if (type === "ads") return consent.ads;
  return true;
};
