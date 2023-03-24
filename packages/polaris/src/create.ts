import type { RequestOpts } from "oazapfts/lib/runtime";

import * as client from "./client";

export const createClient = (opts: RequestOpts = {}) => {
  for (const key in opts) {
    // @ts-expect-error force assign keys from opts
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    client.defaults[key] = opts[key];
  }
  return client;
};
