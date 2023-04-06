/**
 * Cosmos SDK - gRPC Gateway docs
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";

export const defaults: Oazapfts.RequestOpts = {
  baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export interface MultiIsTheModeInfoForAMultisigPublicKey {
  bitarray?: {
    extra_bits_stored?: number;
    elems?: string;
  };
  mode_infos?: CosmosTxV1Beta1ModeInfo[];
}
export interface CosmosTxV1Beta1ModeInfo {
  single?: {
    mode?:
      | "SIGN_MODE_UNSPECIFIED"
      | "SIGN_MODE_DIRECT"
      | "SIGN_MODE_TEXTUAL"
      | "SIGN_MODE_DIRECT_AUX"
      | "SIGN_MODE_LEGACY_AMINO_JSON"
      | "SIGN_MODE_EIP_191";
  };
  multi?: MultiIsTheModeInfoForAMultisigPublicKey;
}
export interface CosmosTxV1Beta1SignerInfo {
  public_key?: {
    type_url?: string;
    value?: string;
  };
  mode_info?: CosmosTxV1Beta1ModeInfo;
  sequence?: string;
}
export interface CosmosTxV1Beta1AuthInfo {
  signer_infos?: CosmosTxV1Beta1SignerInfo[];
  fee?: {
    amount?: {
      denom?: string;
      amount?: string;
    }[];
    gas_limit?: string;
    payer?: string;
    granter?: string;
  };
  tip?: {
    amount?: {
      denom?: string;
      amount?: string;
    }[];
    tipper?: string;
  };
}
export interface CosmosTxV1Beta1Tx {
  body?: {
    messages?: {
      type_url?: string;
      value?: string;
    }[];
    memo?: string;
    timeout_height?: string;
    extension_options?: {
      type_url?: string;
      value?: string;
    }[];
    non_critical_extension_options?: {
      type_url?: string;
      value?: string;
    }[];
  };
  auth_info?: CosmosTxV1Beta1AuthInfo;
  signatures?: string[];
}
export interface CosmosTxV1Beta1TxDecodeResponse {
  tx?: CosmosTxV1Beta1Tx;
}
export interface CosmosTxV1Beta1TxEncodeRequest {
  tx?: CosmosTxV1Beta1Tx;
}
export interface CosmosTxV1Beta1SimulateRequest {
  tx?: CosmosTxV1Beta1Tx;
  tx_bytes?: string;
}
export interface CosmosTxV1Beta1GetTxsEventResponse {
  txs?: CosmosTxV1Beta1Tx[];
  tx_responses?: {
    height?: string;
    txhash?: string;
    codespace?: string;
    code?: number;
    data?: string;
    raw_log?: string;
    logs?: {
      msg_index?: number;
      log?: string;
      events?: {
        type?: string;
        attributes?: {
          key?: string;
          value?: string;
        }[];
      }[];
    }[];
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    tx?: {
      type_url?: string;
      value?: string;
    };
    timestamp?: string;
    events?: {
      type?: string;
      attributes?: {
        key?: string;
        value?: string;
        index?: boolean;
      }[];
    }[];
  }[];
  pagination?: {
    next_key?: string;
    total?: string;
  };
  total?: string;
}
export interface CosmosTxV1Beta1GetBlockWithTxsResponse {
  txs?: CosmosTxV1Beta1Tx[];
  block_id?: {
    hash?: string;
    part_set_header?: {
      total?: number;
      hash?: string;
    };
  };
  block?: {
    header?: {
      version?: {
        block?: string;
        app?: string;
      };
      chain_id?: string;
      height?: string;
      time?: string;
      last_block_id?: {
        hash?: string;
        part_set_header?: {
          total?: number;
          hash?: string;
        };
      };
      last_commit_hash?: string;
      data_hash?: string;
      validators_hash?: string;
      next_validators_hash?: string;
      consensus_hash?: string;
      app_hash?: string;
      last_results_hash?: string;
      evidence_hash?: string;
      proposer_address?: string;
    };
    data?: {
      txs?: string[];
    };
    evidence?: {
      evidence?: {
        duplicate_vote_evidence?: {
          vote_a?: {
            type?:
              | "SIGNED_MSG_TYPE_UNKNOWN"
              | "SIGNED_MSG_TYPE_PREVOTE"
              | "SIGNED_MSG_TYPE_PRECOMMIT"
              | "SIGNED_MSG_TYPE_PROPOSAL";
            height?: string;
            round?: number;
            block_id?: {
              hash?: string;
              part_set_header?: {
                total?: number;
                hash?: string;
              };
            };
            timestamp?: string;
            validator_address?: string;
            validator_index?: number;
            signature?: string;
          };
          vote_b?: {
            type?:
              | "SIGNED_MSG_TYPE_UNKNOWN"
              | "SIGNED_MSG_TYPE_PREVOTE"
              | "SIGNED_MSG_TYPE_PRECOMMIT"
              | "SIGNED_MSG_TYPE_PROPOSAL";
            height?: string;
            round?: number;
            block_id?: {
              hash?: string;
              part_set_header?: {
                total?: number;
                hash?: string;
              };
            };
            timestamp?: string;
            validator_address?: string;
            validator_index?: number;
            signature?: string;
          };
          total_voting_power?: string;
          validator_power?: string;
          timestamp?: string;
        };
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              header?: {
                version?: {
                  block?: string;
                  app?: string;
                };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              commit?: {
                height?: string;
                round?: number;
                block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                address?: string;
                pub_key?: {
                  ed25519?: string;
                  secp256k1?: string;
                };
                voting_power?: string;
                proposer_priority?: string;
              }[];
              proposer?: {
                address?: string;
                pub_key?: {
                  ed25519?: string;
                  secp256k1?: string;
                };
                voting_power?: string;
                proposer_priority?: string;
              };
              total_voting_power?: string;
            };
          };
          common_height?: string;
          byzantine_validators?: {
            address?: string;
            pub_key?: {
              ed25519?: string;
              secp256k1?: string;
            };
            voting_power?: string;
            proposer_priority?: string;
          }[];
          total_voting_power?: string;
          timestamp?: string;
        };
      }[];
    };
    last_commit?: {
      height?: string;
      round?: number;
      block_id?: {
        hash?: string;
        part_set_header?: {
          total?: number;
          hash?: string;
        };
      };
      signatures?: {
        block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
        validator_address?: string;
        timestamp?: string;
        signature?: string;
      }[];
    };
  };
  pagination?: {
    next_key?: string;
    total?: string;
  };
}
export interface CosmosTxV1Beta1GetTxResponse {
  tx?: CosmosTxV1Beta1Tx;
  tx_response?: {
    height?: string;
    txhash?: string;
    codespace?: string;
    code?: number;
    data?: string;
    raw_log?: string;
    logs?: {
      msg_index?: number;
      log?: string;
      events?: {
        type?: string;
        attributes?: {
          key?: string;
          value?: string;
        }[];
      }[];
    }[];
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    tx?: {
      type_url?: string;
      value?: string;
    };
    timestamp?: string;
    events?: {
      type?: string;
      attributes?: {
        key?: string;
        value?: string;
        index?: boolean;
      }[];
    }[];
  };
}
/**
 * AccountInfo queries account info which is common to all account types.
 */
export const accountInfo = (address: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            info?: {
              address?: string;
              pub_key?: {
                type_url?: string;
                value?: string;
              };
              account_number?: string;
              sequence?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/auth/v1beta1/account_info/${encodeURIComponent(address)}`, {
      ...opts,
    }),
  );
/**
 * Accounts returns all the existing accounts.
 */
export const accounts = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            accounts?: {
              type_url?: string;
              value?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/auth/v1beta1/accounts${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Account returns account details based on address.
 */
export const account = (address: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            account?: {
              type_url?: string;
              value?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/auth/v1beta1/accounts/${encodeURIComponent(address)}`, {
      ...opts,
    }),
  );
/**
 * AccountAddressByID returns account address based on account number.
 */
