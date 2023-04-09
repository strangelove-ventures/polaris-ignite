import type { GeneratedType } from "@cosmjs/proto-signing";

import { MsgCancelUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { MsgSoftwareUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";

const msgTypes: [string, GeneratedType][] = [
  ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", MsgCancelUpgrade],
  ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade],
];

export { msgTypes };
