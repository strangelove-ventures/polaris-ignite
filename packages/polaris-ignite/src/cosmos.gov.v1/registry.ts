import type { GeneratedType } from "@cosmjs/proto-signing";

import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { MsgUpdateParams } from "./types/cosmos/gov/v1/tx";

const msgTypes: [string, GeneratedType][] = [
  ["/cosmos.gov.v1.MsgVote", MsgVote],
  ["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgVoteWeighted", MsgVoteWeighted],
  ["/cosmos.gov.v1.MsgDeposit", MsgDeposit],
  ["/cosmos.gov.v1.MsgUpdateParams", MsgUpdateParams],
];

export { msgTypes };
