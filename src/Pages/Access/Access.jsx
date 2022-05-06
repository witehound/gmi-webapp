import "./Access.css";
import Header from "../../components/header/Header";
import AccessHeader from "../../components/AccessHeader/AccessHeader";
import News from "../../components/News/News";

function Access({
  isMetaMask,
  account,
  connectWallet,
  connectingWallet,
  setConnectingWallet,
  accoutAddress,
  ethereum,
  news,
  setNews,
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
        news={news}
        setNews={setNews}
      />
      <div className="access-web3">
        <AccessHeader />
        <News />
      </div>
    </>
  );
}

export default Access;
