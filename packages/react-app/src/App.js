import React from "react";

import styles from "./styles";
import { uniswapLogo } from "./assets";
const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img 
          src={uniswapLogo}
          alt="uniswap logo"
          className="w-16 h-16 object-contain"
          />
          WalletButton
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap 2.0</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
          <div className={styles.exchangeBoxWrapper}>
          <div className={styles.exchangeBox}>
            <div className="pink_gradient" />
            <div className={styles.exchange}>

            </div>
            <div className="blue_gradient" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
