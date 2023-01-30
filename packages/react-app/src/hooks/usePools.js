import Web3 from "web3";
import {useState, useEffect} from "react"
import { useConfig } from "@usedapp/core";

import { ROUTER_ADDRESS } from "../config";

export const loadPools = async (providerUrl) => {

}

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId])
    .then((pools)=>{
      setPools(pools);
      setLoading(false)
    })
  },[readOnlyChainId, readOnlyUrls])

  return [loading, pools];
}