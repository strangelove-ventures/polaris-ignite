import type { GeneratedType } from "@cosmjs/proto-signing";

import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";

const msgTypes: [string, GeneratedType][] = [
  ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
  ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
];

export { msgTypes };
