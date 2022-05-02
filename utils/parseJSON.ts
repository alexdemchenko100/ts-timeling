const isDateIsoString = (value: string) =>
  typeof value === "string" &&
  value.match(
    /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/gi
  ) !== null;

export const parseJSONValues = (response: any): any => {
  if (!response) return response;
  if (response.constructor === Array) {
    return response.map((r: any) => parseJSONValues(r));
  }
  if (response.constructor === Object) {
    for (let [key, value] of Object.entries(response)) {
      if (value === null) response[key] = undefined;
      if (!value) continue;

      if (
        (value as any).constructor === Array ||
        (value as any).constructor === Object
      ) {
        response[key] = parseJSONValues(value);
      } else {
        if (isDateIsoString(value as any)) {
          response[key] = new Date(value as any);
        }
      }
    }
  }
  if (isDateIsoString(response as any)) {
    response = new Date(response as any);
  }
  return response;
};
