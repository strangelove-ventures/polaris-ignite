// Generated by Ignite ignite.com/cli

import type { StdFee } from "@cosmjs/launchpad";
import type { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { Registry } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate";
import { SigningStargateClient } from "@cosmjs/stargate";

import type { IgniteClient } from "../client";
import { msgTypes } from "./registry";
import { Api } from "./rest";
import { BasicAllowance as typeBasicAllowance } from "./types";
import { PeriodicAllowance as typePeriodicAllowance } from "./types";
import { AllowedMsgAllowance as typeAllowedMsgAllowance } from "./types";
import { Grant as typeGrant } from "./types";
import { MsgRevokeAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgGrantAllowance } from "./types/cosmos/feegrant/v1beta1/tx";

export { MsgGrantAllowance, MsgRevokeAllowance };

export interface sendMsgRevokeAllowanceParams {
  value: MsgRevokeAllowance;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgGrantAllowanceParams {
  value: MsgGrantAllowance;
  fee?: StdFee;
  memo?: string;
}

export interface msgRevokeAllowanceParams {
  value: MsgRevokeAllowance;
}

export interface msgGrantAllowanceParams {
  value: MsgGrantAllowance;
}

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
  return {
    async sendMsgRevokeAllowance({ value, fee, memo }: sendMsgRevokeAllowanceParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgRevokeAllowance: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgRevokeAllowance({ value: MsgRevokeAllowance.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgRevokeAllowance: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgGrantAllowance({ value, fee, memo }: sendMsgGrantAllowanceParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgGrantAllowance: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgGrantAllowance({ value: MsgGrantAllowance.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgGrantAllowance: Could not broadcast Tx: ${e.message}`);
      }
    },

    msgRevokeAllowance: ({ value }: msgRevokeAllowanceParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance", value: MsgRevokeAllowance.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgRevokeAllowance: Could not create message: ${e.message}`);
      }
    },

    msgGrantAllowance: ({ value }: msgGrantAllowanceParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance", value: MsgGrantAllowance.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgGrantAllowance: Could not create message: ${e.message}`);
      }
    },
  };
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
    this.structure = {
      BasicAllowance: getStructure(typeBasicAllowance.fromPartial({})),
      PeriodicAllowance: getStructure(typePeriodicAllowance.fromPartial({})),
      AllowedMsgAllowance: getStructure(typeAllowedMsgAllowance.fromPartial({})),
      Grant: getStructure(typeGrant.fromPartial({})),
    };
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
      CosmosFeegrantV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};

export default Module;
