import "./Home.css";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import NftStats from "../../components/NftStats/NftStats";
import logo from "../../../assets/gmi_Original_Wide copy.svg";
import Usapart from "../../components/usApart/Usapart";
import Copyright from "../../components/Copyright/Copyright";
import { motion } from "framer-motion";

function Home({
  isMetaMask,
  account,
  connectWallet,
  connectingWallet,
  setConnectingWallet,
  accoutAddress,
  ethereum,
}) {
  const works = false;
  return (
    <>
      <Header
        account={account}
        isMetaMask={isMetaMask}
        connectWallet={connectWallet}
        setConnectingWallet={setConnectingWallet}
        accoutAddress={accoutAddress}
        ethereum={ethereum}
      />
      {!connectingWallet && (
        <div className={works ? "Home-hidden" : "Home"}>
          <Hero />
          <CryptoStats />
          <NftStats />
          <Usapart />
          <Copyright />
        </div>
      )}
      {connectingWallet && (
        <motion.div className="connect-wallet-container">
          <div className="connect-wallet-container-img-logo-wrap">
            <motion.img
              className="connect-wallet-container-img-logo"
              initial={{ y: "100vw", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
              src={logo}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Home;
