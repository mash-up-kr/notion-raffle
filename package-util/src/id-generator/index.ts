import { v1 as uuid } from "uuid";

export const idGenerator = (service: string = "") => {
  const param = `${service}${uuid()}`;
  return param;
};
