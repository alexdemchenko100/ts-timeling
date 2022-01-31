export const NAME: string = "Timeling";
export const COMPANY_ID = `13325162`;
export const COMPANY_NAME = `${NAME} Limited`;
export const COMPANY_ADDRESS = `2nd Floor College House, 17 King Edwards Road`;
export const COMPANY_POSTCODE = `London, HA4 7AE`;
export const COMPANY_COUNTRY = `United Kingdom`;
export const COMPANY_DATA_PROTECTOR = `Sean Kafashian`;

export const VAPID_PUBLIC_KEY = "";

const BASE_DOMAIN = NAME.toLowerCase() + ".com";

const getDomain = () =>
  typeof window !== "undefined" &&
  window.location.hostname.endsWith(BASE_DOMAIN)
    ? window.location.host
    : BASE_DOMAIN;

const BACKEND_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:5000" //https://localhost:44355
    : `https://${getDomain()}`;

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `https://${getDomain()}` //https://localhost:44355
    : `https://${getDomain()}`;

export const BASE_URL_API = BACKEND_BASE_URL + "/api"; //BASE_URL + "/api";
export const BASE_URL_OIDC = BACKEND_BASE_URL;

export const withBaseURLApi = (url?: string) => BASE_URL_API + (url || "");
export const withBaseURL = (url?: string) => BASE_URL + (url || "");

export const isCrossDomain = () => BASE_URL !== BACKEND_BASE_URL;
