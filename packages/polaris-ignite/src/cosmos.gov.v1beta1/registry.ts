import type { GeneratedType } from "@cosmjs/proto-signing";

import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";

const msgTypes: [string, GeneratedType][] = [
  ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted],
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
  ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
];

export { msgTypes };