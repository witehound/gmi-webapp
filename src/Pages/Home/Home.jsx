import "./Home.css";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import NftStats from "../../components/NftStats/NftStats";
import nameImg from "../../../assets/gmi-_Wordmark_Black.svg";
import logo from "../../../assets/gmi-_Green_Symbol.svg";
import Usapart from "../../components/usApart/Usapart";
import Copyright from "../../components/Copyright/Copyright";
import LetsCooperate from "../../components/letsCooperate/LetsCooperate";
import { motion } from "framer-motion";

function Home({
  isMetaMask,
  account,
  connectWallet,
  connectingWallet,
  setConnectingWallet,
  accoutAddress
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
      />
      {!connectingWallet && (
        <div className={works ? "Home-hidden" : "Home"}>
          <Hero />
          <CryptoStats />
          <NftStats />
          <Usapart />
          <LetsCooperate />
          <Copyright />
        </div>
      )}
      {connectingWallet && (
        <div className="connect-wallet-container">
          <motion.img
            initial={{ y: "100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
            src={logo}
            alt="welcome to web3"
            className="connect-wallet-container-img-logo"
          />
          <motion.img
            initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
            src={nameImg}
            alt="welcome to web3"
            className="connect-wallet-container-img-name"
          />
        </div>
      )}
    </>
  );
}

export default Home;
