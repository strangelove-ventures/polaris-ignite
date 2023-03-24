import "node-fetch-native/polyfill";

import { createClient } from "@strangelovelabs/polaris";

const example = async () => {
  const client = createClient({
    baseUrl: "https://rest.cosmos.directory/cosmoshub/",
  });

  const response = await client.proposals({
    paginationLimit: (10).toString(),
    paginationReverse: true,
  });

  console.log(response);
};

void example();