export const accountAddressById = (
  id: string,
  {
    accountId,
  }: {
    accountId?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            account_address?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/auth/v1beta1/address_by_id/${encodeURIComponent(id)}${QS.query(
        QS.explode({
          account_id: accountId,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Bech32Prefix queries bech32Prefix
 */
export const bech32Prefix = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            bech32_prefix?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/auth/v1beta1/bech32", {
      ...opts,
    }),
  );
/**
 * AddressBytesToString converts Account Address bytes to string
 */
export const addressBytesToString = (addressBytes: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            address_string?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/auth/v1beta1/bech32/${encodeURIComponent(addressBytes)}`, {
      ...opts,
    }),
  );
/**
 * AddressStringToBytes converts Address string to bytes
 */
export const addressStringToBytes = (addressString: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            address_bytes?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/auth/v1beta1/bech32/${encodeURIComponent(addressString)}`, {
      ...opts,
    }),
  );
/**
 * ModuleAccounts returns all the existing module accounts.
 */
export const moduleAccounts = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            accounts?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/auth/v1beta1/module_accounts", {
      ...opts,
    }),
  );
/**
 * ModuleAccountByName returns the module account info by module name
 */
export const moduleAccountByName = (name: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            account?: {
              type_url?: string;
              value?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/auth/v1beta1/module_accounts/${encodeURIComponent(name)}`, {
      ...opts,
    }),
  );
/**
 * Params queries all parameters.
 */
export const authParams = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            params?: {
              max_memo_characters?: string;
              tx_sig_limit?: string;
              tx_size_cost_per_byte?: string;
              sig_verify_cost_ed25519?: string;
              sig_verify_cost_secp256k1?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/auth/v1beta1/params", {
      ...opts,
    }),
  );
/**
 * AllBalances queries the balance of all coins for a single account.
 */
export const allBalances = (
  address: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            balances?: {
              denom?: string;
              amount?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/balances/${encodeURIComponent(address)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Balance queries the balance of a single coin for a single account.
 */
export const balance = (
  address: string,
  {
    denom,
  }: {
    denom?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            balance?: {
              denom?: string;
              amount?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/balances/${encodeURIComponent(address)}/by_denom${QS.query(
        QS.explode({
          denom,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DenomOwners queries for all account addresses that own a particular token
 * denomination.
 */
export const denomOwners = (
  denom: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            denom_owners?: {
              address?: string;
              balance?: {
                denom?: string;
                amount?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/denom_owners/${encodeURIComponent(denom)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DenomsMetadata queries the client metadata for all registered coin
 * denominations.
 */
export const denomsMetadata = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            metadatas?: {
              description?: string;
              denom_units?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
              }[];
              base?: string;
              display?: string;
              name?: string;
              symbol?: string;
              uri?: string;
              uri_hash?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/denoms_metadata${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DenomsMetadata queries the client metadata of a given coin denomination.
 */
export const denomMetadata = (denom: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            metadata?: {
              description?: string;
              denom_units?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
              }[];
              base?: string;
              display?: string;
              name?: string;
              symbol?: string;
              uri?: string;
              uri_hash?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/bank/v1beta1/denoms_metadata/${encodeURIComponent(denom)}`, {
      ...opts,
    }),
  );
/**
 * Params queries the parameters of x/bank module.
 */
export const bankParams = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            params?: {
              send_enabled?: {
                denom?: string;
                enabled?: boolean;
              }[];
              default_send_enabled?: boolean;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/bank/v1beta1/params", {
      ...opts,
    }),
  );
/**
 * SendEnabled queries for SendEnabled entries.
 */
