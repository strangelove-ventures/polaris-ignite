import type { GeneratedType } from "@cosmjs/proto-signing";

import type { IgniteClient } from "./client";

export type ModuleInterface = Record<string, any>;
export type Module = (instance: IgniteClient) => { module: ModuleInterface; registry: [string, GeneratedType][] };
