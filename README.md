<!-- markdownlint-disable MD041 -->

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

# polaris-ignite

Interact with cosmos chains without the tears 😭

## Description

`polaris-ignite` is a JavaScript client generated using [`ignite/cli`](https://github.com/ignite/cli)'s [generate ts-client command](https://docs.ignite.com/references/cli#ignite-generate-ts-client) from [`cosmos/cosmos-sdk@v0.47.1`](./cosmos-sdk) with specific fixes and codemods.

Generated sources from `ignite/cli` has various type issues that are fixed by running `eslint` and modifying the AST using [`benjamn/recast`](https://github.com/benjamn/recast) which does the following:

- Fully type-safe sources by fixing/removing invalid generated code
- Remove all Keplr related imports and declarations
- Export all root module level class, function, interface, and types

## Installing

```bash
# using npm
npm install polaris-ignite

# using yarn
yarn add polaris-ignite

# using pnpm
pnpm install polaris-ignite
```

## Usage

**Basic example**

```ts
import { Client } from "polaris-ignite";

export const client = new Client({
  apiURL: "https://rest.cosmos.directory/cosmoshub",
  rpcURL: "https://rpc.cosmos.directory/cosmoshub",
});

const response = await client.CosmosAuthzV1Beta1.query.queryGranteeGrants("cosmos...");
console.log(response.data);
```

**React Query Example**

```ts
import { Client } from "polaris-ignite";

export const useClient = () => {
  return useQuery({
    queryKey: ["USE_CLIENT"] as const,
    queryFn: () => {
      return new Client({
        apiURL: "https://rest.cosmos.directory/cosmoshub",
        rpcURL: "https://rpc.cosmos.directory/cosmoshub",
      });
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export const useGranteeGrants = (grantee: string) => {
  const { data: client, isSuccess: isClientReady } = useClient();
  return useQuery({
    queryKey: ["USE_GRANTEE_GRANTS", grantee],
    queryFn: async ({ queryKey: [, _grantee] }) => {
      const response = await client.CosmosAuthzV1Beta1.query.queryGranteeGrants("cosmos...");
      return response.data;
    },
    enabled: isClientReady,
  });
};
```

**Import specific module**

```ts
import { GenericAuthorization } from "polaris-ignite/dist/cosmos.authz.v1beta1";
import { SendAuthorization } from "polaris-ignite/dist/cosmos.bank.v1beta1";
import { StakeAuthorization } from "polaris-ignite/dist/cosmos.staking.v1beta1";
```

## Build from source

Make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io)
- [ignite/cli](https://github.com/ignite/cli)

Then run the following commands:

```bash
# clone and prepare submodules
git clone https://github.com/strangelove-ventures/polaris-ignite.git
cd polaris-ignite
git submodule update --init --recursive

# install dependencies
pnpm install

# generate sources in src/ from cosmos-sdk submodule
pnpm --filter=polaris-ignite generate

# apply fixes and codemods
pnpm --filter=polaris-ignite codemod

# bundle src/ into dist/ and generate type declarations
pnpm --filter=polaris-ignite build
```

## License

[MIT License, Copyright (c) 2023 Strangelove Ventures](./LICENSE)

[npm-version-src]: https://img.shields.io/npm/v/polaris-ignite?style=flat&colorA=18181B&colorB=17DB17
[npm-version-href]: https://npm.im/polaris-ignite
[npm-downloads-src]: https://img.shields.io/npm/dm/polaris-ignite?style=flat&colorA=18181B&colorB=17DB17
[npm-downloads-href]: https://npm.im/polaris-ignite
[bundle-src]: https://img.shields.io/bundlephobia/minzip/polaris-ignite?style=flat&colorA=18181B&colorB=17DB17
[bundle-href]: https://bundlephobia.com/result?p=polaris-ignite
[license-src]: https://img.shields.io/github/license/unjs/polaris-ignite.svg?style=flat&colorA=18181B&colorB=17DB17
[license-href]: https://github.com/unjs/polaris-ignite/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=17DB17
[jsdocs-href]: https://www.jsdocs.io/package/polaris-ignite
