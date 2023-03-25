// Generated by Ignite ignite.com/cli

import type { StdFee } from "@cosmjs/launchpad";
import type { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { Registry } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate";
import { SigningStargateClient } from "@cosmjs/stargate";

import type { IgniteClient } from "../client";
import { msgTypes } from "./registry";
import { Api } from "./rest";
import { WeightedVoteOption as typeWeightedVoteOption } from "./types";
import { TextProposal as typeTextProposal } from "./types";
import { Deposit as typeDeposit } from "./types";
import { Proposal as typeProposal } from "./types";
import { TallyResult as typeTallyResult } from "./types";
import { Vote as typeVote } from "./types";
import { DepositParams as typeDepositParams } from "./types";
import { VotingParams as typeVotingParams } from "./types";
import { TallyParams as typeTallyParams } from "./types";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";

export { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted };

export interface sendMsgVoteWeightedParams {
  value: MsgVoteWeighted;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgSubmitProposalParams {
  value: MsgSubmitProposal;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgVoteParams {
  value: MsgVote;
  fee?: StdFee;
  memo?: string;
}

export interface sendMsgDepositParams {
  value: MsgDeposit;
  fee?: StdFee;
  memo?: string;
}

export interface msgVoteWeightedParams {
  value: MsgVoteWeighted;
}

export interface msgSubmitProposalParams {
  value: MsgSubmitProposal;
}

export interface msgVoteParams {
  value: MsgVote;
}

export interface msgDepositParams {
  value: MsgDeposit;
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
    async sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgVoteWeighted: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry /* prefix */ });
        const msg = this.msgVoteWeighted({ value: MsgVoteWeighted.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgVoteWeighted: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry /* prefix */ });
        const msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgSubmitProposal: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry /* prefix */ });
        const msg = this.msgVote({ value: MsgVote.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgVote: Could not broadcast Tx: ${e.message}`);
      }
    },

    async sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error("TxClient:sendMsgDeposit: Unable to sign Tx. Signer is not present.");
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry /* prefix */ });
        const msg = this.msgDeposit({ value: MsgDeposit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(`TxClient:sendMsgDeposit: Could not broadcast Tx: ${e.message}`);
      }
    },

    msgVoteWeighted: ({ value }: msgVoteWeightedParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted", value: MsgVoteWeighted.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgVoteWeighted: Could not create message: ${e.message}`);
      }
    },

    msgSubmitProposal: ({ value }: msgSubmitProposalParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgSubmitProposal: Could not create message: ${e.message}`);
      }
    },

    msgVote: ({ value }: msgVoteParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.gov.v1beta1.MsgVote", value: MsgVote.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgVote: Could not create message: ${e.message}`);
      }
    },

    msgDeposit: ({ value }: msgDepositParams): EncodeObject => {
      try {
        return { typeUrl: "/cosmos.gov.v1beta1.MsgDeposit", value: MsgDeposit.fromPartial(value) };
      } catch (e: any) {
        throw new Error(`TxClient:MsgDeposit: Could not create message: ${e.message}`);
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
      WeightedVoteOption: getStructure(typeWeightedVoteOption.fromPartial({})),
      TextProposal: getStructure(typeTextProposal.fromPartial({})),
      Deposit: getStructure(typeDeposit.fromPartial({})),
      Proposal: getStructure(typeProposal.fromPartial({})),
      TallyResult: getStructure(typeTallyResult.fromPartial({})),
      Vote: getStructure(typeVote.fromPartial({})),
      DepositParams: getStructure(typeDepositParams.fromPartial({})),
      VotingParams: getStructure(typeVotingParams.fromPartial({})),
      TallyParams: getStructure(typeTallyParams.fromPartial({})),
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
      CosmosGovV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default Module;