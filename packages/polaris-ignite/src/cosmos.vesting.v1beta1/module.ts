// Generated by Ignite ignite.com/cli

import type { StdFee } from "@cosmjs/launchpad";
import type { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { Registry } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate";
import { SigningStargateClient } from "@cosmjs/stargate";

import type { IgniteClient } from "../client";
import { msgTypes } from "./registry";
import { Api } from "./rest";
import { BaseVestingAccount as typeBaseVestingAccount } from "./types";
import { ContinuousVestingAccount as typeContinuousVestingAccount } from "./types";
import { DelayedVestingAccount as typeDelayedVestingAccount } from "./types";
import { Period as typePeriod } from "./types";
import { PeriodicVestingAccount as typePeriodicVestingAccount } from "./types";
import { PermanentLockedAccount as typePermanentLockedAccount } from "./types";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";

export { MsgCreatePeriodicVestingAccount, MsgCreatePermanentLockedAccount, MsgCreateVestingAccount };

export interface sendMsgCreateVestingAccountParams {
  value: MsgCreateVestingAccount;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgCreatePermanentLockedAccountParams {
  value: MsgCreatePermanentLockedAccount;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgCreatePeriodicVestingAccountParams {
  value: MsgCreatePeriodicVestingAccount;
  fee?: StdFee;
  memo?: string;
}

export interface msgCreateVestingAccountParams {
  value: MsgCreateVestingAccount;
}

export interface msgCreatePermanentLockedAccountParams {
  value: MsgCreatePermanentLockedAccount;
}

export interface msgCreatePeriodicVestingAccountParams {
  value: MsgCreatePeriodicVestingAccount;
}

export const registry = new Registry(msgTypes);

export interface Field {
  name: string;
  type: unknown;
}

const getStructure = (template) => {
  const structure: { fields: Field[] } = { fields: [] };
  for (const [key, value] of Object.entries(template)) {
    const field = { name: key, type: typeof value };
    structure.fields.push(field);
  }
  return structure;
};
const defaultFee = {
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
    async sendMsgCreateVestingAccount({
      value,
      fee,
      memo,
    }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgCreateVestingAccount: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgCreateVestingAccount({ value: MsgCreateVestingAccount.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgCreateVestingAccount: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgCreatePermanentLockedAccount({
      value,
      fee,
      memo,
    }: sendMsgCreatePermanentLockedAccountParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgCreatePermanentLockedAccount: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgCreatePermanentLockedAccount({ value: MsgCreatePermanentLockedAccount.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgCreatePermanentLockedAccount: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgCreatePeriodicVestingAccount({
      value,
      fee,
      memo,
    }: sendMsgCreatePeriodicVestingAccountParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgCreatePeriodicVestingAccount: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, {
          registry,
        });
        const msg = this.msgCreatePeriodicVestingAccount({ value: MsgCreatePeriodicVestingAccount.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgCreatePeriodicVestingAccount: Could not broadcast Tx: ${e.message}`);
      }
    },

    msgCreateVestingAccount: ({ value }: msgCreateVestingAccountParams): EncodeObject => {
      try {
        return {
          typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
          value: MsgCreateVestingAccount.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error(`TxClient:MsgCreateVestingAccount: Could not create message: ${e.message}`);
      }
    },

    msgCreatePermanentLockedAccount: ({ value }: msgCreatePermanentLockedAccountParams): EncodeObject => {
      try {
        return {
          typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
          value: MsgCreatePermanentLockedAccount.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error(`TxClient:MsgCreatePermanentLockedAccount: Could not create message: ${e.message}`);
      }
    },

    msgCreatePeriodicVestingAccount: ({ value }: msgCreatePeriodicVestingAccountParams): EncodeObject => {
      try {
        return {
          typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
          value: MsgCreatePeriodicVestingAccount.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error(`TxClient:MsgCreatePeriodicVestingAccount: Could not create message: ${e.message}`);
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
      BaseVestingAccount: getStructure(typeBaseVestingAccount.fromPartial({})),
      ContinuousVestingAccount: getStructure(typeContinuousVestingAccount.fromPartial({})),
      DelayedVestingAccount: getStructure(typeDelayedVestingAccount.fromPartial({})),
      Period: getStructure(typePeriod.fromPartial({})),
      PeriodicVestingAccount: getStructure(typePeriodicVestingAccount.fromPartial({})),
      PermanentLockedAccount: getStructure(typePermanentLockedAccount.fromPartial({})),
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

const Module = (test: IgniteClient) => {
  return {
    module: {
      CosmosVestingV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default Module;
