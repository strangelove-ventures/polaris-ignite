import type { StdFee } from "@cosmjs/launchpad";
import type { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { EventEmitter } from "events";

import type { Env } from "./env";
import type { Constructor, Return, UnionToIntersection } from "./helpers";
import type { Module } from "./modules";

const defaultFee = {
  amount: [],
  gas: "200000",
};

export class IgniteClient extends EventEmitter {
  static plugins: Module[] = [];
  env: Env;
  signer?: OfflineSigner;
  registry: [string, GeneratedType][] = [];
  static plugin<T extends Module | Module[]>(plugin: T) {
    const currentPlugins = this.plugins;

    class AugmentedClient extends this {
      static plugins = currentPlugins.concat(plugin);
    }

    if (Array.isArray(plugin)) {
      type Extension = UnionToIntersection<Return<T>["module"]>;
      return AugmentedClient as typeof IgniteClient & Constructor<Extension>;
    }

    type Extension = Return<T>["module"];
    return AugmentedClient as typeof IgniteClient & Constructor<Extension>;
  }

  async signAndBroadcast(msgs: EncodeObject[], fee: StdFee, memo: string) {
    if (this.signer) {
      const { address } = (await this.signer.getAccounts())[0];
      const signingClient = await SigningStargateClient.connectWithSigner(this.env.rpcURL, this.signer, {
        registry: new Registry(this.registry),
      });
      return signingClient.signAndBroadcast(address, msgs, fee ? fee : defaultFee, memo);
    }
    throw new Error(" Signer is not present.");
  }

  constructor(env: Env, signer?: OfflineSigner) {
    super();
    this.env = env;
    this.setMaxListeners(0);
    this.signer = signer;
    const classConstructor = this.constructor as typeof IgniteClient;
    classConstructor.plugins.forEach((plugin) => {
      const pluginInstance = plugin(this);
      Object.assign(this, pluginInstance.module);
      if (this.registry) {
        this.registry = this.registry.concat(pluginInstance.registry);
      }
    });
  }
  useSigner(signer: OfflineSigner) {
    this.signer = signer;
    this.emit("signer-changed", this.signer);
  }
  removeSigner() {
    this.signer = undefined;
    this.emit("signer-changed", this.signer);
  }
}
