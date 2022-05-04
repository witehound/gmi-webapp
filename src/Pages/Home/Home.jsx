import "./Home.css";
import Header from "../../components/header/Header";
import logo from "../../../assets/gmi_Original_Wide copy.svg";
import { motion } from "framer-motion";
import BlockOne from "../../components/BlockOne/BlockOne";
import BlockTwo from "../../components/BlockTwo/BlockTwo";
import BlockThree from "../../components/BlockThree/BlockThree"
import BlockFour from "../../components/BlockFour/BlockFour";

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
          <BlockOne />
          <BlockTwo />
          <BlockThree />
          <BlockFour />
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
