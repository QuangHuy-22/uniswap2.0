import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x6E7317fF551CE765B021c6B1ec087e425A356217"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Z3l2E87xZNWlbsPShHPYljpQ0jS5GE5U",
  },
};