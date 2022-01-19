import { withBaseURLApi, withBaseURL } from "./config";
import {
  clientDefaultLanguage,
  getCurrent as getCurrentLanguage,
} from "./locale";
import { parseJSONValues } from "./parseJSON";

interface ExtendedRequestInit extends RequestInit {
  parse?: boolean;
  auth?: boolean;
}

const transformResponse = async (
  response: Response,
  parse: boolean = true
): Promise<any> => {
  let contentType = response.headers.get("content-type");

  if (parse !== false) {
    let responseContent = undefined;
    if (contentType && contentType.includes("application/json")) {
      responseContent = response.json().then((r) => parseJSONValues(r));
    } else {
      responseContent = response.text();
    }

    if (!response.ok) {
      const content = await responseContent;

      const errorResponse: any = { content };
      for (let i in response) {
        errorResponse[i] = (response as any)[i];
      }

      return Promise.reject(errorResponse);
    }

    return responseContent;
  } else {
    return response;
  }
};

const fetchTransform = async (
  url: string,
  method: any = "get",
  options: ExtendedRequestInit = {}
): Promise<any> => {
  const r = await fetch(url, {
    ...options,
    method,
  });

  return await transformResponse(r, options.parse);
};

const fetchAuth = async (
  url: string,
  method: string = "get",
  options: ExtendedRequestInit = {}
): Promise<any> => {
  let token: string | undefined = undefined;
  // if (options.auth !== false) token = await authService.getAccessToken();

  const r = await fetchTransform(url, method, {
    ...options,
    headers: {
      Authorization: !!token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });
  return r;
};

export const basicFetch = async (
  url: string,
  method: string = "get",
  options: ExtendedRequestInit = {}
) => fetchAuth(withBaseURL(url), method, options);

export const basicFetchApi = async (
  url: string,
  method: string = "get",
  options: ExtendedRequestInit = {}
) => {
  const language = getCurrentLanguage() || clientDefaultLanguage;
  if (language) {
    const languageShort = language.split("-")[0];
    options = {
      ...options,
      headers: {
        "Accept-Language": `${language}, ${languageShort}; q=0.8`,
        ...options.headers,
      },
    };
  }
  return fetchAuth(withBaseURLApi(url), method, options);
};

const postFormNoBody = async <T>(
  url: string,
  method: "post" | "get" | "put" | "delete",
  data: any = {},
  options: ExtendedRequestInit = {}
) => {
  let processedData = data;

  let headers: any = {
    ...options.headers,
  };

  let hasFile = false;
  if (!!data && data instanceof Object && !Array.isArray(data)) {
    Object.values(data).forEach((entry) => {
      if (entry instanceof File || entry instanceof Blob) hasFile = true;
    });
  }

  if (!hasFile) {
    if (data instanceof FormData) {
      processedData = {};
      (data as FormData).forEach(
        (entry, key, parent) => (processedData[key] = entry)
      );
    }
    processedData = JSON.stringify(processedData);
    headers["content-type"] = "application/json";
  } else {
    processedData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      processedData.append(key, value);
    });
  }

  return basicFetchApi(url, method, {
    ...options,
    headers: headers,
    body: processedData,
  }).then((r) => r as T);
};

export const get = async <T>(
  url: string,
  data: any = {},
  options: ExtendedRequestInit = {}
) => {
  let fullUrl = url;
  if (!!data) {
    const qdata = { ...data };
    for (let [key, value] of Object.entries(qdata)) {
      if (value instanceof Date) qdata[key] = value.toISOString();
      if (value === undefined) delete qdata[key];
    }
    const qstring = new URLSearchParams(qdata).toString();
    if (!!qstring) fullUrl = fullUrl + "?" + qstring;
  }

  return basicFetchApi(fullUrl, "get", { ...options }).then((r) => r as T);
};

export const remove = async <T>(
  url: string,
  formData = {},
  options: ExtendedRequestInit = {}
) => postFormNoBody<T>(url, "delete", formData, options);

export const post = async <T>(
  url: string,
  formData: any,
  options: ExtendedRequestInit = {}
) => postFormNoBody<T>(url, "post", formData, options);

export const put = async <T>(
  url: string,
  formData: any,
  options: ExtendedRequestInit = {}
) => postFormNoBody<T>(url, "put", formData, options);
