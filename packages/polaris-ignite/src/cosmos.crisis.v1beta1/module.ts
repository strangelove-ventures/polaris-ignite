// Generated by Ignite ignite.com/cli

import type { StdFee } from "@cosmjs/launchpad";
import type { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { Registry } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate";
import { SigningStargateClient } from "@cosmjs/stargate";

import type { IgniteClient } from "../client";
import { msgTypes } from "./registry";
import { Api } from "./rest";
import { MsgVerifyInvariant } from "./types/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/crisis/v1beta1/tx";

export { MsgUpdateParams, MsgVerifyInvariant };

export interface sendMsgVerifyInvariantParams {
  value: MsgVerifyInvariant;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgUpdateParamsParams {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
}

export interface msgVerifyInvariantParams {
  value: MsgVerifyInvariant;
}

export interface msgUpdateParamsParams {
  value: MsgUpdateParams;
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
    async sendMsgVerifyInvariant({ value, fee, memo }: sendMsgVerifyInvariantParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgVerifyInvariant: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgVerifyInvariant({ value: MsgVerifyInvariant.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgVerifyInvariant: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgUpdateParams: Could not broadcast Tx: ${e.message}`);
      }
    },

    msgVerifyInvariant: ({ value }: msgVerifyInvariantParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant", value: MsgVerifyInvariant.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgVerifyInvariant: Could not create message: ${e.message}`);
      }
    },

    msgUpdateParams: ({ value }: msgUpdateParamsParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgUpdateParams: Could not create message: ${e.message}`);
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
      CosmosCrisisV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};

export default Module;
