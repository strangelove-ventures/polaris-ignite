// Generated by Ignite ignite.com/cli

import type { GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { Registry } from "@cosmjs/proto-signing";

import type { IgniteClient } from "../client";
import { msgTypes } from "./registry";
import { Api } from "./rest";

export {};

export const registry = new Registry(msgTypes);

export interface Field {
  name: string;
  type: unknown;
}

export const getStructure = (template) => {
  const structure: { fields: Field[] } = { fields: [] };
  for (const [key, value] of Object.entries(template)) {
    const field = { name: key, type: typeof value };
    structure.fields.push(field);
  }
  return structure;
};

export const defaultFee = {
  amount: [],
  gas: "200000",
};

export interface TxClientOptions {
  addr: string;
  prefix: string;
  signer?: OfflineSigner;
}

export const txClient = (
  { signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" },
) => {
  return {};
};

export interface QueryClientOptions {
  addr: string;
}

export const queryClient = ({ addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

export class SDKModule {
  public query: ReturnType<typeof queryClient>;
  public tx: ReturnType<typeof txClient>;
  public structure: Record<string, unknown>;
  public registry: [string, GeneratedType][] = [];

  constructor(client: IgniteClient) {
    this.query = queryClient({ addr: client.env.apiURL });
    this.updateTX(client);
    this.structure = {};
    client.on("signer-changed", (signer) => {
      this.updateTX(client);
    });
  }
  updateTX(client: IgniteClient) {
    const methods = txClient({
      signer: client.signer,
      addr: client.env.rpcURL,
      prefix: client.env.prefix ?? "cosmos",
    });

    this.tx = methods;
    for (const m in methods) {
      this.tx[m] = methods[m].bind(this.tx);
    }
  }
}

export const Module = (test: IgniteClient) => {
  return {
    module: {
      CosmosBaseNodeV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};

export default Module;
