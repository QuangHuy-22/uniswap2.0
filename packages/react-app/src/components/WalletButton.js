import React, { useState, useEffect } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";

import styles from "../styles";

const WalletButton = () => {
  const [accountAddress, setaccountAddress] = useState('');
  const { ens } = useLookupAddress();
  const {account , activateBrowserWallet, deactivate} = useEthers();

  useEffect(()=>{
    if (ens) {
      setaccountAddress(ens)
    } else if (account) {
      setaccountAddress(shortenAddress(account))
    } else {
      setaccountAddress('')
    }
  },[account, ens , setaccountAddress])

  return (
    <button 
    onClick={()=>{
      if (!account) {
        activateBrowserWallet();
      } else{
        deactivate()
      }
    }}
    className={styles.walletButton}
    >
      {accountAddress ? accountAddress : "Connect Wallet"}
      {accountAddress !== "" && accountAddress}
      </button>
  )
};
export default WalletButton;