export const sendEnabled = (
  {
    denoms,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    denoms?: string[];
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            send_enabled?: {
              denom?: string;
              enabled?: boolean;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/send_enabled${QS.query(
        QS.explode({
          denoms,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * SpendableBalances queries the spendable balance of all coins for a single
 * account.
 */
export const spendableBalances = (
  address: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            balances?: {
              denom?: string;
              amount?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/spendable_balances/${encodeURIComponent(address)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * SpendableBalanceByDenom queries the spendable balance of a single denom for
 * a single account.
 */
export const spendableBalanceByDenom = (
  address: string,
  {
    denom,
  }: {
    denom?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            balance?: {
              denom?: string;
              amount?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/spendable_balances/${encodeURIComponent(address)}/by_denom${QS.query(
        QS.explode({
          denom,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * TotalSupply queries the total supply of all coins.
 */
export const totalSupply = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            supply?: {
              denom?: string;
              amount?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/supply${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * SupplyOf queries the supply of a single coin.
 */
export const supplyOf = (
  {
    denom,
  }: {
    denom?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            amount?: {
              denom?: string;
              amount?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/bank/v1beta1/supply/by_denom${QS.query(
        QS.explode({
          denom,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * ABCIQuery defines a query handler that supports ABCI queries directly to the
 * application, bypassing Tendermint completely. The ABCI query must contain
 * a valid and supported path, including app, custom, p2p, and store.
 */
export const abciQuery = (
  {
    data,
    path,
    height,
    prove,
  }: {
    data?: string;
    path?: string;
    height?: string;
    prove?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            code?: number;
            log?: string;
            info?: string;
            index?: string;
            key?: string;
            value?: string;
            proof_ops?: {
              ops?: {
                type?: string;
                key?: string;
                data?: string;
              }[];
            };
            height?: string;
            codespace?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/base/tendermint/v1beta1/abci_query${QS.query(
        QS.explode({
          data,
          path,
          height,
          prove,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GetLatestBlock returns the latest block.
 */
export const getLatestBlock = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            block_id?: {
              hash?: string;
              part_set_header?: {
                total?: number;
                hash?: string;
              };
            };
            block?: {
              header?: {
                version?: {
                  block?: string;
                  app?: string;
                };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              data?: {
                txs?: string[];
              };
              evidence?: {
                evidence?: {
                  duplicate_vote_evidence?: {
                    vote_a?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    vote_b?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    total_voting_power?: string;
                    validator_power?: string;
                    timestamp?: string;
                  };
                  light_client_attack_evidence?: {
                    conflicting_block?: {
                      signed_header?: {
                        header?: {
                          version?: {
                            block?: string;
                            app?: string;
                          };
                          chain_id?: string;
                          height?: string;
                          time?: string;
                          last_block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          last_commit_hash?: string;
                          data_hash?: string;
                          validators_hash?: string;
                          next_validators_hash?: string;
                          consensus_hash?: string;
                          app_hash?: string;
                          last_results_hash?: string;
                          evidence_hash?: string;
                          proposer_address?: string;
                        };
                        commit?: {
                          height?: string;
                          round?: number;
                          block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          signatures?: {
                            block_id_flag?:
                              | "BLOCK_ID_FLAG_UNKNOWN"
                              | "BLOCK_ID_FLAG_ABSENT"
                              | "BLOCK_ID_FLAG_COMMIT"
                              | "BLOCK_ID_FLAG_NIL";
                            validator_address?: string;
                            timestamp?: string;
                            signature?: string;
                          }[];
                        };
                      };
                      validator_set?: {
                        validators?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        }[];
                        proposer?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        };
                        total_voting_power?: string;
                      };
                    };
                    common_height?: string;
                    byzantine_validators?: {
                      address?: string;
                      pub_key?: {
                        ed25519?: string;
                        secp256k1?: string;
                      };
                      voting_power?: string;
                      proposer_priority?: string;
                    }[];
                    total_voting_power?: string;
                    timestamp?: string;
                  };
                }[];
              };
              last_commit?: {
                height?: string;
                round?: number;
                block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
            sdk_block?: {
              header?: {
                version?: {
                  block?: string;
                  app?: string;
                };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              data?: {
                txs?: string[];
              };
              evidence?: {
                evidence?: {
                  duplicate_vote_evidence?: {
                    vote_a?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    vote_b?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    total_voting_power?: string;
                    validator_power?: string;
                    timestamp?: string;
                  };
                  light_client_attack_evidence?: {
                    conflicting_block?: {
                      signed_header?: {
                        header?: {
                          version?: {
                            block?: string;
                            app?: string;
                          };
                          chain_id?: string;
                          height?: string;
                          time?: string;
                          last_block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          last_commit_hash?: string;
                          data_hash?: string;
                          validators_hash?: string;
                          next_validators_hash?: string;
                          consensus_hash?: string;
                          app_hash?: string;
                          last_results_hash?: string;
                          evidence_hash?: string;
                          proposer_address?: string;
                        };
                        commit?: {
                          height?: string;
                          round?: number;
                          block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          signatures?: {
                            block_id_flag?:
                              | "BLOCK_ID_FLAG_UNKNOWN"
                              | "BLOCK_ID_FLAG_ABSENT"
                              | "BLOCK_ID_FLAG_COMMIT"
                              | "BLOCK_ID_FLAG_NIL";
                            validator_address?: string;
                            timestamp?: string;
                            signature?: string;
                          }[];
                        };
                      };
                      validator_set?: {
                        validators?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        }[];
                        proposer?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        };
                        total_voting_power?: string;
                      };
                    };
                    common_height?: string;
                    byzantine_validators?: {
                      address?: string;
                      pub_key?: {
                        ed25519?: string;
                        secp256k1?: string;
                      };
                      voting_power?: string;
                      proposer_priority?: string;
                    }[];
                    total_voting_power?: string;
                    timestamp?: string;
                  };
                }[];
              };
              last_commit?: {
                height?: string;
                round?: number;
                block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/base/tendermint/v1beta1/blocks/latest", {
      ...opts,
    }),
  );
/**
 * GetBlockByHeight queries block for given height.
 */
export const getBlockByHeight = (height: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            block_id?: {
              hash?: string;
              part_set_header?: {
                total?: number;
                hash?: string;
              };
            };
            block?: {
              header?: {
                version?: {
                  block?: string;
                  app?: string;
                };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              data?: {
                txs?: string[];
              };
              evidence?: {
                evidence?: {
                  duplicate_vote_evidence?: {
                    vote_a?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    vote_b?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    total_voting_power?: string;
                    validator_power?: string;
                    timestamp?: string;
                  };
                  light_client_attack_evidence?: {
                    conflicting_block?: {
                      signed_header?: {
                        header?: {
                          version?: {
                            block?: string;
                            app?: string;
                          };
                          chain_id?: string;
                          height?: string;
                          time?: string;
                          last_block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          last_commit_hash?: string;
                          data_hash?: string;
                          validators_hash?: string;
                          next_validators_hash?: string;
                          consensus_hash?: string;
                          app_hash?: string;
                          last_results_hash?: string;
                          evidence_hash?: string;
                          proposer_address?: string;
                        };
                        commit?: {
                          height?: string;
                          round?: number;
                          block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          signatures?: {
                            block_id_flag?:
                              | "BLOCK_ID_FLAG_UNKNOWN"
                              | "BLOCK_ID_FLAG_ABSENT"
                              | "BLOCK_ID_FLAG_COMMIT"
                              | "BLOCK_ID_FLAG_NIL";
                            validator_address?: string;
                            timestamp?: string;
                            signature?: string;
                          }[];
                        };
                      };
                      validator_set?: {
                        validators?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        }[];
                        proposer?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        };
                        total_voting_power?: string;
                      };
                    };
                    common_height?: string;
                    byzantine_validators?: {
                      address?: string;
                      pub_key?: {
                        ed25519?: string;
                        secp256k1?: string;
                      };
                      voting_power?: string;
                      proposer_priority?: string;
                    }[];
                    total_voting_power?: string;
                    timestamp?: string;
                  };
                }[];
              };
              last_commit?: {
                height?: string;
                round?: number;
                block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
            sdk_block?: {
              header?: {
                version?: {
                  block?: string;
                  app?: string;
                };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              data?: {
                txs?: string[];
              };
              evidence?: {
                evidence?: {
                  duplicate_vote_evidence?: {
                    vote_a?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    vote_b?: {
                      type?:
                        | "SIGNED_MSG_TYPE_UNKNOWN"
                        | "SIGNED_MSG_TYPE_PREVOTE"
                        | "SIGNED_MSG_TYPE_PRECOMMIT"
                        | "SIGNED_MSG_TYPE_PROPOSAL";
                      height?: string;
                      round?: number;
                      block_id?: {
                        hash?: string;
                        part_set_header?: {
                          total?: number;
                          hash?: string;
                        };
                      };
                      timestamp?: string;
                      validator_address?: string;
                      validator_index?: number;
                      signature?: string;
                    };
                    total_voting_power?: string;
                    validator_power?: string;
                    timestamp?: string;
                  };
                  light_client_attack_evidence?: {
                    conflicting_block?: {
                      signed_header?: {
                        header?: {
                          version?: {
                            block?: string;
                            app?: string;
                          };
                          chain_id?: string;
                          height?: string;
                          time?: string;
                          last_block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          last_commit_hash?: string;
                          data_hash?: string;
                          validators_hash?: string;
                          next_validators_hash?: string;
                          consensus_hash?: string;
                          app_hash?: string;
                          last_results_hash?: string;
                          evidence_hash?: string;
                          proposer_address?: string;
                        };
                        commit?: {
                          height?: string;
                          round?: number;
                          block_id?: {
                            hash?: string;
                            part_set_header?: {
                              total?: number;
                              hash?: string;
                            };
                          };
                          signatures?: {
                            block_id_flag?:
                              | "BLOCK_ID_FLAG_UNKNOWN"
                              | "BLOCK_ID_FLAG_ABSENT"
                              | "BLOCK_ID_FLAG_COMMIT"
                              | "BLOCK_ID_FLAG_NIL";
                            validator_address?: string;
                            timestamp?: string;
                            signature?: string;
                          }[];
                        };
                      };
                      validator_set?: {
                        validators?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        }[];
                        proposer?: {
                          address?: string;
                          pub_key?: {
                            ed25519?: string;
                            secp256k1?: string;
                          };
                          voting_power?: string;
                          proposer_priority?: string;
                        };
                        total_voting_power?: string;
                      };
                    };
                    common_height?: string;
                    byzantine_validators?: {
                      address?: string;
                      pub_key?: {
                        ed25519?: string;
                        secp256k1?: string;
                      };
                      voting_power?: string;
                      proposer_priority?: string;
                    }[];
                    total_voting_power?: string;
                    timestamp?: string;
                  };
                }[];
              };
              last_commit?: {
                height?: string;
                round?: number;
                block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/base/tendermint/v1beta1/blocks/${encodeURIComponent(height)}`, {
      ...opts,
    }),
  );
/**
 * GetNodeInfo queries the current node info.
 */
export const getNodeInfo = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            default_node_info?: {
              protocol_version?: {
                p2p?: string;
                block?: string;
                app?: string;
              };
              default_node_id?: string;
              listen_addr?: string;
              network?: string;
              version?: string;
              channels?: string;
              moniker?: string;
              other?: {
                tx_index?: string;
                rpc_address?: string;
              };
            };
            application_version?: {
              name?: string;
              app_name?: string;
              version?: string;
              git_commit?: string;
              build_tags?: string;
              go_version?: string;
              build_deps?: {
                path?: string;
                version?: string;
                sum?: string;
              }[];
              cosmos_sdk_version?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/base/tendermint/v1beta1/node_info", {
      ...opts,
    }),
  );
/**
 * GetSyncing queries node syncing.
 */
export const getSyncing = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            syncing?: boolean;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/base/tendermint/v1beta1/syncing", {
      ...opts,
    }),
  );
/**
 * GetLatestValidatorSet queries latest validator-set.
 */
export const getLatestValidatorSet = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            block_height?: string;
            validators?: {
              address?: string;
              pub_key?: {
                type_url?: string;
                value?: string;
              };
              voting_power?: string;
              proposer_priority?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/base/tendermint/v1beta1/validatorsets/latest${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GetValidatorSetByHeight queries validator-set at a given height.
 */
export const getValidatorSetByHeight = (
  height: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            block_height?: string;
            validators?: {
              address?: string;
              pub_key?: {
                type_url?: string;
                value?: string;
              };
              voting_power?: string;
              proposer_priority?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/base/tendermint/v1beta1/validatorsets/${encodeURIComponent(height)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * CommunityPool queries the community pool coins.
 */
export const communityPool = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            pool?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/distribution/v1beta1/community_pool", {
      ...opts,
    }),
  );
/**
 * DelegationTotalRewards queries the total rewards accrued by a each
 * validator.
 */
export const delegationTotalRewards = (delegatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            rewards?: {
              validator_address?: string;
              reward?: {
                denom?: string;
                amount?: string;
              }[];
            }[];
            total?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/distribution/v1beta1/delegators/${encodeURIComponent(delegatorAddress)}/rewards`, {
      ...opts,
    }),
  );
/**
 * DelegationRewards queries the total rewards accrued by a delegation.
 */
export const delegationRewards = (delegatorAddress: string, validatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            rewards?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/distribution/v1beta1/delegators/${encodeURIComponent(delegatorAddress)}/rewards/${encodeURIComponent(
        validatorAddress,
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DelegatorValidators queries the validators of a delegator.
 */
export const delegatorValidators = (delegatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            validators?: string[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/distribution/v1beta1/delegators/${encodeURIComponent(delegatorAddress)}/validators`, {
      ...opts,
    }),
  );
/**
 * DelegatorWithdrawAddress queries withdraw address of a delegator.
 */
export const delegatorWithdrawAddress = (delegatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            withdraw_address?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/distribution/v1beta1/delegators/${encodeURIComponent(delegatorAddress)}/withdraw_address`, {
      ...opts,
    }),
  );
/**
 * Params queries params of the distribution module.
 */
export const distributionParams = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            params?: {
              community_tax?: string;
              base_proposer_reward?: string;
              bonus_proposer_reward?: string;
              withdraw_addr_enabled?: boolean;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/distribution/v1beta1/params", {
      ...opts,
    }),
  );
/**
 * ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator
 */
export const validatorDistributionInfo = (validatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            operator_address?: string;
            self_bond_rewards?: {
              denom?: string;
              amount?: string;
            }[];
            commission?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/distribution/v1beta1/validators/${encodeURIComponent(validatorAddress)}`, {
      ...opts,
    }),
  );
/**
 * ValidatorCommission queries accumulated commission for a validator.
 */
export const validatorCommission = (validatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            commission?: {
              commission?: {
                denom?: string;
                amount?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/distribution/v1beta1/validators/${encodeURIComponent(validatorAddress)}/commission`, {
      ...opts,
    }),
  );
/**
 * ValidatorOutstandingRewards queries rewards of a validator address.
 */
export const validatorOutstandingRewards = (validatorAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            rewards?: {
              rewards?: {
                denom?: string;
                amount?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/distribution/v1beta1/validators/${encodeURIComponent(validatorAddress)}/outstanding_rewards`, {
      ...opts,
    }),
  );
/**
 * ValidatorSlashes queries slash events of a validator.
 */
export const validatorSlashes = (
  validatorAddress: string,
  {
    startingHeight,
    endingHeight,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    startingHeight?: string;
    endingHeight?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            slashes?: {
              validator_period?: string;
              fraction?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/distribution/v1beta1/validators/${encodeURIComponent(validatorAddress)}/slashes${QS.query(
        QS.explode({
          starting_height: startingHeight,
          ending_height: endingHeight,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * AllEvidence queries all evidence.
 */
export const allEvidence = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            evidence?: {
              type_url?: string;
              value?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/evidence/v1beta1/evidence${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Evidence queries evidence based on evidence hash.
 */
export const evidence = (
  hash: string,
  {
    evidenceHash,
  }: {
    evidenceHash?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            evidence?: {
              type_url?: string;
              value?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/evidence/v1beta1/evidence/${encodeURIComponent(hash)}${QS.query(
        QS.explode({
          evidence_hash: evidenceHash,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Params queries all parameters of the gov module.
 */
export const govParams = (paramsType: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            voting_params?: {
              voting_period?: string;
            };
            deposit_params?: {
              min_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              max_deposit_period?: string;
            };
            tally_params?: {
              quorum?: string;
              threshold?: string;
              veto_threshold?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1beta1/params/${encodeURIComponent(paramsType)}`, {
      ...opts,
    }),
  );
/**
 * Proposals queries all proposals based on given status.
 */
export const proposals = (
  {
    proposalStatus,
    voter,
    depositor,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    proposalStatus?:
      | "PROPOSAL_STATUS_UNSPECIFIED"
      | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
      | "PROPOSAL_STATUS_VOTING_PERIOD"
      | "PROPOSAL_STATUS_PASSED"
      | "PROPOSAL_STATUS_REJECTED"
      | "PROPOSAL_STATUS_FAILED";
    voter?: string;
    depositor?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            proposals?: {
              proposal_id?: string;
              content?: {
                type_url?: string;
                value?: string;
              };
              status?:
                | "PROPOSAL_STATUS_UNSPECIFIED"
                | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
                | "PROPOSAL_STATUS_VOTING_PERIOD"
                | "PROPOSAL_STATUS_PASSED"
                | "PROPOSAL_STATUS_REJECTED"
                | "PROPOSAL_STATUS_FAILED";
              final_tally_result?: {
                yes?: string;
                abstain?: string;
                no?: string;
                no_with_veto?: string;
              };
              submit_time?: string;
              deposit_end_time?: string;
              total_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              voting_start_time?: string;
              voting_end_time?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/gov/v1beta1/proposals${QS.query(
        QS.explode({
          proposal_status: proposalStatus,
          voter,
          depositor,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Proposal queries proposal details based on ProposalID.
 */
export const proposal = (proposalId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            proposal?: {
              proposal_id?: string;
              content?: {
                type_url?: string;
                value?: string;
              };
              status?:
                | "PROPOSAL_STATUS_UNSPECIFIED"
                | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
                | "PROPOSAL_STATUS_VOTING_PERIOD"
                | "PROPOSAL_STATUS_PASSED"
                | "PROPOSAL_STATUS_REJECTED"
                | "PROPOSAL_STATUS_FAILED";
              final_tally_result?: {
                yes?: string;
                abstain?: string;
                no?: string;
                no_with_veto?: string;
              };
              submit_time?: string;
              deposit_end_time?: string;
              total_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              voting_start_time?: string;
              voting_end_time?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1beta1/proposals/${encodeURIComponent(proposalId)}`, {
      ...opts,
    }),
  );
/**
 * Deposits queries all deposits of a single proposal.
 */
export const deposits = (
  proposalId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            deposits?: {
              proposal_id?: string;
              depositor?: string;
              amount?: {
                denom?: string;
                amount?: string;
              }[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/gov/v1beta1/proposals/${encodeURIComponent(proposalId)}/deposits${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Deposit queries single deposit information based proposalID, depositAddr.
 */
export const deposit = (proposalId: string, depositor: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            deposit?: {
              proposal_id?: string;
              depositor?: string;
              amount?: {
                denom?: string;
                amount?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1beta1/proposals/${encodeURIComponent(proposalId)}/deposits/${encodeURIComponent(depositor)}`, {
      ...opts,
    }),
  );
/**
 * TallyResult queries the tally of a proposal vote.
 */
export const tallyResult = (proposalId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            tally?: {
              yes?: string;
              abstain?: string;
              no?: string;
              no_with_veto?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1beta1/proposals/${encodeURIComponent(proposalId)}/tally`, {
      ...opts,
    }),
  );
/**
 * Votes queries votes of a given proposal.
 */
export const votes = (
  proposalId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            votes?: {
              proposal_id?: string;
              voter?: string;
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              options?: {
                option?:
                  | "VOTE_OPTION_UNSPECIFIED"
                  | "VOTE_OPTION_YES"
                  | "VOTE_OPTION_ABSTAIN"
                  | "VOTE_OPTION_NO"
                  | "VOTE_OPTION_NO_WITH_VETO";
                weight?: string;
              }[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/gov/v1beta1/proposals/${encodeURIComponent(proposalId)}/votes${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Vote queries voted information based on proposalID, voterAddr.
 */
export const vote = (proposalId: string, voter: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            vote?: {
              proposal_id?: string;
              voter?: string;
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              options?: {
                option?:
                  | "VOTE_OPTION_UNSPECIFIED"
                  | "VOTE_OPTION_YES"
                  | "VOTE_OPTION_ABSTAIN"
                  | "VOTE_OPTION_NO"
                  | "VOTE_OPTION_NO_WITH_VETO";
                weight?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1beta1/proposals/${encodeURIComponent(proposalId)}/votes/${encodeURIComponent(voter)}`, {
      ...opts,
    }),
  );
/**
 * Params queries all parameters of the gov module.
 */
export const govV1Params = (paramsType: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            voting_params?: {
              voting_period?: string;
            };
            deposit_params?: {
              min_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              max_deposit_period?: string;
            };
            tally_params?: {
              quorum?: string;
              threshold?: string;
              veto_threshold?: string;
            };
            params?: {
              min_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              max_deposit_period?: string;
              voting_period?: string;
              quorum?: string;
              threshold?: string;
              veto_threshold?: string;
              min_initial_deposit_ratio?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1/params/${encodeURIComponent(paramsType)}`, {
      ...opts,
    }),
  );
/**
 * Proposals queries all proposals based on given status.
 */
export const govV1Proposal = (
  {
    proposalStatus,
    voter,
    depositor,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    proposalStatus?:
      | "PROPOSAL_STATUS_UNSPECIFIED"
      | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
      | "PROPOSAL_STATUS_VOTING_PERIOD"
      | "PROPOSAL_STATUS_PASSED"
      | "PROPOSAL_STATUS_REJECTED"
      | "PROPOSAL_STATUS_FAILED";
    voter?: string;
    depositor?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            proposals?: {
              id?: string;
              messages?: {
                type_url?: string;
                value?: string;
              }[];
              status?:
                | "PROPOSAL_STATUS_UNSPECIFIED"
                | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
                | "PROPOSAL_STATUS_VOTING_PERIOD"
                | "PROPOSAL_STATUS_PASSED"
                | "PROPOSAL_STATUS_REJECTED"
                | "PROPOSAL_STATUS_FAILED";
              final_tally_result?: {
                yes_count?: string;
                abstain_count?: string;
                no_count?: string;
                no_with_veto_count?: string;
              };
              submit_time?: string;
              deposit_end_time?: string;
              total_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              voting_start_time?: string;
              voting_end_time?: string;
              metadata?: string;
              title?: string;
              summary?: string;
              proposer?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/gov/v1/proposals${QS.query(
        QS.explode({
          proposal_status: proposalStatus,
          voter,
          depositor,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Proposal queries proposal details based on ProposalID.
 */
export const govV1Proposal2 = (proposalId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            proposal?: {
              id?: string;
              messages?: {
                type_url?: string;
                value?: string;
              }[];
              status?:
                | "PROPOSAL_STATUS_UNSPECIFIED"
                | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
                | "PROPOSAL_STATUS_VOTING_PERIOD"
                | "PROPOSAL_STATUS_PASSED"
                | "PROPOSAL_STATUS_REJECTED"
                | "PROPOSAL_STATUS_FAILED";
              final_tally_result?: {
                yes_count?: string;
                abstain_count?: string;
                no_count?: string;
                no_with_veto_count?: string;
              };
              submit_time?: string;
              deposit_end_time?: string;
              total_deposit?: {
                denom?: string;
                amount?: string;
              }[];
              voting_start_time?: string;
              voting_end_time?: string;
              metadata?: string;
              title?: string;
              summary?: string;
              proposer?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1/proposals/${encodeURIComponent(proposalId)}`, {
      ...opts,
    }),
  );
/**
 * Deposits queries all deposits of a single proposal.
 */
export const govV1Deposit = (
  proposalId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            deposits?: {
              proposal_id?: string;
              depositor?: string;
              amount?: {
                denom?: string;
                amount?: string;
              }[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/gov/v1/proposals/${encodeURIComponent(proposalId)}/deposits${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Deposit queries single deposit information based proposalID, depositAddr.
 */
export const govV1Deposit2 = (proposalId: string, depositor: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            deposit?: {
              proposal_id?: string;
              depositor?: string;
              amount?: {
                denom?: string;
                amount?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1/proposals/${encodeURIComponent(proposalId)}/deposits/${encodeURIComponent(depositor)}`, {
      ...opts,
    }),
  );
/**
 * TallyResult queries the tally of a proposal vote.
 */
export const govV1TallyResult = (proposalId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            tally?: {
              yes_count?: string;
              abstain_count?: string;
              no_count?: string;
              no_with_veto_count?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1/proposals/${encodeURIComponent(proposalId)}/tally`, {
      ...opts,
    }),
  );
/**
 * Votes queries votes of a given proposal.
 */
export const govV1Votes = (
  proposalId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            votes?: {
              proposal_id?: string;
              voter?: string;
              options?: {
                option?:
                  | "VOTE_OPTION_UNSPECIFIED"
                  | "VOTE_OPTION_YES"
                  | "VOTE_OPTION_ABSTAIN"
                  | "VOTE_OPTION_NO"
                  | "VOTE_OPTION_NO_WITH_VETO";
                weight?: string;
              }[];
              metadata?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/gov/v1/proposals/${encodeURIComponent(proposalId)}/votes${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Vote queries voted information based on proposalID, voterAddr.
 */
export const govV1Vote = (proposalId: string, voter: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            vote?: {
              proposal_id?: string;
              voter?: string;
              options?: {
                option?:
                  | "VOTE_OPTION_UNSPECIFIED"
                  | "VOTE_OPTION_YES"
                  | "VOTE_OPTION_ABSTAIN"
                  | "VOTE_OPTION_NO"
                  | "VOTE_OPTION_NO_WITH_VETO";
                weight?: string;
              }[];
              metadata?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/gov/v1/proposals/${encodeURIComponent(proposalId)}/votes/${encodeURIComponent(voter)}`, {
      ...opts,
    }),
  );
/**
 * AnnualProvisions current minting annual provisions value.
 */
export const annualProvisions = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            annual_provisions?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/mint/v1beta1/annual_provisions", {
      ...opts,
    }),
  );
/**
 * Inflation returns the current minting inflation value.
 */
export const inflation = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            inflation?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/mint/v1beta1/inflation", {
      ...opts,
    }),
  );
/**
 * Params returns the total set of minting parameters.
 */
export const mintParams = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            params?: {
              mint_denom?: string;
              inflation_rate_change?: string;
              inflation_max?: string;
              inflation_min?: string;
              goal_bonded?: string;
              blocks_per_year?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/mint/v1beta1/params", {
      ...opts,
    }),
  );
/**
 * Params queries a specific parameter of a module, given its subspace and
 * key.
 */
export const params = (
  {
    subspace,
    key,
  }: {
    subspace?: string;
    key?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            param?: {
              subspace?: string;
              key?: string;
              value?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/params/v1beta1/params${QS.query(
        QS.explode({
          subspace,
          key,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Subspaces queries for all registered subspaces and all keys for a subspace.
 */
export const subspaces = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            subspaces?: {
              subspace?: string;
              keys?: string[];
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/params/v1beta1/subspaces", {
      ...opts,
    }),
  );
/**
 * Params queries the parameters of slashing module
 */
export const slashingParams = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            params?: {
              signed_blocks_window?: string;
              min_signed_per_window?: string;
              downtime_jail_duration?: string;
              slash_fraction_double_sign?: string;
              slash_fraction_downtime?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/slashing/v1beta1/params", {
      ...opts,
    }),
  );
/**
 * SigningInfos queries signing info of all validators
 */
export const signingInfos = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            info?: {
              address?: string;
              start_height?: string;
              index_offset?: string;
              jailed_until?: string;
              tombstoned?: boolean;
              missed_blocks_counter?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/slashing/v1beta1/signing_infos${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * SigningInfo queries the signing info of given cons address
 */
export const signingInfo = (consAddress: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            val_signing_info?: {
              address?: string;
              start_height?: string;
              index_offset?: string;
              jailed_until?: string;
              tombstoned?: boolean;
              missed_blocks_counter?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/slashing/v1beta1/signing_infos/${encodeURIComponent(consAddress)}`, {
      ...opts,
    }),
  );
/**
 * DelegatorDelegations queries all delegations of a given delegator address.
 */
export const delegatorDelegations = (
  delegatorAddr: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            delegation_responses?: {
              delegation?: {
                delegator_address?: string;
                validator_address?: string;
                shares?: string;
              };
              balance?: {
                denom?: string;
                amount?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/delegations/${encodeURIComponent(delegatorAddr)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Redelegations queries redelegations of given address.
 */
export const redelegations = (
  delegatorAddr: string,
  {
    srcValidatorAddr,
    dstValidatorAddr,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    srcValidatorAddr?: string;
    dstValidatorAddr?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            redelegation_responses?: {
              redelegation?: {
                delegator_address?: string;
                validator_src_address?: string;
                validator_dst_address?: string;
                entries?: {
                  creation_height?: string;
                  completion_time?: string;
                  initial_balance?: string;
                  shares_dst?: string;
                  unbonding_id?: string;
                  unbonding_on_hold_ref_count?: string;
                }[];
              };
              entries?: {
                redelegation_entry?: {
                  creation_height?: string;
                  completion_time?: string;
                  initial_balance?: string;
                  shares_dst?: string;
                  unbonding_id?: string;
                  unbonding_on_hold_ref_count?: string;
                };
                balance?: string;
              }[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/delegators/${encodeURIComponent(delegatorAddr)}/redelegations${QS.query(
        QS.explode({
          src_validator_addr: srcValidatorAddr,
          dst_validator_addr: dstValidatorAddr,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DelegatorUnbondingDelegations queries all unbonding delegations of a given
 * delegator address.
 */
export const delegatorUnbondingDelegations = (
  delegatorAddr: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            unbonding_responses?: {
              delegator_address?: string;
              validator_address?: string;
              entries?: {
                creation_height?: string;
                completion_time?: string;
                initial_balance?: string;
                balance?: string;
                unbonding_id?: string;
                unbonding_on_hold_ref_count?: string;
              }[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/delegators/${encodeURIComponent(delegatorAddr)}/unbonding_delegations${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DelegatorValidators queries all validators info for given delegator
 * address.
 */
export const stakingDelegatorValidators = (
  delegatorAddr: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            validators?: {
              operator_address?: string;
              consensus_pubkey?: {
                type_url?: string;
                value?: string;
              };
              jailed?: boolean;
              status?:
                | "BOND_STATUS_UNSPECIFIED"
                | "BOND_STATUS_UNBONDED"
                | "BOND_STATUS_UNBONDING"
                | "BOND_STATUS_BONDED";
              tokens?: string;
              delegator_shares?: string;
              description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                security_contact?: string;
                details?: string;
              };
              unbonding_height?: string;
              unbonding_time?: string;
              commission?: {
                commission_rates?: {
                  rate?: string;
                  max_rate?: string;
                  max_change_rate?: string;
                };
                update_time?: string;
              };
              min_self_delegation?: string;
              unbonding_on_hold_ref_count?: string;
              unbonding_ids?: string[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/delegators/${encodeURIComponent(delegatorAddr)}/validators${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * DelegatorValidator queries validator info for given delegator validator
 * pair.
 */
export const delegatorValidator = (delegatorAddr: string, validatorAddr: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            validator?: {
              operator_address?: string;
              consensus_pubkey?: {
                type_url?: string;
                value?: string;
              };
              jailed?: boolean;
              status?:
                | "BOND_STATUS_UNSPECIFIED"
                | "BOND_STATUS_UNBONDED"
                | "BOND_STATUS_UNBONDING"
                | "BOND_STATUS_BONDED";
              tokens?: string;
              delegator_shares?: string;
              description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                security_contact?: string;
                details?: string;
              };
              unbonding_height?: string;
              unbonding_time?: string;
              commission?: {
                commission_rates?: {
                  rate?: string;
                  max_rate?: string;
                  max_change_rate?: string;
                };
                update_time?: string;
              };
              min_self_delegation?: string;
              unbonding_on_hold_ref_count?: string;
              unbonding_ids?: string[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/delegators/${encodeURIComponent(delegatorAddr)}/validators/${encodeURIComponent(
        validatorAddr,
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * HistoricalInfo queries the historical info for given height.
 */
export const historicalInfo = (height: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            hist?: {
              header?: {
                version?: {
                  block?: string;
                  app?: string;
                };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: {
                  hash?: string;
                  part_set_header?: {
                    total?: number;
                    hash?: string;
                  };
                };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              valset?: {
                operator_address?: string;
                consensus_pubkey?: {
                  type_url?: string;
                  value?: string;
                };
                jailed?: boolean;
                status?:
                  | "BOND_STATUS_UNSPECIFIED"
                  | "BOND_STATUS_UNBONDED"
                  | "BOND_STATUS_UNBONDING"
                  | "BOND_STATUS_BONDED";
                tokens?: string;
                delegator_shares?: string;
                description?: {
                  moniker?: string;
                  identity?: string;
                  website?: string;
                  security_contact?: string;
                  details?: string;
                };
                unbonding_height?: string;
                unbonding_time?: string;
                commission?: {
                  commission_rates?: {
                    rate?: string;
                    max_rate?: string;
                    max_change_rate?: string;
                  };
                  update_time?: string;
                };
                min_self_delegation?: string;
                unbonding_on_hold_ref_count?: string;
                unbonding_ids?: string[];
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/staking/v1beta1/historical_info/${encodeURIComponent(height)}`, {
      ...opts,
    }),
  );
/**
 * Parameters queries the staking parameters.
 */
export const stakingParams = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            params?: {
              unbonding_time?: string;
              max_validators?: number;
              max_entries?: number;
              historical_entries?: number;
              bond_denom?: string;
              min_commission_rate?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/staking/v1beta1/params", {
      ...opts,
    }),
  );
/**
 * Pool queries the pool info.
 */
export const pool = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            pool?: {
              not_bonded_tokens?: string;
              bonded_tokens?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/staking/v1beta1/pool", {
      ...opts,
    }),
  );
/**
 * Validators queries all validators that match the given status.
 */
export const validators = (
  {
    status,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    status?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            validators?: {
              operator_address?: string;
              consensus_pubkey?: {
                type_url?: string;
                value?: string;
              };
              jailed?: boolean;
              status?:
                | "BOND_STATUS_UNSPECIFIED"
                | "BOND_STATUS_UNBONDED"
                | "BOND_STATUS_UNBONDING"
                | "BOND_STATUS_BONDED";
              tokens?: string;
              delegator_shares?: string;
              description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                security_contact?: string;
                details?: string;
              };
              unbonding_height?: string;
              unbonding_time?: string;
              commission?: {
                commission_rates?: {
                  rate?: string;
                  max_rate?: string;
                  max_change_rate?: string;
                };
                update_time?: string;
              };
              min_self_delegation?: string;
              unbonding_on_hold_ref_count?: string;
              unbonding_ids?: string[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/validators${QS.query(
        QS.explode({
          status,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Validator queries validator info for given validator address.
 */
export const validator = (validatorAddr: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            validator?: {
              operator_address?: string;
              consensus_pubkey?: {
                type_url?: string;
                value?: string;
              };
              jailed?: boolean;
              status?:
                | "BOND_STATUS_UNSPECIFIED"
                | "BOND_STATUS_UNBONDED"
                | "BOND_STATUS_UNBONDING"
                | "BOND_STATUS_BONDED";
              tokens?: string;
              delegator_shares?: string;
              description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                security_contact?: string;
                details?: string;
              };
              unbonding_height?: string;
              unbonding_time?: string;
              commission?: {
                commission_rates?: {
                  rate?: string;
                  max_rate?: string;
                  max_change_rate?: string;
                };
                update_time?: string;
              };
              min_self_delegation?: string;
              unbonding_on_hold_ref_count?: string;
              unbonding_ids?: string[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/staking/v1beta1/validators/${encodeURIComponent(validatorAddr)}`, {
      ...opts,
    }),
  );
/**
 * ValidatorDelegations queries delegate info for given validator.
 */
export const validatorDelegations = (
  validatorAddr: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            delegation_responses?: {
              delegation?: {
                delegator_address?: string;
                validator_address?: string;
                shares?: string;
              };
              balance?: {
                denom?: string;
                amount?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/validators/${encodeURIComponent(validatorAddr)}/delegations${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Delegation queries delegate info for given validator delegator pair.
 */
export const delegation = (validatorAddr: string, delegatorAddr: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            delegation_response?: {
              delegation?: {
                delegator_address?: string;
                validator_address?: string;
                shares?: string;
              };
              balance?: {
                denom?: string;
                amount?: string;
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/validators/${encodeURIComponent(validatorAddr)}/delegations/${encodeURIComponent(
        delegatorAddr,
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * UnbondingDelegation queries unbonding info for given validator delegator
 * pair.
 */
export const unbondingDelegation = (validatorAddr: string, delegatorAddr: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            unbond?: {
              delegator_address?: string;
              validator_address?: string;
              entries?: {
                creation_height?: string;
                completion_time?: string;
                initial_balance?: string;
                balance?: string;
                unbonding_id?: string;
                unbonding_on_hold_ref_count?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/validators/${encodeURIComponent(validatorAddr)}/delegations/${encodeURIComponent(
        delegatorAddr,
      )}/unbonding_delegation`,
      {
        ...opts,
      },
    ),
  );
/**
 * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
 */
export const validatorUnbondingDelegations = (
  validatorAddr: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            unbonding_responses?: {
              delegator_address?: string;
              validator_address?: string;
              entries?: {
                creation_height?: string;
                completion_time?: string;
                initial_balance?: string;
                balance?: string;
                unbonding_id?: string;
                unbonding_on_hold_ref_count?: string;
              }[];
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/staking/v1beta1/validators/${encodeURIComponent(validatorAddr)}/unbonding_delegations${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * TxDecode decodes the transaction.
 */
export const txDecode = (
  body: {
    tx_bytes?: string;
  },
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: CosmosTxV1Beta1TxDecodeResponse;
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      "/cosmos/tx/v1beta1/decode",
      oazapfts.json({
        ...opts,
        method: "POST",
        body,
      }),
    ),
  );
/**
 * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
 */
export const txDecodeAmino = (
  body: {
    amino_binary?: string;
  },
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            amino_json?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      "/cosmos/tx/v1beta1/decode/amino",
      oazapfts.json({
        ...opts,
        method: "POST",
        body,
      }),
    ),
  );
/**
 * TxEncode encodes the transaction.
 */
export const txEncode = (cosmosTxV1Beta1TxEncodeRequest: CosmosTxV1Beta1TxEncodeRequest, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            tx_bytes?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      "/cosmos/tx/v1beta1/encode",
      oazapfts.json({
        ...opts,
        method: "POST",
        body: cosmosTxV1Beta1TxEncodeRequest,
      }),
    ),
  );
/**
 * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
 */
export const txEncodeAmino = (
  body: {
    amino_json?: string;
  },
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            amino_binary?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      "/cosmos/tx/v1beta1/encode/amino",
      oazapfts.json({
        ...opts,
        method: "POST",
        body,
      }),
    ),
  );
/**
 * Simulate simulates executing a transaction for estimating gas usage.
 */
export const simulate = (cosmosTxV1Beta1SimulateRequest: CosmosTxV1Beta1SimulateRequest, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            gas_info?: {
              gas_wanted?: string;
              gas_used?: string;
            };
            result?: {
              data?: string;
              log?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: string;
                  value?: string;
                  index?: boolean;
                }[];
              }[];
              msg_responses?: {
                type_url?: string;
                value?: string;
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      "/cosmos/tx/v1beta1/simulate",
      oazapfts.json({
        ...opts,
        method: "POST",
        body: cosmosTxV1Beta1SimulateRequest,
      }),
    ),
  );
/**
 * GetTxsEvent fetches txs by event.
 */
export const getTxsEvent = (
  {
    events,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
    orderBy,
    page,
    limit,
  }: {
    events?: string[];
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
    orderBy?: "ORDER_BY_UNSPECIFIED" | "ORDER_BY_ASC" | "ORDER_BY_DESC";
    page?: string;
    limit?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: CosmosTxV1Beta1GetTxsEventResponse;
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/tx/v1beta1/txs${QS.query(
        QS.explode({
          events,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
          order_by: orderBy,
          page,
          limit,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * BroadcastTx broadcast transaction.
 */
export const broadcastTx = (
  body: {
    tx_bytes?: string;
    mode?: "BROADCAST_MODE_UNSPECIFIED" | "BROADCAST_MODE_BLOCK" | "BROADCAST_MODE_SYNC" | "BROADCAST_MODE_ASYNC";
  },
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            tx_response?: {
              height?: string;
              txhash?: string;
              codespace?: string;
              code?: number;
              data?: string;
              raw_log?: string;
              logs?: {
                msg_index?: number;
                log?: string;
                events?: {
                  type?: string;
                  attributes?: {
                    key?: string;
                    value?: string;
                  }[];
                }[];
              }[];
              info?: string;
              gas_wanted?: string;
              gas_used?: string;
              tx?: {
                type_url?: string;
                value?: string;
              };
              timestamp?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: string;
                  value?: string;
                  index?: boolean;
                }[];
              }[];
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      "/cosmos/tx/v1beta1/txs",
      oazapfts.json({
        ...opts,
        method: "POST",
        body,
      }),
    ),
  );
/**
 * GetBlockWithTxs fetches a block with decoded txs.
 */
export const getBlockWithTxs = (
  height: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: CosmosTxV1Beta1GetBlockWithTxsResponse;
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/tx/v1beta1/txs/block/${encodeURIComponent(height)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GetTx fetches a tx by hash.
 */
export const getTx = (hash: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: CosmosTxV1Beta1GetTxResponse;
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/tx/v1beta1/txs/${encodeURIComponent(hash)}`, {
      ...opts,
    }),
  );
/**
 * AppliedPlan queries a previously applied upgrade plan by its name.
 */
export const appliedPlan = (name: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            height?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/upgrade/v1beta1/applied_plan/${encodeURIComponent(name)}`, {
      ...opts,
    }),
  );
/**
 * Returns the account with authority to conduct upgrades
 */
export const authority = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            address?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/upgrade/v1beta1/authority", {
      ...opts,
    }),
  );
/**
 * CurrentPlan queries the current upgrade plan.
 */
export const currentPlan = (opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            plan?: {
              name?: string;
              time?: string;
              height?: string;
              info?: string;
              upgraded_client_state?: {
                type_url?: string;
                value?: string;
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >("/cosmos/upgrade/v1beta1/current_plan", {
      ...opts,
    }),
  );
/**
 * ModuleVersions queries the list of module versions from state.
 */
export const moduleVersions = (
  {
    moduleName,
  }: {
    moduleName?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            module_versions?: {
              name?: string;
              version?: string;
            }[];
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/upgrade/v1beta1/module_versions${QS.query(
        QS.explode({
          module_name: moduleName,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * UpgradedConsensusState queries the consensus state that will serve
 * as a trusted kernel for the next version of this chain. It will only be
 * stored at the last height of this chain.
 * UpgradedConsensusState RPC not supported with legacy querier
 * This rpc is deprecated now that IBC has its own replacement
 * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
 */
export const upgradedConsensusState = (lastHeight: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            upgraded_consensus_state?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/upgrade/v1beta1/upgraded_consensus_state/${encodeURIComponent(lastHeight)}`, {
      ...opts,
    }),
  );
/**
 * Returns list of `Authorization`, granted to the grantee by the granter.
 */
export const grants = (
  {
    granter,
    grantee,
    msgTypeUrl,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    granter?: string;
    grantee?: string;
    msgTypeUrl?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            grants?: {
              authorization?: {
                type_url?: string;
                value?: string;
              };
              expiration?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/authz/v1beta1/grants${QS.query(
        QS.explode({
          granter,
          grantee,
          msg_type_url: msgTypeUrl,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GranteeGrants returns a list of `GrantAuthorization` by grantee.
 */
export const granteeGrants = (
  grantee: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            grants?: {
              granter?: string;
              grantee?: string;
              authorization?: {
                type_url?: string;
                value?: string;
              };
              expiration?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/authz/v1beta1/grants/grantee/${encodeURIComponent(grantee)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GranterGrants returns list of `GrantAuthorization`, granted by granter.
 */
export const granterGrants = (
  granter: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            grants?: {
              granter?: string;
              grantee?: string;
              authorization?: {
                type_url?: string;
                value?: string;
              };
              expiration?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/authz/v1beta1/grants/granter/${encodeURIComponent(granter)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Allowance returns fee granted to the grantee by the granter.
 */
export const allowance = (granter: string, grantee: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            allowance?: {
              granter?: string;
              grantee?: string;
              allowance?: {
                type_url?: string;
                value?: string;
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/feegrant/v1beta1/allowance/${encodeURIComponent(granter)}/${encodeURIComponent(grantee)}`, {
      ...opts,
    }),
  );
/**
 * Allowances returns all the grants for address.
 */
export const allowances = (
  grantee: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            allowances?: {
              granter?: string;
              grantee?: string;
              allowance?: {
                type_url?: string;
                value?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/feegrant/v1beta1/allowances/${encodeURIComponent(grantee)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * AllowancesByGranter returns all the grants given by an address
 */
export const allowancesByGranter = (
  granter: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            allowances?: {
              granter?: string;
              grantee?: string;
              allowance?: {
                type_url?: string;
                value?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/feegrant/v1beta1/issued/${encodeURIComponent(granter)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
 */
export const nftBalance = (owner: string, classId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            amount?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/nft/v1beta1/balance/${encodeURIComponent(owner)}/${encodeURIComponent(classId)}`, {
      ...opts,
    }),
  );
/**
 * Classes queries all NFT classes
 */
export const classes = (
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            classes?: {
              id?: string;
              name?: string;
              symbol?: string;
              description?: string;
              uri?: string;
              uri_hash?: string;
              data?: {
                type_url?: string;
                value?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/nft/v1beta1/classes${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Class queries an NFT class based on its id
 */
export const getCosmosNftV1Beta1ClassesByClassId = (classId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            class?: {
              id?: string;
              name?: string;
              symbol?: string;
              description?: string;
              uri?: string;
              uri_hash?: string;
              data?: {
                type_url?: string;
                value?: string;
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/nft/v1beta1/classes/${encodeURIComponent(classId)}`, {
      ...opts,
    }),
  );
/**
 * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 * ERC721Enumerable
 */
export const nfTs = (
  {
    classId,
    owner,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    classId?: string;
    owner?: string;
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            nfts?: {
              class_id?: string;
              id?: string;
              uri?: string;
              uri_hash?: string;
              data?: {
                type_url?: string;
                value?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/nft/v1beta1/nfts${QS.query(
        QS.explode({
          class_id: classId,
          owner,
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * NFT queries an NFT based on its class and id.
 */
export const nft = (classId: string, id: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            nft?: {
              class_id?: string;
              id?: string;
              uri?: string;
              uri_hash?: string;
              data?: {
                type_url?: string;
                value?: string;
              };
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/nft/v1beta1/nfts/${encodeURIComponent(classId)}/${encodeURIComponent(id)}`, {
      ...opts,
    }),
  );
/**
 * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
 */
export const owner = (classId: string, id: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            owner?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/nft/v1beta1/owner/${encodeURIComponent(classId)}/${encodeURIComponent(id)}`, {
      ...opts,
    }),
  );
/**
 * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
 */
export const supply = (classId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            amount?: string;
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/nft/v1beta1/supply/${encodeURIComponent(classId)}`, {
      ...opts,
    }),
  );
/**
 * GroupInfo queries group info based on group id.
 */
export const groupInfo = (groupId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            info?: {
              id?: string;
              admin?: string;
              metadata?: string;
              version?: string;
              total_weight?: string;
              created_at?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/group/v1/group_info/${encodeURIComponent(groupId)}`, {
      ...opts,
    }),
  );
/**
 * GroupMembers queries members of a group by group id.
 */
export const groupMembers = (
  groupId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            members?: {
              group_id?: string;
              member?: {
                address?: string;
                weight?: string;
                metadata?: string;
                added_at?: string;
              };
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/group_members/${encodeURIComponent(groupId)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GroupPoliciesByAdmin queries group policies by admin address.
 */
export const groupPoliciesByAdmin = (
  admin: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            group_policies?: {
              address?: string;
              group_id?: string;
              admin?: string;
              metadata?: string;
              version?: string;
              decision_policy?: {
                type_url?: string;
                value?: string;
              };
              created_at?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/group_policies_by_admin/${encodeURIComponent(admin)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GroupPoliciesByGroup queries group policies by group id.
 */
export const groupPoliciesByGroup = (
  groupId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            group_policies?: {
              address?: string;
              group_id?: string;
              admin?: string;
              metadata?: string;
              version?: string;
              decision_policy?: {
                type_url?: string;
                value?: string;
              };
              created_at?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/group_policies_by_group/${encodeURIComponent(groupId)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GroupPolicyInfo queries group policy info based on account address of group policy.
 */
export const groupPolicyInfo = (address: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            info?: {
              address?: string;
              group_id?: string;
              admin?: string;
              metadata?: string;
              version?: string;
              decision_policy?: {
                type_url?: string;
                value?: string;
              };
              created_at?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/group/v1/group_policy_info/${encodeURIComponent(address)}`, {
      ...opts,
    }),
  );
/**
 * GroupsByAdmin queries groups by admin address.
 */
export const groupsByAdmin = (
  admin: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            groups?: {
              id?: string;
              admin?: string;
              metadata?: string;
              version?: string;
              total_weight?: string;
              created_at?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/groups_by_admin/${encodeURIComponent(admin)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * GroupsByMember queries groups by member address.
 */
export const groupsByMember = (
  address: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            groups?: {
              id?: string;
              admin?: string;
              metadata?: string;
              version?: string;
              total_weight?: string;
              created_at?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/groups_by_member/${encodeURIComponent(address)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * Proposal queries a proposal based on proposal id.
 */
export const groupProposal = (proposalId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            proposal?: {
              id?: string;
              group_policy_address?: string;
              metadata?: string;
              proposers?: string[];
              submit_time?: string;
              group_version?: string;
              group_policy_version?: string;
              status?:
                | "PROPOSAL_STATUS_UNSPECIFIED"
                | "PROPOSAL_STATUS_SUBMITTED"
                | "PROPOSAL_STATUS_ACCEPTED"
                | "PROPOSAL_STATUS_REJECTED"
                | "PROPOSAL_STATUS_ABORTED"
                | "PROPOSAL_STATUS_WITHDRAWN";
              final_tally_result?: {
                yes_count?: string;
                abstain_count?: string;
                no_count?: string;
                no_with_veto_count?: string;
              };
              voting_period_end?: string;
              executor_result?:
                | "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"
                | "PROPOSAL_EXECUTOR_RESULT_NOT_RUN"
                | "PROPOSAL_EXECUTOR_RESULT_SUCCESS"
                | "PROPOSAL_EXECUTOR_RESULT_FAILURE";
              messages?: {
                type_url?: string;
                value?: string;
              }[];
              title?: string;
              summary?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/group/v1/proposal/${encodeURIComponent(proposalId)}`, {
      ...opts,
    }),
  );
/**
 * TallyResult returns the tally result of a proposal. If the proposal is
 * still in voting period, then this query computes the current tally state,
 * which might not be final. On the other hand, if the proposal is final,
 * then it simply returns the `final_tally_result` state stored in the
 * proposal itself.
 */
export const groupTallyResult = (proposalId: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            tally?: {
              yes_count?: string;
              abstain_count?: string;
              no_count?: string;
              no_with_veto_count?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/group/v1/proposals/${encodeURIComponent(proposalId)}/tally`, {
      ...opts,
    }),
  );
/**
 * ProposalsByGroupPolicy queries proposals based on account address of group policy.
 */
export const proposalsByGroupPolicy = (
  address: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            proposals?: {
              id?: string;
              group_policy_address?: string;
              metadata?: string;
              proposers?: string[];
              submit_time?: string;
              group_version?: string;
              group_policy_version?: string;
              status?:
                | "PROPOSAL_STATUS_UNSPECIFIED"
                | "PROPOSAL_STATUS_SUBMITTED"
                | "PROPOSAL_STATUS_ACCEPTED"
                | "PROPOSAL_STATUS_REJECTED"
                | "PROPOSAL_STATUS_ABORTED"
                | "PROPOSAL_STATUS_WITHDRAWN";
              final_tally_result?: {
                yes_count?: string;
                abstain_count?: string;
                no_count?: string;
                no_with_veto_count?: string;
              };
              voting_period_end?: string;
              executor_result?:
                | "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"
                | "PROPOSAL_EXECUTOR_RESULT_NOT_RUN"
                | "PROPOSAL_EXECUTOR_RESULT_SUCCESS"
                | "PROPOSAL_EXECUTOR_RESULT_FAILURE";
              messages?: {
                type_url?: string;
                value?: string;
              }[];
              title?: string;
              summary?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/proposals_by_group_policy/${encodeURIComponent(address)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * VoteByProposalVoter queries a vote by proposal id and voter.
 */
export const voteByProposalVoter = (proposalId: string, voter: string, opts?: Oazapfts.RequestOpts) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            vote?: {
              proposal_id?: string;
              voter?: string;
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              metadata?: string;
              submit_time?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(`/cosmos/group/v1/vote_by_proposal_voter/${encodeURIComponent(proposalId)}/${encodeURIComponent(voter)}`, {
      ...opts,
    }),
  );
/**
 * VotesByProposal queries a vote by proposal id.
 */
export const votesByProposal = (
  proposalId: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            votes?: {
              proposal_id?: string;
              voter?: string;
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              metadata?: string;
              submit_time?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/votes_by_proposal/${encodeURIComponent(proposalId)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
/**
 * VotesByVoter queries a vote by voter.
 */
export const votesByVoter = (
  voter: string,
  {
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  }: {
    paginationKey?: string;
    paginationOffset?: string;
    paginationLimit?: string;
    paginationCountTotal?: boolean;
    paginationReverse?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts,
) =>
  oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: {
            votes?: {
              proposal_id?: string;
              voter?: string;
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              metadata?: string;
              submit_time?: string;
            }[];
            pagination?: {
              next_key?: string;
              total?: string;
            };
          };
        }
      | {
          status: number;
          data: {
            error?: string;
            code?: number;
            message?: string;
            details?: {
              type_url?: string;
              value?: string;
            }[];
          };
        }
    >(
      `/cosmos/group/v1/votes_by_voter/${encodeURIComponent(voter)}${QS.query(
        QS.explode({
          "pagination.key": paginationKey,
          "pagination.offset": paginationOffset,
          "pagination.limit": paginationLimit,
          "pagination.count_total": paginationCountTotal,
          "pagination.reverse": paginationReverse,
        }),
      )}`,
      {
        ...opts,
      },
    ),
  );
